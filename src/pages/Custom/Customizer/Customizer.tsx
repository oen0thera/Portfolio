import { useRef } from "react";
import styles from "./customizer.module.scss";
import {
  customComponentType,
  CustomizerProps,
} from "@/types/components/pages/custom/Custom.type";

export default function Customizer({ handleCustomDrag }: CustomizerProps) {
  const ghostRef = useRef<HTMLDivElement>(null);
  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    let dragComponentType;
    const dragComponentId = event.currentTarget.id;
    console.log("dragComponentId:", dragComponentId);
    switch (dragComponentId) {
      case "gnb":
        dragComponentType = customComponentType.GNB;
        break;
      case "content":
        dragComponentType = customComponentType.CONTENT;
        break;
      case "sidebar":
        dragComponentType = customComponentType.SIDEBAR;
        break;
      case "footer":
        dragComponentType = customComponentType.FOOTER;
        break;
    }
    if (event.type == "dragstart") {
      handleCustomDrag({ isDragging: true, type: dragComponentType });
      //드래그 구현
      const currentElement = event.currentTarget; //현재 드래그 중인 element
      const ghostElement = ghostRef.current; //드래그 중일때의 ghost element
      if (currentElement && ghostElement) {
        const currentElementStyle = getComputedStyle(currentElement); //현재 드래그 중인 element의 스타일 불러오기 및 ghostElement에 복사
        ghostElement.style.width = currentElementStyle.width;
        ghostElement.style.height = currentElementStyle.height;
        ghostElement.style.backgroundColor =
          currentElementStyle.backgroundColor;
        ghostElement.style.borderRadius = currentElementStyle.borderRadius;
        ghostElement.style.border = currentElementStyle.border;
        ghostElement.style.fontSize = currentElementStyle.fontSize;
        ghostElement.style.color = currentElementStyle.color;
        ghostElement.style.display = currentElementStyle.display;
        ghostElement.style.alignItems = currentElementStyle.alignItems;
        ghostElement.style.justifyContent = currentElementStyle.justifyContent;
        ghostElement.style.textAlign = currentElementStyle.textAlign;
        ghostElement.textContent = currentElement.textContent; //현재 드래그중인 element의 textContent복사

        event.dataTransfer.setDragImage(ghostElement, 100, 10); //ghostElement를 dragImage로 설정
      }
    } else {
      handleCustomDrag({ isDragging: false, type: dragComponentType });
      console.log(event);
    }
  };

  return (
    <>
      <div className={styles.customizer}>
        <div
          id={"gnb"}
          className={styles.customGNB}
          draggable
          onDragStart={handleDrag}
          onDragEnd={handleDrag}
        >
          GNB
        </div>
        <div className={styles.customBody}>
          <div
            id={"content"}
            className={styles.customContent}
            draggable
            onDragStart={handleDrag}
            onDragEnd={handleDrag}
          >
            Content
          </div>
          <div
            id={"sidebar"}
            className={styles.customSidebar}
            draggable
            onDragStart={handleDrag}
          >
            Side bar
          </div>
        </div>
        <div
          id={"footer"}
          className={styles.customFooter}
          draggable
          onDragStart={handleDrag}
        >
          Footer
        </div>
        <div
          ref={ghostRef}
          style={{
            position: "absolute",
            top: "-9999px",
            left: "-9999px",
            width: "150px",
            height: "50px",
            backgroundColor: "#3498db",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px", // ghost에도 radius 적용
            fontSize: "16px",
            pointerEvents: "none",
          }}
        >
          {}
        </div>
      </div>
    </>
  );
}
