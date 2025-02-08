import { patchArticlesProps, patchArticlesRes } from "@/@types/apis/patch";
import { patchArticles } from "@/apis/patchArticles";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePatchArticles = () => {
  const queryClient = useQueryClient();
  return useMutation<patchArticlesRes, Error, patchArticlesProps>({
    mutationFn: (patchData: patchArticlesProps) => patchArticles(patchData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patchArticles"] });
      queryClient.invalidateQueries({
        queryKey: ["patch-articles"],
      });
      queryClient.refetchQueries({
        queryKey: ["patch-articles"],
      });
    },
  });
};
