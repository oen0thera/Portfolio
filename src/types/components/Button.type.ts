export type ButtonProps = {
  size: ButtonSize;
  content: string;
  type?: ButtonType;
  onClick: () => void;
};
export enum ButtonSize {
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  LARGE = "lg",
  EXTRA_LARGE = "xl",
}
export enum ButtonType {
  GOOGLE = "google",
  KAKAO = "kakao",
  NAVER = "naver",
  DARK = "dark",
  DEFAULT = "default",
}
