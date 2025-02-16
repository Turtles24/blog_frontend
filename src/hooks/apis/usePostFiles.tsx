import { postFileProps, postFilesRes } from "@/@types/apis/post";
import { postFiles } from "@/apis/postFiles";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function usePostFiles(): UseMutationResult<
  postFilesRes,
  AxiosError,
  postFileProps
> {
  return useMutation<postFilesRes, AxiosError, postFileProps>({
    mutationFn: async (data) => {
      const response = await postFiles(data);
      return response.data;
    },
  });
}
