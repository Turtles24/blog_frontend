import { useState, useEffect } from "react";
import { AuditEditFilesSection } from "./container/auditEditFilesSection";
import { AuditEditImageSection } from "./container/auditEditImageSection";
import { AuditEditTitleSection } from "./container/auditEditTitleSection";
import { AuditEditContentSection } from "./container/auditEditContentSection";
import { AuditEditSubmitButton } from "./container/auditEditSubmitButton";
import { useAuditEdit } from "./hooks/useAuditEdit";
import { Header } from "@/containers/ui/header";
import { Button } from "@/containers/ui/button";
import { usePostArticlesTheme } from "@/hooks/apis/usePostArticlesTheme";
import { usePostFiles } from "@/hooks/apis/usePostFiles";
import { handleFileLists } from "./utils/fileHandler";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅

export function AuditEditPage() {
  const {
    handleTitleChange,
    // handleCategoryChange,
    handleContentChange,
    //  handleSubmit,
    isLoading,
  } = useAuditEdit();

  const { mutateAsync: createPost } = usePostArticlesTheme();
  const { mutateAsync: uploadFiles } = usePostFiles();
  const navigate = useNavigate();

  // 파일과 이미지를 저장할 상태
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [category, setCategory] = useState<string>("");

  /*초기 데이터 설정
  const data = {
    theme: "weekly",
    title: "ㅁㅇㄹㅁㄹㅁㅁㅇㅁㄹ",
    content: "ㅇㅁㄹㅇㅁㄹ",
    userName: "ㅁㄹㅇㅁㄹㅇㅁ",
    subTitle: "ㅁㄹㅇㅁㄹㅇㅁ",
  };

  useEffect(() => {
    if (!mutation.isSuccess) {
      mutation.mutate(data);
    }
  }, []);

  */

  const handlePostSubmit = async () => {
    try {
      if (category === "") {
        alert("카테고리를 선택해주세요.");
        return;
      }

      const uploadResponse: postFilesRes = await uploadFiles({
        files: [...files, ...images],
      });

      const { result: postFiles } = uploadResponse;
      console.log("uploadResponse", uploadResponse);
      console.log("postFiles", postFiles);

      const postFileList = handleFileLists(postFiles);
      console.log("postFileList", postFileList);

      await createPost({
        theme: "weekly",
        title: "ㅇㅁㅇㄹㅁㅁㄹㅁㄹ",
        content: "ㅁㅇㄹㅁ ㄹㅁㄴ ",
        userName: "ㅁㄹㅇㅁㄹㅇㅁ",
        subTitle: "ㅁㄹㅇㅁㄹㅇㅁ",
        postFileList,
      });

      navigate(`/`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header />
      <AuditEditTitleSection
        onTitleChange={handleTitleChange}
        onCategoryChange={setCategory}
        categoryList={["주간", "조직", "기술"]}
      />
      <AuditEditContentSection onContentChange={handleContentChange} />
      <AuditEditImageSection onImagesChange={setImages} />
      <AuditEditFilesSection onFilesChange={setFiles} />
      <AuditEditSubmitButton
        onSubmit={handlePostSubmit}
        isLoading={isLoading}
      />

      <Button />
      <button onClick={handlePostSubmit} isLoading={isLoading}>
        업로드
      </button>
    </>
  );
}
