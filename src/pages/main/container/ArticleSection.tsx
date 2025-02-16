import { ArticleBox } from "@/component/ui/articleBox";
import { ArticleMainTitle } from "@/component/ui/articleMainTitle";
import { useGetArticlesTheme } from "@/hooks/apis/useGetArticlesTheme";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const ArticleSection = () => {
  const [articleData, setArticleData] = useState();

  const [articleId, setArticleId] = useState<number | undefined>();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const theme: string = "weekly";
  const page: number = 1;

  const {
    data: resp,
    isLoading,
    isError,
    refetch,
  } = useGetArticlesTheme({ theme, page });

  console.log("articleId", articleId);

  useEffect(() => {
    if (!queryClient.getQueryData(["get-board-boardCode-posts-postId"])) {
      refetch();
    }
  }, [queryClient, refetch]);

  useEffect(() => {
    const parsedResp = typeof resp === "string" ? JSON.parse(resp) : resp;
    setArticleData(parsedResp?.result);

    console.log("data", articleData);
  }, [articleData, resp]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading articles</p>;

  return (
    <div className="">
      {articleData?.article_list?.map(
        (
          article: {
            articleId: number;
            subTitle: string;
            title: string;
            data: { userName: string };
          },
          index: number
        ) => (
          <div
            key={article.articleId || index}
            className="cursor-pointer"
            onClick={() => {
              setArticleId(article.articleId); // 먼저 상태 업데이트
              navigate(`/articles/${article.articleId}`, {
                state: {
                  articleId: article.articleId,
                },
              }); // 이후 이동
            }}
          >
            <div className="mt-3"></div>
            <ArticleBox
              main_img={""}
              theme="주간"
              sub_title={article.subTitle}
              link="sub"
              onNavigateContent={
                <ArticleMainTitle main_title={article.title} />
              }
            />
          </div>
        )
      )}
    </div>
  );
};

export default ArticleSection;
