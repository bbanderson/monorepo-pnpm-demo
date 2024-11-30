// ? Tuple 튜플 - 순서가 정해진 like배열 (배열은 아님.) -> tailwindcss 설정을 할 때 Tuple 형식으로 주입하기로 약속되어 있음. (관습상)
type TypographyType = [
  fontSize: string,
  { lineHeight: string; letterSpacing: string; fontWeight: FontWeight }
];

type DesignSystem = "ds";
type Category = "Display" | "Text";
type Size = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
// * Union : 타입스크립트에서의 OR (|)
// * 타입스크립트 유틸리티 타입 -> Exclude : "Union(|) 중에서 특정한 것들 빼줘" ex) Exclude<Union들, 특정한것>
// ? 참고) Exclude <-> Extract : "Union(|) 중에서 특정한 것들 빼줘"
type CategoryWithSize = `Display-${Size}` | `Text-${Exclude<Size, "2xl">}`;

enum FontWeight {
  Regular = 400,
  Medium = 500,
  Semibold = 600,
  Bold = 700,
}

// typeof가 자바스크립트에서 "값"으로 쓰일 때.
const sample = "sample";
typeof sample === "number";

// typeof가 타입스크립트에서 "타입으로'만'" 쓰일 때.
type A = typeof FontWeight;
type B = keyof A;

// ? literal 리터럴 = "보이는 대로가 바로 값 그 자체다."
// ? Literal에다가, 그 literal이 쓰여야 하는 곳의 의미/맥락을 담고 싶다? -> "enum" [카테고리화].
// * 정리) 결국 literal을 사용하는 것은 맞음. 그런데, 그걸 (꺼내서) 쓸 때 그 값이 뭔데? 무슨 의미인데? 언제 쓰는데? 나는
// * 나는 그 값이 뭔 뜻인지 기억하고 싶지 않아. 그냥 꺼내서 쓸 건데, 그 의미만 알려줘.
const sampleText = "string is my string.";

/* enum의 사용 예제 */
// 회원가입
/* 
1. 아이디입력
2. 비밀번호 설정
3. 닉네임 설정
*/

/* 
const [step, setStep] = useState<Step>(Step.ID);

{step === Step.ID && <input type='id' />}
{step >= Step.ID && <input type='password' />}
 */

/* 
enum은 2가지 형태가 있습니다. 
* 1. 문자형 - 그 리터럴 값 자체까지 필요한 경우 (정보가 좀 많이 필요한 경우)
! ex) FontWeight -> 400, 500, 600 값을 불러서 사용해야 함. 그렇지만, 기억하고 싶지는 않음. 그래서 FontWeight.Normal 처럼 씀.
* 2. 숫자형 - 그 리터럴 값은 관심없음. (단지 순서/인덱스 느낌으로 사용할 경우)
! ex) Step -> 인덱싱이 자동으로 증가하기 때문에 -> 현재 step에 따른 UI를 구성하기 편함.

! 문자형 vs 숫자형의 구분은 리터럴 값의 자료형이 아니다!!!
! 내가 enum 리터럴을 직접 선언했으면 '문자형'이고, 직접 선언한게 아니라 타입스크립트가 자동으로 인덱싱을 올려주는 것이 '숫자형'이다!
*/
/* 
! 혼재는 하지 않는 것이 좋다.
*/
enum Step {
  ID,
  PASSWORD,
  NICKNAME = "NICKNAME",
  COMPLETE = "COMPLETE",
}

// vscode extension - Better Comments
// * 실무에서는 커뮤니케이션의 낭비를 줄여야 한다! - 커뮤니케이션의 낭비 : 했던 말 또 하게 하지마!!!
// ! ex) 실무에서는 업무 관련 이야기를 할 때는 DM 금지.

// * px은 고정값, rem은 유동값.
// ! <html> { font-size: 16px; }의 폰트 사이즈를 기준으로 하고 && 그것에 대한 상대 비율 값.
export const typography: Record<
  `${"ds"}-${CategoryWithSize}-${keyof typeof FontWeight}`,
  TypographyType
> = {
  "ds-Display-2xl-Regular": [
    "4.5rem",
    {
      lineHeight: "5.625rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Display-2xl-Medium": [
    "4.5rem",
    {
      lineHeight: "5.625rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Display-2xl-Semibold": [
    "4.5rem",
    {
      lineHeight: "5.625rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Display-2xl-Bold": [
    "4.5rem",
    {
      lineHeight: "5.625rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Bold,
    },
  ],
  "ds-Display-xl-Regular": [
    "3.75rem",
    {
      lineHeight: "4.5rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Display-xl-Medium": [
    "3.75rem",
    {
      lineHeight: "4.5rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Display-xl-Semibold": [
    "3.75rem",
    {
      lineHeight: "4.5rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Display-xl-Bold": [
    "3.75rem",
    { lineHeight: "4.5rem", letterSpacing: "-2%", fontWeight: FontWeight.Bold },
  ],
  "ds-Display-lg-Regular": [
    "3rem",
    {
      lineHeight: "3.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Display-lg-Medium": [
    "3rem",
    {
      lineHeight: "3.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Display-lg-Semibold": [
    "3rem",
    {
      lineHeight: "3.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Display-lg-Bold": [
    "3rem",
    {
      lineHeight: "3.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Bold,
    },
  ],
  "ds-Display-md-Regular": [
    "2.25rem",
    {
      lineHeight: "2.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Display-md-Medium": [
    "2.25rem",
    {
      lineHeight: "2.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Display-md-Semibold": [
    "2.25rem",
    {
      lineHeight: "2.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Display-md-Bold": [
    "2.25rem",
    {
      lineHeight: "2.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Bold,
    },
  ],
  "ds-Display-sm-Regular": [
    "1.875rem",
    {
      lineHeight: "2.375rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Display-sm-Medium": [
    "1.875rem",
    {
      lineHeight: "2.375rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Display-sm-Semibold": [
    "1.875rem",
    {
      lineHeight: "2.375rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Display-sm-Bold": [
    "1.875rem",
    {
      lineHeight: "2.375rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Bold,
    },
  ],
  "ds-Display-xs-Regular": [
    "1.5rem",
    {
      lineHeight: "2rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Display-xs-Medium": [
    "1.5rem",
    { lineHeight: "2rem", letterSpacing: "-2%", fontWeight: FontWeight.Medium },
  ],
  "ds-Display-xs-Semibold": [
    "1.5rem",
    {
      lineHeight: "2rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Display-xs-Bold": [
    "1.5rem",
    { lineHeight: "2rem", letterSpacing: "-2%", fontWeight: FontWeight.Bold },
  ],
  "ds-Text-xl-Regular": [
    "1.125rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "10px",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Text-xl-Medium": [
    "1.125rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Text-xl-Semibold": [
    "1.125rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Text-xl-Bold": [
    "1.125rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Bold,
    },
  ],

  /* 재원 */
  "ds-Text-lg-Regular": [
    "1.125rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Text-lg-Medium": [
    "1.125rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Text-lg-Semibold": [
    "1.125rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Text-lg-Bold": [
    "1.125rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Bold,
    },
  ],
  "ds-Text-md-Regular": [
    "1rem",
    {
      lineHeight: "1.5rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Text-md-Medium": [
    "1rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Text-md-Semibold": [
    "1rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Text-md-Bold": [
    "1rem",
    {
      lineHeight: "1.75rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Bold,
    },
  ],
  "ds-Text-sm-Regular": [
    "0.875rem",
    {
      lineHeight: "1.25rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Text-sm-Medium": [
    "0.875rem",
    {
      lineHeight: "1.25rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Text-sm-Semibold": [
    "0.875rem",
    {
      lineHeight: "1.25rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Text-sm-Bold": [
    "0.875rem",
    {
      lineHeight: "1.25rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Bold,
    },
  ],
  "ds-Text-xs-Regular": [
    "0.875rem",
    {
      lineHeight: "1.125rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Regular,
    },
  ],
  "ds-Text-xs-Medium": [
    "0.75rem",
    {
      lineHeight: "1.125rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Medium,
    },
  ],
  "ds-Text-xs-Semibold": [
    "0.75rem",
    {
      lineHeight: "1.125rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Semibold,
    },
  ],
  "ds-Text-xs-Bold": [
    "0.75rem",
    {
      lineHeight: "1.125rem",
      letterSpacing: "-2%",
      fontWeight: FontWeight.Bold,
    },
  ],
};
