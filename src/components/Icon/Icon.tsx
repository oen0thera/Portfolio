import { IconColor, IconProps, IconSize } from "@/types/components/Icon.type";
import styles from "./icon.module.scss";
export default function Icon({
  size,
  src,
  color = IconColor.DEFAULT,
  options,
}: IconProps) {
  let iconSize;
  switch (size) {
    case IconSize.EXTRA_SMALL:
      iconSize = 20;
      break;
    case IconSize.SMALL:
      iconSize = 50;
      break;
    default:
      iconSize = 100;
  }
  return (
    <div className={styles.icon}>
      <img
        className={styles[color]}
        src={`/icons/${src}`}
        width={iconSize}
        style={
          options?.inverted ? { transform: "rotateY(-180deg)" } : undefined
        }
      />
    </div>
  );
}
