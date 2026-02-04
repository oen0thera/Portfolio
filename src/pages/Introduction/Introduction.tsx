import { StageType } from "@/types/components/pages/introduction/Stages.type";
import Stages from "@/pages/Introduction/Stages/Stages";
import { useState } from "react";

export default function Introduction() {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <div>
      <Stages
        stageList={[StageType.HOME, StageType.ABOUT]}
        currIndex={currIndex}
        setCurrIndex={setCurrIndex}
      />
    </div>
  );
}
