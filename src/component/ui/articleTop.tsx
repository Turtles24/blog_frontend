import * as React from "react";
import testData from "@/assets/db/data.json";

export interface ArticleTopProps {
  title: string;
  date: string;
}

const ArticleTop = React.forwardRef<HTMLDivElement, ArticleTopProps>(
  ({ title, date }) => {
    return (
      <div>
        <div className="text-[#555A65] font-pre text-6xl align-middle font-semibold">
          {title}
        </div>
        <div className="text-[#8A93A5] font-pre text-xl align-middle font-semibold mt-6">
          {date}
        </div>
      </div>
    );
  }
);

ArticleTop.displayName = "ArticleTop";

export { ArticleTop };
