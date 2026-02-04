import { Dispatch, SetStateAction } from "react";

export type ShowcaseProps = {
  scroll: number;
  nextStage: (next: boolean) => void;
  prevStage: (prev: boolean) => void;
};

export type ShowcaseUnitArgs = {
  position: Array<number>;
  page: number;
  type: ShowcaseUnitEnum;
  content: string;
  setHover: Dispatch<SetStateAction<boolean>>;
  setScreenOff: Dispatch<SetStateAction<boolean>>;
};
export enum ShowcaseUnitEnum {
  ABOUT = "about",
  WORK = "work",
  IDEA = "idea",
  CONTACT = "contact",
}
export type ScrollDetectProps = {
  onScroll: (scroll: number) => void;
  scrollTo?: number | null;
  setScroll: Dispatch<SetStateAction<number | null>>;
};
