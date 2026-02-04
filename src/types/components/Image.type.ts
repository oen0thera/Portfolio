export type ImageProps = {
  size: ImageSize;
  src?: ImageSrc;
  type: ImageType;
};
export enum ImageSize {
  SMALL = "sm",
  LARGE = "lg",
}
export enum ImageSrc {
  GIT_PROFILE = "git_profile.png",
  Banner1 = "banner_1.png",
  Banner2 = "banner_2.png",
  Banner3 = "banner_3.png",
  TECH = "tech.png",
}

export enum ImageType {
  LOGO = "logo",
  BANNER = "banner",
  TEMPLATE = "template",
  TECH = "tech",
}
