import { ScrollDetectProps } from "@/types/components/pages/introduction/Content/Showcase.type";
import { useScroll } from "@react-three/drei";

const ScrollDetect = ({ onScroll, scrollTo, setScroll }: ScrollDetectProps) => {
  const scroll = useScroll();
  if (scrollTo) {
    console.log((scroll.el.scrollHeight / 30) * ((30 / 4) * (scrollTo - 1)));
    scroll.el.scrollTo({
      top: (scroll.el.scrollHeight / 30) * ((30 / 4) * (scrollTo - 1 * 0.7)),
      behavior: "smooth",
    });
  }
  setScroll(null);

  onScroll(scroll.offset);
  return null;
};

export default ScrollDetect;
