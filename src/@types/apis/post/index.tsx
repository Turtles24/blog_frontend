export interface postArticlesProps {
  theme: string;
  title: string;
  content: string;
  userName: string;
  subTitle: string;
}

export interface postArticlesRes {
  data: postArticleResDto[]; // ✅ 배열로 수정
}

export interface postArticleResDto {
  articleId: number;
  userName: string;
  theme: string;
  title: string;
  content: string;
  subTitle: string;
  uploadDate: "string";
}

export interface postArticlesDetailProps {
  articleId: number;
}

export interface postArticlesFileProps {
  articleId: number;
  files: [];
}

export interface File {
  fileId: number;
  fileUrl: string;
  fileName: string;
}

export interface postArticlesFilesRes {
  articleId: number;
  uploadedFiles: {
    postFiles: File[];
    thumbnailUrl: string;
  };
  isSuccess: boolean;
}

