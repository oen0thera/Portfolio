import { Dispatch, SetStateAction } from "react";

export type StageProps = {
  stageList: StageList;
  currIndex: number;
  setCurrIndex: Dispatch<SetStateAction<number>>;
};
export type StageList = Array<StageType>;

export enum StageType {
  HOME = "home",
  ABOUT = "about",
  SHOWCASE = "showcase",
}
