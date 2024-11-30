# 모노레포

> 1개의 레포지토리

---

### 1. 왜 필요한가?

- 관리 포인트를 줄이기 위함.
- 관리할 게 많아지면 이게 다 시간이고 비용이다 -> 우리의 납기일이 늦어지고, 거래처나 우리만의 서비스 배포가 늦어짐 -> 일정이 늦어짐 -> 매출이 떨어지고 -> 우리의 고용상태도 불안해진다.
- **개발 생산성도 올려줄 수 있다!**

---

### 2. 변화하는 부분

#### As-is

(프론트) 각 프로젝트마다 각각의 깃헙 레포지토리를 관리했었다면,

👇

#### To-be

우리는 모두 프론트엔드이기 때문에, 재사용 가능한 파일들은 한데 모아서, 하나의 레포지토리로 관리하고, 그것을 푸시/풀 하면서 -> 공통된 개발 경험을 가져간다!
=> 생산성을 올리고, 비용을 낮춘다.

- 배포 문제, 네트워크 문제, 버저닝 등의 개발 외적인 것에 정신을 팔리지 않아도 됩니다!

---

### 3. 어떻게 구현?

1. 하나의 루트 디렉토리를 만들어 놓는다.
2. `pnpm init`을 통해 `package.json`을 루트 디렉토리에 생성한다.
3. `apps`, `packages`라는 각 목적에 맞는 하위 디렉토리를 만든다.

- `apps` : 각 실제 배포되며, 유저에게 보여지는 서비스
  - mbti...
  - 반려동물...
- `packages` : 우리 팀/회사 안에서 재사용 가능한 파일들을 정리해 놓는다.
  - utils 함수들 정리
  - 디자인 시스템
  - etc..

4. `pnpm-workspace.yaml` 파일을 만들고, 아래 코드를 작성한다.

- \*이 하나면 그 직접 하위 디렉토리만 인식
- \*이 두 개면 그 모든 하위 디렉토리를 인식

```
packages:
  - "apps/**"
  - "packages/**"
```

5. 각 서비스의 목적에 맞게 파일을 디렉토리에 정리한다.

(Example)

- `apps/storybook` : 우리의 디자인시스템을 보여줄 서비스

  1. React + Vite 사용 (굳이 Next.js 필요 X)
  2. 루트 `package.json`에 `storybook: "pnpm --filter design-system storybook"` 명령어 등록
  3. `pnpm storybook`으로 실행

- `packages/@company/design-system` : 우리의 디자인시스템 그 자체
  1. 열심히 개발한다.

6. app 기준으로 초기 세팅 잘하기
1. `apps/` 안에다가 제공하고자 하는 서비스를 이름으로 하는 폴더를 생성.
   - `apps/sns`
1. 해당 폴더에 들어가서(`cd apps/sns`), 초기세팅을 한다.

   - Storybook : `pnpm dlx storybook@latest init`
   - Next.js : `npx create-next-app@latest`

1. npx 스러운 친구가 초기 세팅을 통해 필요한 파일 및 폴더들을 그 안에 다 해주면 -> 하위에 생긴 `package.json` 내부의 명령어를 루트의 `package.json`과 연결해준다.

```
{
  "<내부패키지이름:명령어>": "pnpm --filter <내부패키지이름> <내부패키지명령어>"
}
```

2. `pnpm <내부패키지이름:명령어>`로 실행
   ex. `pnpm sns:dev`

3. 각 프로젝트마다 필요한 라이브러리가 있다면, 루트에서 아래 명령어 사용
   `pnpm --filter <내부패키지이름> add (-D) <라이브러리이름>`
   ex. `pnpm --filter sns add styled-components`

   만약에, 모노레포 안에 있는 우리 내부 패키지라면?
   => 사용하고자 하는 곳(필요한 곳)에 있는 `package.json` **안에서, 아래와 같이 작성 후, 루트에서 `pnpm i`**

```
"<패키지이름>": "workspace:*"
```

ex. "design-system": "workspace:\*"
