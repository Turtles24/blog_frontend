import * as React from "react";
import { ThemeBox } from "./themeBox";
import { PageNavigator } from "@/containers/component/pageNavigator"; // PageNavigator 컴포넌트 불러오기
import { MarginTop } from "@/containers/component/marginTop";

export interface ArticleBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  main_img: string;
  theme: string;
  sub_title: string;
  link: string; // 페이지 이동을 위한 링크 추가
  onNavigateContent: React.ReactNode; // PageNavigator 내부 콘텐츠를 동적으로 전달
}

export const ArticleBox = ({
  main_img,
  theme,
  sub_title,
  link,
  onNavigateContent,
}: ArticleBoxProps) => {
  return (
    <div className="flex flex-row gap-8 w-[927px] h-[216px]">
      <div className="w-[324px] h-[216px]">
        <img
          src={main_img}
          alt="main_img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 py-4">
        <div>{theme}</div>
        {onNavigateContent}
        <div>{sub_title}</div>
      </div>
    </div>
  );
};

ArticleBox.displayName = "ArticleBox";

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
