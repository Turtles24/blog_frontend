import testData from "@/assets/db/data.json";
import { ArticleBox } from "@/component/ui/articleBox";
import { ArticleMainTitle } from "@/component/ui/articleMainTitle";

const ArticleSection = () => {
  return (
    <div className="">
      {testData.data.map((data) => (
        <>
          <div className="mt-3"></div>
          <ArticleBox
            main_img={data.main_img}
            theme="주간"
            sub_title={data.sub_title}
            link="sub"
            onNavigateContent={
              <ArticleMainTitle main_title={data.main_title} />
            }
          />
        </>
      ))}
    </div>
  );
};

export default ArticleSection;
