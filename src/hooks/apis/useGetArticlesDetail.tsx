import { useQuery } from "@tanstack/react-query";
import { getArticlesDetail } from "@/apis/getArticlesDetail";
import { getArticlesDetailRes } from "@/@types/apis/get";

export function useGetArticlesDetail(articleId: number | null) {
  return useQuery<getArticlesDetailRes>({
    queryKey: ["get-articles-detail", articleId],
    queryFn: () => {
      if (articleId === null) throw new Error("Invalid articleId");
      return getArticlesDetail({ articleId });
    },
    enabled: articleId !== null,
  });
}
