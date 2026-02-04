import { ImageProps, ImageSize } from "@/types/components/Image.type";
import styles from './image.module.scss'

export default function Image({ size, src,type }: ImageProps) {
  return (
    <div className={`${styles.image} ${size === ImageSize.SMALL ? styles.logo:styles.banner}`} >
      {src?<img
        src={`/images/${src}`}
        width={`${size === ImageSize.SMALL ? "30px" : "100%"}`}
        height={`${size === ImageSize.SMALL ? "30px" : "100%"}`}
        alt={`${type}`}
      />:<div className={styles.default}>{type}</div>}
    </div>
  );
}
