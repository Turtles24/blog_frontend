import * as React from "react";

export interface ArticleBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  img: string;
  title: string;
  sub_title: string;
  category: string;
}

const ArticleBox = React.forwardRef<HTMLDivElement, ArticleBoxProps>(
  ({ img, content1, content2 }, ref) => {
    return (
      <div className="">
        <div ref={ref}>
          <img style={{ width: "170px" }} src={img}></img>
        </div>
        <div ref={ref} className="middle_content">
          {content1}
          <br></br>
          {content2}
        </div>
      </div>
    );
  }
);

ArticleBox.displayName = "ArticleBox";

export { ArticleBox };
