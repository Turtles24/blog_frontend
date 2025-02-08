import { AuditEditFilesSection } from "./container/auditEditFilesSection";
import { AuditEditImageSection } from "./container/auditEditImageSection";
import { AuditEditTitleSection } from "./container/auditEditTitleSection";
import { AuditEditContentSection } from "./container/auditEditContentSection";
import { AuditEditSubmitButton } from "./container/auditEditSubmitButton";
import { useAuditEdit } from "./hooks/useAuditEdit";
import { Header } from "@/containers/ui/header";
import { Button } from "@/containers/ui/button";
import { usePostArticlesTheme } from "@/hooks/apis/usePostArticlesTheme";
import { useEffect } from "react";
/*
import { usePostArticlesFiles } from "@/hooks/apis/usePostArticlesFiles";
import { handleFileLists } from "./utils/fileHandler";
*/

export function AuditEditPage() {
  const {
    handleTitleChange,
    handleCategoryChange,
    handleContentChange,
    handleSubmit,
    setFiles,
    setImages,
    isLoading,
  } = useAuditEdit();

  const mutation = usePostArticlesTheme();
  /*
  const { mutateAsync: uploadFiles } = usePostArticlesFiles();
  */

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

  /*

  const handleSubmit = async () => {
    try {
      if (category === "") {
        alert("카테고리를 선택해주세요.");
        return;
      }

      const uploadResponse = await uploadFiles({
        articleId: "분실물게시판",
        images,
      });

      const { postFiles, thumbnailUrl } = uploadResponse.data.data;

      const thumbnailImage = thumbnailUrl;
      const postFileList = handleFileLists(postFiles);

      await createPost({
        boardCode: "분실물게시판",
        post: {
          title,
          content,
          categoryCode: category,
          thumbNailImage: thumbnailImage,
          isNotice: false,
          postFileList,
        },
      });

      navigate(`/lost-article?category=state`);
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };
*/
  return (
    <>
      <Header />
      <AuditEditTitleSection
        onTitleChange={handleTitleChange}
        onCategoryChange={handleCategoryChange}
        categoryList={["주간", "조직", "기술"]}
      />
      <AuditEditContentSection onContentChange={handleContentChange} />
      <AuditEditImageSection onImagesChange={setImages} />
      <AuditEditFilesSection onFilesChange={setFiles} />
      <AuditEditSubmitButton onSubmit={handleSubmit} isLoading={isLoading} />

      <Button onClick={handleSubmit} isLoading={isLoading} />
    </>
  );
}
