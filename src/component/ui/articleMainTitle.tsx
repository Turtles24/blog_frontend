import * as React from "react";

export interface ArticleMainTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  main_title: string;
}

const ArticleMainTitle = React.forwardRef<
  HTMLDivElement,
  ArticleMainTitleProps
>(({ main_title }) => {
  return (
    <p className="w-fit font-pre text-[#434750] text-4xl font-extrabold hover:text-[#6888ff]">
      {main_title}
    </p>
  );
});

ArticleMainTitle.displayName = "ArticleMainTitle";

export { ArticleMainTitle };
