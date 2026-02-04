import {
  ButtonProps,
  ButtonSize,
  ButtonType,
} from "@/types/components/Button.type";
import styles from "./button.module.scss";

export default function Button({
  size,
  content,
  type = ButtonType.DEFAULT,
  onClick,
}: ButtonProps) {
  let buttonSize;

  switch (size) {
    case ButtonSize.EXTRA_SMALL:
      buttonSize = styles.xs;
      break;
    case ButtonSize.SMALL:
      buttonSize = styles.sm;
      break;
    case ButtonSize.LARGE:
      buttonSize = styles.lg;
      break;
    case ButtonSize.EXTRA_LARGE:
      buttonSize = styles.xl;
      break;
  }
  return (
    <div
      className={`${styles.button} ${buttonSize} ${styles[type]}`}
      onClick={onClick}
    >
      {content}
    </div>
  );
}
