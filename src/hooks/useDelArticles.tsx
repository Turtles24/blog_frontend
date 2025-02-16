import { delArticlesProps, delArticlesRes } from "@/@types/apis/del";
import { delArticles } from "@/apis/delArticles";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export function useDelArticles(): UseMutationResult<
  AxiosResponse<delArticlesRes>,
  AxiosError,
  delArticlesProps
> {
  const queryClient = useQueryClient();
  return useMutation<
    AxiosResponse<delArticlesRes>,
    AxiosError,
    delArticlesProps
  >({
    mutationFn: delArticles,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["delArticles"] });
      queryClient.invalidateQueries({
        queryKey: ["del-articles"],
      });
    },
  });
}
