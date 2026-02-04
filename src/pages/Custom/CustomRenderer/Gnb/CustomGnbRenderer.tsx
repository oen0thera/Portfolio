import { useEffect } from "react";
import styles from "./custom_gnb_renderer.module.scss";
import {
  customComponentType,
  CustomGnbRendererProps,
} from "@/types/components/pages/custom/Custom.type";

export default function CustomGnbRenderer({
  onGnbDrag,
  handleDrop,
  selectedComponentPositions,
  handleCreatedDrag,
}: CustomGnbRendererProps) {
  useEffect(() => {
    console.log(selectedComponentPositions);
  }, [selectedComponentPositions]);

  function renderLeft() {
    console.log("renderLeft 호출됨:", selectedComponentPositions["gnb"]);
    console.log(selectedComponentPositions["gnb"] === "custom_gnb_left");
    if (selectedComponentPositions["gnb"] === "custom_gnb_left") {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_left"}
          className={`${styles.custom_gnb} ${styles.left} ${styles.selected}`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.GNB,
            });
          }}
          draggable
        >
          GNB
        </div>
      );
    }
    if (onGnbDrag === true) {
      console.log("??");
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_left"}
          className={`${styles.custom_gnb} ${styles.left}`}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }
  function renderTop() {
    if (selectedComponentPositions["gnb"] === "custom_gnb_top") {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_top"}
          className={`${styles.custom_gnb} ${styles.top} ${styles.selected}`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.GNB,
            });
          }}
          draggable
        >
          GNB
        </div>
      );
    }
    if (onGnbDrag) {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_top"}
          className={`${styles.custom_gnb} ${styles.top}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  function renderRight() {
    if (selectedComponentPositions["gnb"] === "custom_gnb_right") {
      console.log("render right");
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_right"}
          className={`${styles.custom_gnb} ${styles.right} ${styles.selected}`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.GNB,
            });
          }}
          draggable
        >
          GNB
        </div>
      );
    }
    if (onGnbDrag) {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_right"}
          className={`${styles.custom_gnb} ${styles.right}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  return (
    <>
      {renderLeft()}
      {renderTop()}
      {renderRight()}
    </>
  );
}
