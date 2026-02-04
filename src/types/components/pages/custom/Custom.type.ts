import React from "react";

export type CustomizerProps = {
  handleCustomDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type ComponentPositions = {
  gnb: string | null;
  content: string | null;
  sidebar: string | null;
  footer: string | null;
};

export type CustomGnbRendererProps = {
  onGnbDrag: boolean;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  selectedComponentPositions: ComponentPositions;
  handleCreatedDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type CustomContentRendererProps = {
  onGnbDrag: boolean;
  onContentDrag: boolean;
  onSidebarDrag: boolean;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  selectedComponentPositions: ComponentPositions;
  handleCreatedDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type CustomSidebarRendererProps = {
  onGnbDrag: boolean;
  onContentDrag: boolean;
  onSidebarDrag: boolean;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  selectedComponentPositions: ComponentPositions;
  handleCreatedDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type CustomFooterRendererProps = {
  onFooterDrag: boolean;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  selectedComponentPositions: ComponentPositions;
  handleCreatedDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type handleCustomDragParam = {
  isDragging: boolean;
  type?: customComponentType;
};

export enum customComponentType {
  GNB = "gnb",
  CONTENT = "content",
  SIDEBAR = "sidebar",
  FOOTER = "footer",
}
