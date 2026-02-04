type TemplateData = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
};
export type TemplatesProps = {
  templates: TemplateData[];
};
export type TemplateItemType = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  type: TemplateItemStyle;
};
export enum TemplateItemStyle {
  STYLE = "style",
}
export type TemplateItemProps = {
  templateItems: TemplateItemType;
};
