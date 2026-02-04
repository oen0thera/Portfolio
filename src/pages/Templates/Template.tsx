import Templates from "@/components/Templates/templates";
import styles from "./template.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconSize, IconSrc } from "@/types/components/Icon.type";
import { useRef, useState } from "react";

export default function Template() {
  const [inputFocus, setInputFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchFocusHandler = (isFocus: boolean) => {
    if (isFocus) {
      setInputFocus(true);
    } else {
      if (inputRef.current && !inputRef.current.value) {
        setInputFocus(false);
      }
    }
  };
  return (
    <div className={styles.template}>
      <section className={styles.template_section}>
        <div className={styles.template_top}>
          <h2>Template</h2>
          <div className={styles.template_search}>
            {!inputFocus && (
              <div className={styles.search_label}>
                <Icon size={IconSize.EXTRA_SMALL} src={IconSrc.SEARCH} />
                <h3>검색</h3>
              </div>
            )}

            <input
              type="text"
              ref={inputRef}
              onFocus={() => {
                searchFocusHandler(true);
              }}
              onBlur={() => {
                searchFocusHandler(false);
              }}
            />
          </div>
        </div>
      </section>

      <section className={styles.template_section}>
        <Templates
          templates={[
            { id: 1, title: "1", content: "1번 템플릿", imageUrl: "image1" },
            { id: 2, title: "2", content: "2번 템플릿", imageUrl: "image2" },
            { id: 3, title: "3", content: "3번 템플릿", imageUrl: "image3" },
          ]}
        />
      </section>
    </div>
  );
}
