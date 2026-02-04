import { TemplateItemProps } from "@/types/components/Template.type";
import styles from "./templateItem.module.scss";

export default function TemplateItem({ templateItems }: TemplateItemProps) {
  const { title, content } = templateItems;
  return (
    <div className={styles.template_item}>
      <div className={styles.template_details}>{content}</div>
      {title}
    </div>
  );
}
