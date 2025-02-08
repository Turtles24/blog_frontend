import { postArticlesTheme } from "@/apis/postArticlesTheme";
import {
  postArticlesDetailProps,
  postArticlesRes,
} from "@/@types/apis/post/index";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export function usePostArticlesDetail(): UseMutationResult<
  postArticlesRes,
  AxiosError,
  postArticlesDetailProps
> {
  const queryClient = useQueryClient();

  return useMutation<postArticlesRes, AxiosError, postArticlesDetailProps>({
    mutationFn: usePostArticlesDetail,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["post-articles-detail"],
      });
    },
  });
}
