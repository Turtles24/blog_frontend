import { getArticlesSearch } from "@/apis/getArticlesSearch";
import { getArticlesSearchProps } from "@/@types/apis/get/index";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetArticlesSearch = <T,>({
  keyword,
}: getArticlesSearchProps): UseQueryResult<T, AxiosError> => {
  return useQuery<T, AxiosError>({
    staleTime: 1000 * 60 * 5,
    queryKey: ["get-article-search", keyword],
    queryFn: async () => {
      const response = getArticlesSearch({
        keyword,
      });
      return response as T;
    },
    enabled: !!keyword,
  });
};
