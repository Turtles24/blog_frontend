import { AuditEditFilesSection } from "./container/auditEditFilesSection";
import { AuditEditImageSection } from "./container/auditEditImageSection";
import { AuditEditTitleSection } from "./container/auditEditTitleSection";
import { AuditEditContentSection } from "./container/auditEditContentSection";
import { AuditEditSubmitButton } from "./container/auditEditSubmitButton";
import { useAuditEdit } from "./hooks/useAuditEdit";
import { Header } from "@/containers/ui/header";
import { Button } from "@/containers/ui/button";

export function AuditEditPage() {
  const {
    handleTitleChange,
    handleCategoryChange,
    handleContentChange,
    setFiles,
    setImages,
    handlePostSubmit,
    isLoading,
  } = useAuditEdit();

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
