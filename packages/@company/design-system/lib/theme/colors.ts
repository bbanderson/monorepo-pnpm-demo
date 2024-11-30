export const referenceToken = {
  base: {
    white: "#ffffff",
    black: "#000000",
  },
  /** primary */
  primary: {
    gray: {
      /** Gray 25 회색임. Code = 문서.
       *
       * @deprecated (개발 전용 영단어 - 이제는 더이상 쓰이지 않아요... 오래됐거든요..)
       */
      25: "#FDFDFD",
      50: "#FAFAFA", // Alt + Shift + I
      100: "#F5F5F5",
      200: "#E9EAEB",
      300: "#D5D7DA",
      400: "#A4A7AE",
      500: "#717680",
      600: "#535862",
      700: "#414651",
      800: "#252B37",
      900: "#101828",
    },
    brand: {
      25: "#FCFAFF",
      50: "#F9F5FF",
      100: "#F4EBFF",
      200: "#E9D7FE",
      300: "#D6BBFB",
      400: "#B692F6",
      500: "#9E77ED",
      600: "#7F56D9",
      700: "#6941C6",
      800: "#53389E",
      900: "#42307D",
    },
    error: {
      25: "#FFFBFA",
      50: "#FEF3F2",
      100: "#FEE4E2",
      200: "#FECDCA",
      300: "#FDA29B",
      400: "#F97066",
      500: "#F04438",
      600: "#D92D20",
      700: "#B42318",
      800: "#912018",
      900: "#7A271A",
    },
    warning: {
      25: "#FFFCF5",
      50: "#FFFAEB",
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",
      500: "#F79009",
      600: "#DC6803",
      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E",
    },
    success: {
      25: "#F6FEF9",
      50: "#ECFDF3",
      100: "#D1FADF",
      200: "#A6F4C5",
      300: "#6CE9A6",
      400: "#32D583",
      500: "#12B76A",
      600: "#039855",
      700: "#027A48",
      800: "#05603A",
      900: "#054F31",
    },
  },
  secondary: {
    blueGray: {
      25: "#FCFCFD",
      50: "#F8F9FC",
      100: "#EAECF5",
      200: "#D5D9EB",
      300: "#AFB5D9",
      400: "#717BBC",
      500: "#4E5BA6",
      600: "#3E4784",
      700: "#363F72",
      800: "#293056",
      900: "#101323",
    },
    blueLight: {
      25: "#F5FBFF",
      50: "#F0F9FF",
      100: "#E0F2FE",
      200: "#B9E6FE",
      300: "#7CD4FD",
      400: "#36BFFA",
      500: "#0BA5EC",
      600: "#0086C9",
      700: "#026AA2",
      800: "#065986",
      900: "#0B4A6F",
    },
    blue: {
      25: "#F5FAFF",
      50: "#EFF8FF",
      100: "#D1E9FF",
      200: "#B2DDFF",
      300: "#84CAFF",
      400: "#53B1FD",
      500: "#2E90FA",
      600: "#1570EF",
      700: "#175CD3",
      800: "#1849A9",
      900: "#194185",
    },
  },
} as const;

export const systemToken = {
  background: {
    /** 기본 배경색 */
    primary: referenceToken.primary.gray[50],
    /** 보조 배경색 */
    secondary: referenceToken.primary.gray[100],
    /** 오버레이 배경색 (모달 등) */
    overlay: referenceToken.primary.gray[800],
    /** 브랜드 배경색 */
    brand: referenceToken.primary.brand[100],
    /** 에러 배경색 */
    error: referenceToken.primary.error[50],
    /** 성공 배경색 */
    success: referenceToken.primary.success[50],
    /** 경고 배경색 */
    warning: referenceToken.primary.warning[50],
  },
  border: {
    default: referenceToken.primary.gray[200],
    focus: referenceToken.primary.brand[500],
    brand: referenceToken.primary.brand[100],
    error: referenceToken.primary.error[500],
    success: referenceToken.primary.success[500],
    warning: referenceToken.primary.warning[500],
  },
  text: {
    primary: referenceToken.primary.gray[900],
    secondary: referenceToken.primary.gray[700],
    overlay: referenceToken.primary.gray[400],
    brand: referenceToken.primary.brand[700],
    error: referenceToken.primary.error[700],
    success: referenceToken.primary.success[700],
    warning: referenceToken.primary.warning[700],
    button: referenceToken.base.white,
  },
};

export const componentToken = {
  button: {
    primary: {
      background: referenceToken.primary.brand[600],
      text: {
        default: systemToken.text.button,
        disabled: referenceToken.primary.gray[300],
      },
      hover: referenceToken.primary.brand[400],
      active: referenceToken.primary.brand[800],
      disabled: referenceToken.primary.brand[200],
      focus: referenceToken.primary.brand[900],
    },
    secondary: {},
    tertiary: {},
  },
  input: {
    hintTextColor: referenceToken.primary.gray[600],
    labelTextColor: referenceToken.primary.gray[700],
    textColor: {
      placeholder: referenceToken.primary.gray[500],
      default: referenceToken.primary.gray[900],
      filled: referenceToken.primary.gray[900],
      disabled: referenceToken.primary.gray[500],
      destructive: referenceToken.primary.error[500],
    },
    borderColor: {
      placeholder: referenceToken.primary.gray[300],
      filled: referenceToken.primary.gray[300],
      focus: referenceToken.primary.brand[300],
      disabled: referenceToken.primary.gray[300],
      destructive: referenceToken.primary.error[300],
    },
    backgroundColor: {
      default: referenceToken.base.white,
      disabled: referenceToken.primary.gray[50],
    },
  },
};
