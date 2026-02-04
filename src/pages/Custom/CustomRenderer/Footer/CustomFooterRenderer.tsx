import { useEffect } from "react";
import styles from "./custom_footer_renderer.module.scss";
import {
  customComponentType,
  CustomFooterRendererProps,
} from "@/types/components/pages/custom/Custom.type";

export default function CustomFooterRenderer({
  onFooterDrag,
  handleDrop,
  selectedComponentPositions,
  handleCreatedDrag,
}: CustomFooterRendererProps) {
  useEffect(() => {
    console.log(selectedComponentPositions);
  }, [selectedComponentPositions]);

  function renderLeft() {
    console.log("renderLeft 호출됨:", selectedComponentPositions["footer"]);
    console.log(selectedComponentPositions["footer"] === "custom_footer_left");
    if (selectedComponentPositions["footer"] === "custom_footer_left") {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_left"}
          className={`${styles.custom_footer} ${styles.left} ${styles.selected}`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.FOOTER,
            });
          }}
          draggable
        >
          FOOTER
        </div>
      );
    }
    if (onFooterDrag === true) {
      console.log("??");
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_left"}
          className={`${styles.custom_footer} ${styles.left}`}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }
  function renderBottom() {
    if (selectedComponentPositions["footer"] === "custom_footer_bottom") {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_bottom"}
          className={`${styles.custom_footer} ${styles.bottom} ${styles.selected}`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.FOOTER,
            });
          }}
          draggable
        >
          FOOTER
        </div>
      );
    }
    if (onFooterDrag) {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_bottom"}
          className={`${styles.custom_footer} ${styles.bottom}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  function renderRight() {
    if (selectedComponentPositions["footer"] === "custom_footer_right") {
      console.log("render right");
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_right"}
          className={`${styles.custom_footer} ${styles.right} ${styles.selected}`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.FOOTER,
            });
          }}
          draggable
        >
          FOOTER
        </div>
      );
    }
    if (onFooterDrag) {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_right"}
          className={`${styles.custom_footer} ${styles.right}`}
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
      {renderBottom()}
      {renderRight()}
    </>
  );
}
