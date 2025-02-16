import { AxiosResponse } from "axios";
import { clientAuth } from "./client";
import { postArticlesProps, postArticlesRes } from "@/@types/apis/post/index";

export const postArticlesTheme = async ({
  theme,
  title,
  content,
  userName,
  subTitle,
  postFileList,
}: postArticlesProps): Promise<postArticlesRes> => {
  const response: AxiosResponse<postArticlesRes> = await clientAuth({
    url: `/articles`,
    method: "post",
    data: {
      theme,
      title,
      content,
      userName,
      subTitle,
      postFileList,
    },
  });

  return response.data;
};
