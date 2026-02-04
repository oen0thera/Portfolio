import styles from "./custom_sidebar_renderer.module.scss";
import {
  customComponentType,
  CustomSidebarRendererProps,
} from "@/types/components/pages/custom/Custom.type";

export default function CustomSidebarRenderer({
  onGnbDrag,
  onSidebarDrag,
  handleDrop,
  selectedComponentPositions,
  handleCreatedDrag,
}: CustomSidebarRendererProps) {
  function renderSidebarLeft() {
    if (selectedComponentPositions["sidebar"] === "custom_sidebar_left") {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_left"}
          className={`${styles.custom_sidebar} ${styles.left} ${
            styles.selected
          } ${
            selectedComponentPositions["gnb"] === "custom_gnb_right"
              ? onGnbDrag
                ? styles.vertical_changable
                : styles.vertical_expand
              : selectedComponentPositions["gnb"] === "custom_gnb_left"
              ? onGnbDrag
                ? styles.vertical_changable
                : styles.vertical_expand
              : null
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.SIDEBAR,
            });
          }}
          onDrop={handleDrop}
          draggable
        >
          Sidebar
        </div>
      );
    }

    if (
      onSidebarDrag === true &&
      selectedComponentPositions["gnb"] !== "custom_gnb_left"
    ) {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_left"}
          className={`${styles.custom_sidebar} ${styles.left}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  function renderSidebarRight() {
    if (selectedComponentPositions["sidebar"] === "custom_sidebar_right") {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_right"}
          className={`${styles.custom_sidebar} ${styles.right} ${
            styles.selected
          } ${
            selectedComponentPositions["gnb"] === "custom_gnb_right"
              ? onGnbDrag
                ? styles.vertical_changable
                : styles.vertical_expand
              : selectedComponentPositions["gnb"] === "custom_gnb_left"
              ? onGnbDrag
                ? styles.vertical_changable
                : styles.vertical_expand
              : null
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.SIDEBAR,
            });
          }}
          onDrop={handleDrop}
          draggable
        >
          Sidebar
        </div>
      );
    }

    if (onSidebarDrag === true) {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_right"}
          className={`${styles.custom_sidebar} ${styles.right}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }
  function renderSidebarTop() {
    if (selectedComponentPositions["sidebar"] === "custom_sidebar_top") {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_top"}
          className={`${styles.custom_sidebar} ${styles.top} ${styles.selected}`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.SIDEBAR,
            });
          }}
          onDrop={handleDrop}
          draggable
        >
          Sidebar
        </div>
      );
    }

    if (onSidebarDrag === true) {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_top"}
          className={`${styles.custom_sidebar} ${styles.top}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  function renderSidebarBottom() {
    if (selectedComponentPositions["sidebar"] === "custom_sidebar_bottom") {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_bottom"}
          className={`${styles.custom_sidebar} ${styles.bottom} ${styles.selected}`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.SIDEBAR,
            });
          }}
          onDrop={handleDrop}
          draggable
        >
          Sidebar
        </div>
      );
    }

    if (onSidebarDrag === true) {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_bottom"}
          className={`${styles.custom_sidebar} ${styles.bottom}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  return (
    <>
      {/* Sidebar 파트 */}
      {renderSidebarLeft()}
      {renderSidebarRight()}
      {renderSidebarTop()}
      {renderSidebarBottom()}
    </>
  );
}
