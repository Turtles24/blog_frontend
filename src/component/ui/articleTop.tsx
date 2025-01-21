import * as React from "react";
import testData from "@/assets/db/data.json";

const ArticleTop = React.forwardRef<HTMLDivElement, ArticleTopProps>(() => {
  return (
    <div>
      {testData.data2.map((data2) => (
        <>
          <div className="text-[#555A65] font-pre text-6xl align-middle font-semibold">
            {data2.main_title}
          </div>
          <div className="text-[#8A93A5] font-pre text-xl align-middle font-semibold mt-6">
            {data2.date}
          </div>
        </>
      ))}
    </div>
  );
});

ArticleTop.displayName = "ArticleTop";

export { ArticleTop };
