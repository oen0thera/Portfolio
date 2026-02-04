import Banner from "@/components/Banner/Banner";
import styles from "./main.module.scss";
import Templates from "@/components/Templates/templates";

export default function Main() {
  return (
    <div className={styles.main}>
      <Banner />
      <h2>지금 인기있는 템플릿</h2>

      <div>
        <Templates
          templates={[
            { id: 1, title: "1", content: "1번 템플릿", imageUrl: "image1" },
            { id: 2, title: "2", content: "2번 템플릿", imageUrl: "image2" },
            { id: 3, title: "3", content: "3번 템플릿", imageUrl: "image3" },
          ]}
        />
      </div>
      <h2>포트폴리오</h2>
      <div>
        <Templates
          templates={[
            { id: 1, title: "1", content: "1번 템플릿", imageUrl: "image1" },
            { id: 2, title: "2", content: "2번 템플릿", imageUrl: "image2" },
            { id: 3, title: "3", content: "3번 템플릿", imageUrl: "image3" },
          ]}
        />
      </div>
      <h2>광고/홍보</h2>
      <div>
        <Templates
          templates={[
            { id: 1, title: "1", content: "1번 템플릿", imageUrl: "image1" },
            { id: 2, title: "2", content: "2번 템플릿", imageUrl: "image2" },
            { id: 3, title: "3", content: "3번 템플릿", imageUrl: "image3" },
          ]}
        />
      </div>
    </div>
  );
}
