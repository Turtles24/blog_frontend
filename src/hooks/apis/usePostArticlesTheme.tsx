import { postArticlesTheme } from "@/apis/postArticlesTheme";
import { postArticlesProps, postArticlesRes } from "@/@types/apis/post/index";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export function usePostArticlesTheme(): UseMutationResult<
  postArticlesRes,
  AxiosError,
  postArticlesProps
> {
  const queryClient = useQueryClient();

  return useMutation<postArticlesRes, AxiosError, postArticlesProps>({
    mutationFn: postArticlesTheme,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["post-articles"],
      });
    },
  });
}
