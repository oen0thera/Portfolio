import { useEffect, useState } from "react";
import styles from "./custom.module.scss";
import Customizer from "./Customizer/Customizer";
import {
  ComponentPositions,
  handleCustomDragParam,
} from "@/types/components/pages/custom/Custom.type";
import CustomGnbRenderer from "@/pages/Custom/CustomRenderer/Gnb/CustomGnbRenderer";
import CustomContentRenderer from "@/pages/Custom/CustomRenderer/Content/CustomContentRenderer";
import CustomSidebarRenderer from "@/pages/Custom/CustomRenderer/Sidebar/CustomSidebarRenderer";
import CustomFooterRenderer from "@/pages/Custom/CustomRenderer/Footer/CustomFooterRenderer";
import Icon from "@/components/Icon/Icon";
import { IconColor, IconSize, IconSrc } from "@/types/components/Icon.type";
import Button from "@/components/Button/Button";
import { ButtonSize } from "@/types/components/Button.type";

export default function Custom() {
  const [selectedComponentPositions, setSelectedComponentPositions] =
    useState<ComponentPositions>({
      gnb: null,
      content: null,
      sidebar: null,
      footer: null,
    });
  const [isDraggingCreated, setIsDraggingCreated] = useState(false);
  const [onGnbDrag, setOnGnbDrag] = useState(false);
  const [onContentDrag, setOnContentDrag] = useState(false);
  const [onSidebarDrag, setOnSidebarDrag] = useState(false);
  const [onFooterDrag, setOnFooterDrag] = useState(false);

  const STAGE_LIST = ["SELECT", "CUSTOMIZE"];

  const handleCustomDrag = ({ isDragging, type }: handleCustomDragParam) => {
    switch (type) {
      case "gnb":
        setOnGnbDrag(isDragging);
        break;
      case "content":
        setOnContentDrag(isDragging);
        break;
      case "sidebar":
        setOnSidebarDrag(isDragging);
        break;
      case "footer":
        setOnFooterDrag(isDragging);
        break;
    }
  };
  const handleCreatedDrag = ({ isDragging, type }: handleCustomDragParam) => {
    setIsDraggingCreated(isDragging); //현재 dragging하고 있는 컴포넌트가 사용자에 의해 생성된 컴포넌트인지 여부
    switch (type) {
      case "gnb":
        setOnGnbDrag(isDragging);
        break;
      case "content":
        setOnContentDrag(isDragging);
        break;
      case "sidebar":
        setOnSidebarDrag(isDragging);
        break;
      case "footer":
        setOnFooterDrag(isDragging);
        break;
    }
  };

  useEffect(() => {
    console.log(selectedComponentPositions, onGnbDrag, onContentDrag);
  }, [selectedComponentPositions]);

  const validateDuplicateDrop = (component: string) => {
    const splitComponent = component.split("_");
    const position = splitComponent[splitComponent.length - 1];
    const validation = Object.values(selectedComponentPositions).every(
      (selectedComponent) => {
        if (selectedComponent?.includes(position)) {
          return false;
        }
        return true;
      }
    );
    return validation;
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    let component = event.currentTarget.title;
    if (validateDuplicateDrop(component) === false) {
      alert(
        "이미 배치된 위치입니다. 기존 요소를 삭제하시거나 다른 위치를 선택해주세요."
      );
      setOnGnbDrag(false);
      setOnContentDrag(false);
      setOnSidebarDrag(false);
      setOnFooterDrag(false);
      return;
    }

    switch (event.currentTarget.id) {
      case "custom_gnb":
        setSelectedComponentPositions((prev) => {
          return { ...prev, gnb: component };
        });
        break;
      case "custom_content":
        setSelectedComponentPositions((prev) => {
          return { ...prev, content: component };
        });
        break;
      case "custom_sidebar":
        setSelectedComponentPositions((prev) => {
          return { ...prev, sidebar: component };
        });
        break;
      case "custom_footer":
        setSelectedComponentPositions((prev) => {
          return { ...prev, footer: component };
        });
        break;
      case "drop_area":
        console.log("drop_area:", component);
        setSelectedComponentPositions((prev) => {
          if (isDraggingCreated && onGnbDrag) return { ...prev, gnb: null };
          if (isDraggingCreated && onContentDrag)
            return { ...prev, content: null };
          if (isDraggingCreated && onSidebarDrag)
            return { ...prev, sidebar: null };
          if (isDraggingCreated && onFooterDrag)
            return { ...prev, footer: null };
          return { ...prev };
        });
    }
    // if (!event.currentTarget.title && onGnbDrag) {
    //   setSelectedComponentPositions((prev) => {
    //     if (selectedComponentPositions.gnb !== null && isDraggingCreated) {
    //       setIsDraggingCreated(false);
    //       return { ...prev };
    //     }
    //     return { ...prev, gnb: null };
    //   });
    // }
    // if (!event.currentTarget.title && onContentDrag) {
    //   setSelectedComponentPositions((prev) => {
    //     if (selectedComponentPositions.content !== null && isDraggingCreated) {
    //       setIsDraggingCreated(false);
    //       return { ...prev };
    //     }
    //     return { ...prev, content: null };
    //   });
    // }
    setOnGnbDrag(false);
    setOnContentDrag(false);
    setOnSidebarDrag(false);
    setOnFooterDrag(false);
  };

  return (
    <>
      {(onGnbDrag || onContentDrag || onSidebarDrag) && (
        <div
          id={"drop_area"}
          title={"drop_area"}
          className={styles.preventGnbDrop}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <Icon
            size={IconSize.SMALL}
            src={IconSrc.TRASHCAN}
            color={IconColor.RED}
          />
        </div>
      )}
      <div
        className={styles.custom}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <section className={styles.stage_section}>
          <div className={styles.stage_components}>
            <Button size={ButtonSize.SMALL} content="다음" onClick={() => {}} />
          </div>
        </section>

        <section className={styles.custom_section}>
          <div className={styles.custom_components}>
            <h2>Customizer</h2>
            <Customizer handleCustomDrag={handleCustomDrag} />
          </div>
          <div
            className={`${styles.custom_canvas} ${
              selectedComponentPositions["gnb"] === "custom_gnb_top"
                ? styles.column
                : styles.row
            }`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <CustomGnbRenderer
              onGnbDrag={onGnbDrag}
              handleDrop={handleDrop}
              handleCreatedDrag={handleCreatedDrag}
              selectedComponentPositions={selectedComponentPositions}
            />
            <CustomContentRenderer
              onGnbDrag={onGnbDrag}
              onContentDrag={onContentDrag}
              onSidebarDrag={onSidebarDrag}
              handleDrop={handleDrop}
              handleCreatedDrag={handleCreatedDrag}
              selectedComponentPositions={selectedComponentPositions}
            />
            <CustomSidebarRenderer
              onGnbDrag={onGnbDrag}
              onContentDrag={onContentDrag}
              onSidebarDrag={onSidebarDrag}
              handleDrop={handleDrop}
              handleCreatedDrag={handleCreatedDrag}
              selectedComponentPositions={selectedComponentPositions}
            />
            <CustomFooterRenderer
              onFooterDrag={onFooterDrag}
              handleDrop={handleDrop}
              handleCreatedDrag={handleCreatedDrag}
              selectedComponentPositions={selectedComponentPositions}
            />
          </div>
        </section>
      </div>
    </>
  );
}
