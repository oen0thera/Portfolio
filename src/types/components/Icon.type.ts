export type IconProps = {
  size: IconSize;
  src: IconSrc;
  color?: IconColor;
  options?: IconOptions;
};
export enum IconSize {
  EXTRA_SMALL = "xs",
  SMALL = "sm",
}
export enum IconSrc {
  SCROLL = "mouse-scroll.svg",
  CHEVRON = "chevron.png",
  SEARCH = "search.svg",
  TRASHCAN = "trash-solid.svg",
}
export enum IconColor {
  WHITE = "white",
  RED = "red",
  DEFAULT = "default",
}
export type IconOptions = {
  inverted?: boolean;
};
