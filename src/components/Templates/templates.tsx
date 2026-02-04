import {
  TemplateItemType,
  TemplateItemStyle,
  TemplatesProps,
} from "@/types/components/Template.type";
import styles from "./templates.module.scss";
import TemplateItem from "./TemplateItem/templateItem";

export default function Templates({ templates }: TemplatesProps) {
  return (
    <div className={styles.template_wrapper}>
      {templates.map((item) => {
        const templateItem: TemplateItemType = {
          ...item,
          type: TemplateItemStyle.STYLE,
        };
        return <TemplateItem templateItems={templateItem} />;
      })}
    </div>
  );
}
