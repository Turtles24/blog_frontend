import * as React from "react";
import { ThemeBox } from "./themeBox";
import { PageNavigator } from "@/containers/componenet/pageNavigator"; // PageNavigator 컴포넌트 불러오기
import { MarginTop } from "@/containers/componenet/marginTop";

export interface ArticleBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  main_img: string;
  theme: string;
  sub_title: string;
  link: string; // 페이지 이동을 위한 링크 추가
  onNavigateContent: React.ReactNode; // PageNavigator 내부 콘텐츠를 동적으로 전달
}

const ArticleBox = React.forwardRef<HTMLDivElement, ArticleBoxProps>(
  ({ main_img, theme, sub_title, link, onNavigateContent }, ref) => {
    return (
      <div className="flex justify-center items-center" ref={ref}>
        <div>
          <img style={{ width: "360px" }} src={main_img} alt="Main" />
        </div>
        <div className="ml-14 justify-start select-none" draggable="false">
          <ThemeBox theme={theme} />
          <MarginTop margin={"2"} />
          <PageNavigator link={link}>{onNavigateContent}</PageNavigator>
          <MarginTop margin={"2"} />
          <p className="w-fit m-0 font-pre text-[#434750] text-base font-medium tracking-tight">
            {sub_title}
          </p>
        </div>
      </div>
    );
  }
);

ArticleBox.displayName = "ArticleBox";

export { ArticleBox };

/* 사용예시
<ArticleBox
  main_img="https://example.com/image.jpg"
  theme="Technology"
  main_title="Discover the Future of AI"
  sub_title="Learn how AI is transforming the world."
  link="/articles/ai-future"
  onNavigateContent={
    <p className="w-fit font-pre text-[#434750] text-4xl font-extrabold hover:text-[#6888ff]">
      Discover the Future of AI
    </p>
  }
/>

*/
