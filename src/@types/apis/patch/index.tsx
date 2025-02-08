export interface patchArticlesProps {
  articleId: number | null;
  theme: string;
  title: string;
  content: string;
  subTitle: string;
}

export interface patchArticlesRes {
  status: number;
  code: string;
  timestamp: string;
  data: patchArticleResDto[];
  isSuccess: boolean;
}

export interface patchArticleResDto {
  articleId: number;
  userName: string;
  theme: string;
  title: string;
  content: string;
  subTitle: string;
  uploadDate: "string";
}
