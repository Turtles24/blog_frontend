import { getArticlesTheme } from "@/apis/getArticlesTheme";
import { getArticlesThemeRes } from "@/@types/apis/get";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface useGetArticlesThemeProps {
  theme: string;
  page: number;
}

export function useGetArticlesTheme({
  theme,
  page,
}: useGetArticlesThemeProps): UseQueryResult<getArticlesThemeRes, AxiosError> {
  const queryKey = ["get-articles-theme-theme-page", theme, page];

  const queryResult = useQuery<getArticlesThemeRes, AxiosError>({
    queryKey,
    queryFn: async () => getArticlesTheme({ theme, page }),
  });

  return queryResult;
}
