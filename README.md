# pnpm으로 구현하는 monorepo

```
1개의 레포지토리
```

---

## 1. 왜 필요한가?

- 관리 포인트를 줄이기 위함.
- 관리할 게 많아지면?
  - 이게 다 시간이고 비용이다
  - 우리의 납기일이 늦어지고
  - 거래처나 우리만의 서비스 배포가 늦어짐
  - 일정이 늦어짐
  - 매출이 떨어지고
  - 우리의 고용/사업상태도 불안해진다.

- **개발 생산성도 올려줄 수 있다!**

---

## 2. 도입함으로써 변화하는 부분

### As-is

(프론트) 각 프로젝트마다 각각의 깃헙 레포지토리를 관리했었다면,

👇

### To-be

- 우리는 모두 프론트엔드이기 때문에, 재사용 가능한 파일들은 한데 모아서, 하나의 레포지토리로 관리한다.
- 그것을 푸시/풀 하면서
- 공통된 개발 경험을 가져간다!

```
👉 생산성을 올리고, 비용을 낮춘다.
```

이로써 우리는 배포 문제, 네트워크 문제, 버저닝 등의 개발 외적인 것에 정신을 팔리지 않아도 됩니다!

---

## 3. 어떻게 구현?

1. 하나의 루트 디렉토리를 만들고 vscode를 실행한다.

    `mkdir <새로운폴더명> && cd <새로운폴더명> && code . -r`  

2. 루트 디렉토리에 `pnpm init`을 통해 `package.json`을 루트 디렉토리에 생성한다.
  

3. 루트 디렉토리에 `apps`, `packages`라는 각 목적에 맞는 하위 디렉토리를 만든다.
    - `apps` : 각 실제 배포되며, 유저에게 보여지는 서비스들을 담아놓는 곳
      - mbti...
      - 반려동물...
    - `packages` : 우리 팀/회사 안에서 재사용 가능한 파일들을 담아놓는 곳
      - utils 함수들 정리
      - 디자인 시스템
      - etc..
4. 루트 디렉토리에 `pnpm-workspace.yaml` 파일을 만들고, 아래 코드를 작성한다.
    - *이 하나면 그 직접 하위 디렉토리만 인식
    - *이 두 개면 그 모든 하위 디렉토리를 인식
    ```
    packages:
      - "apps/**"
      - "packages/**"
    ```

5. 이제 실제 프로젝트에 해당하는 폴더를 `apps` 또는 `packages` 하위에 만들고, 각각의 프로젝트를 시작한다. (마치 기존 멀티레포처럼)

---

## 4. 예시

### 4-1. design-system package를 만든다면? (우리의 디자인시스템 패키지)
  1. `packages` 안에 `@<팀/회사명>` 폴더를 만들고, 그 안에 다시 `design-system` 폴더를 만든다.

     > `@<팀/회사명>`을 붙이는 이유는, 기존 외부 라이브러리와 (관습상) 구분하기 위함 

  2. `design-system` 폴더로 이동하여, npm init을 하고, typescript 설치&init을 한다.
      ```
      cd packages/@company/design-system
      pnpm add typescript
      pnpm tsc --init
      ```

  3. 디자인토큰을 만들고 tailwindcss, styled-components 등 라이브러리에 theme 타입을 주입한다.

      ```typescript
      import { componentToken, referenceToken, systemToken } from "./colors";
      import { typography } from "./typography";

      export const theme = {
        colors: {
          ref: referenceToken,
          sys: systemToken,
          comp: componentToken,
        },
        fontSize: typography,
      };

      export type DesignSystemTheme = typeof theme;

      declare module "styled-components" {
        export interface DefaultTheme extends DesignSystemTheme {}
      }
      ```

  4. 앞으로 계속 컴포넌트를 열심히 개발한다.
      ```
        .
        ├── components
        │   ├── Button.tsx
        │   ├── icons
        │   │   └── CheckIcon.tsx
        │   └── Input.tsx
        ├── lib
        │   └── theme
        │       ├── colors.ts
        │       ├── index.ts
        │       └── typography.ts
      ```

### 4-2. storybook app을 만든다면? (우리의 디자인시스템을 보여줄 서비스)
  1. `apps` 안에 `storybook` 폴더를 만든다.
  2. 루트가 아닌, storybook 폴더에서 프로젝트 초기세팅을 한다.

      ```
      pnpm dlx storybook@latest init
      ```

      > 여기서, "React + Vite"를 사용하는 것이 좋다. (굳이 Next.js 필요 X)

      > 위 design-system 초기세팅에서도 보았듯이, "초기 세팅"에서만 이렇게 방금 만든 폴더로 진입해서 하고, 다시 루트 디렉토리로 빠져나가면 된다.
  3. 루트 디렉토리로 다시 나와서, 루트 디렉토리에 있는 `package.json`과 방금 만든 `apps/storybook`에 만들어진 `package.json`을 연결한다.
  
      (루트) package.json
      ```
        storybook: "pnpm --filter storybook storybook"
      ```
  4. 이제 루트 디렉토리에서 `pnpm storybook`으로 스토리북 실행 가능하다.

  5. story 파일에 우리가 만든 디자인 컴포넌트를 불러오기 위해, 루트에서 `storybook` app에 `design-system`을 설치한다.

      아래 명령어를 루트에서 사용하면 된다.
   
         pnpm --filter storybook add design-system --workspace -E

        > --workspace : npm 레지스트리가 아니라, 우리의 모노레포 워크스페이스 내부에 있는 폴더임을 명시<br> -E : 버전을 ^나 ~가 아니라, 정확히 일치시킴을 명시

  6. story 파일을 작성한다.

      ```typescript
      import { Button } from "design-system/components/Button";
      import type { Meta, StoryObj } from "@storybook/react";

      const meta = {
        title: "@company/design-system/Button",
        component: Button,
        parameters: {
          layout: "centered",
        },
        tags: ["autodocs"],
        argTypes: {},
      } satisfies Meta<typeof Button>;

      export default meta;
      type Story = StoryObj<typeof meta>;

      export const Primary: Story = {
        args: {
          size: "2xl",
          hierarchy: "Primary",
          destructive: false,
          children: "Button",
        },
      };
      ```

  7. 4번과 마찬가지로, 루트에서 `pnpm storybook`을 실행함으로써 즉시 확인 가능하다.


### 4-3. 추가되는 서비스마다 그때그때 packages 반영하기

1. `apps/` 안에다가 제공하고자 하는 서비스를 이름으로 하는 폴더를 생성.
   - `apps/sns`
2. 해당 폴더에 들어가서(`cd apps/sns`), 초기세팅을 한다.

    ```
    npx create-next-app@latest
    ```

    > 위 storybook app 초기세팅에서도 보았듯이, "초기 세팅"에서만 이렇게 방금 만든 폴더로 진입해서 하고, 다시 루트 디렉토리로 빠져나가면 된다.
    > - Storybook : `pnpm dlx storybook@latest init`
    > - Next.js : `npx create-next-app@latest`
  
3. 2번에서 npx 스러운 친구가 초기 세팅을 통해 필요한 파일 및 폴더들을 그 안에 다 해주면 -> 하위에 생긴 `package.json` 내부의 명령어를 루트의 `package.json`과 연결해준다.


    (루트) package.json 문법
    ```json
    {
      "나만의커스텀명령어": "pnpm --filter <내부패키지이름> <내부패키지명령어>"
    }
    ```

    > 위에서 <내부패키지이름>은 sns 폴더 안에 있는 package.json 파일의 "name"을 의미한다.

    > <내부패키지명령어>는 기본적으로 dev로 세팅되어 있는 그것이다.

    > <나만의커스텀명령어>는 보통 <내부패키지이름:내부패키지명령어> 조합으로 많이 쓴다.

    그러면 실제로 아래와 같이 쓸 수 있다.

    (루트) package.json 실제 예제
    ```json
    {
      "sns:dev": "pnpm --filter sns dev"
    }
    ```

4. 이제 루트에서 `pnpm <나만의커스텀명령어>`로 실행 가능하다.

    ```bash
    pnpm sns:dev
    ```

---

## 5. pnpm CLI 정리

### 5-1. `pnpm i` 또는 `pnpm install`

pnpm-lock.yaml 파일을 기반으로, 의존성을 다시 설치해준다.

### 5-2. `pnpm add <라이브러리명>`

새로운 라이브러리를 설치하고, pnpm-lock.yaml을 업데이트한다.

### 5-3. `pnpm --filter <특정하위패키지> <pnpm다른명령어>`

pnpm 관련 명령어를 특정 하위 패키지에만 적용시킨다.

<br>
예를 들어, 각 프로젝트마다 필요한 라이브러리가 있다면, 루트에서 아래 명령어 사용한다.
  
  (sns에 styled-components를 설치하는 예제)
  ```bash
   `pnpm --filter sns add styled-components`
   ```
   ex. `pnpm --filter sns add styled-components`

<br>

**만약 설치하고자 하는 것이 외부 라이브러리가 아니라, 모노레포 안에 있는 우리 내부 패키지라면?**

👇 5-4 참고


### 5-4. `pnpm --filter <하위패키지수요자> add <하위패키지공급자> --workspace -E`

만약 `sns`에서 `design-system`이 필요하다면, 아래와 같이 사용한다.

```bash
pnpm --filter sns add design-system --workspace -E
```

- `--workspace` : npm 레지스트리가 아니라, 우리의 모노레포 워크스페이스 내부에 있는 폴더임을 명시
- `-E` : 버전을 ^나 ~가 아니라, 정확히 일치시킴을 명시 `(workspace:*)`

이는 아래와 같이 수요자의 `package.json`에 직접 적은 후에 `pnpm i`를 하는 것과 동일한 효과를 준다.
```json
"<패키지이름>": "workspace:*"
```
(sns) package.json
```json
"design-system": "workspace:*"
```