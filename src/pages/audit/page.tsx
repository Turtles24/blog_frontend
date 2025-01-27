import { AuditEditFilesSection } from "./auditEdit/container/auditEditFilesSection";
import { AuditEditImageSection } from "./auditEdit/container/auditEditImageSection";
import { AuditEditTitleSection } from "./auditEdit/container/auditEditTitleSection";
import { AuditEditContentSection } from "./auditEdit/container/auditEditContentSection";
import { AuditEditSubmitButton } from "./auditEdit/container/auditEditSubmitButton";
import { useAuditEdit } from "./auditEdit/hook/useAuditEdit";
import { Header } from "@/containers/ui/header";

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

  return (
    <>
      <Header />
      <AuditEditTitleSection
        onTitleChange={handleTitleChange}
        onCategoryChange={handleCategoryChange}
        categoryList={["감사계획", "감사결과", "기타"]}
      />
      <AuditEditContentSection onContentChange={handleContentChange} />
      <AuditEditImageSection onImagesChange={setImages} />
      <AuditEditFilesSection onFilesChange={setFiles} />
      <AuditEditSubmitButton onSubmit={handleSubmit} isLoading={isLoading} />
    </>
  );
}
