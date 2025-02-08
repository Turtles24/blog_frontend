import {
  postArticlesFileProps,
  postArticlesFilesRes,
} from "@/@types/apis/post";
import { postArticlesFiles } from "@/apis/postArticlesFiles";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export function usePostArticlesFiles(): UseMutationResult<
  AxiosResponse<postArticlesFilesRes>,
  AxiosError,
  postArticlesFileProps
> {
  return useMutation<
    AxiosResponse<postArticlesFilesRes>,
    AxiosError,
    postArticlesFileProps
  >({
    mutationFn: postArticlesFiles,
  });
}
