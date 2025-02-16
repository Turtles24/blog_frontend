export interface postArticlesProps {
  theme: string;
  title: string;
  content: string;
  userName: string;
  subTitle: string;
  postFileList?: number[] | null;
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

export interface postFileProps {
  files: File[]; // 실제 브라우저 File 객체 (Blob)
}

export interface UploadedFile {
  fileId: number;
  fileUrl: string;
  fileName: string;
}

export interface postFilesRes {
  result: UploadedFile[];
}
