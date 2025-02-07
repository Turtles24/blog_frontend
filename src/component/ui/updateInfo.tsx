import { MarginTop } from "@/containers/component/marginTop";
import * as React from "react";
import construction from "@/assets/construction.webp";

const UpdateInfo = React.forwardRef<HTMLDivElement, UpdateInfoProps>(() => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={construction}></img>
      </div>
      <MarginTop margin={"2"} />
      <div className="text-[#4B5563] font-pre text-6xl font-semibold">
        뚝딱뚝딱 업데이트중
      </div>
      <MarginTop margin={"3"} />
      <div className="text-[#4B5563] font-pre text-4xl font-normal">
        앞으로의 DAON을 기대해주세요!
      </div>
    </div>
  );
});

UpdateInfo.displayName = "UpdateInfo";

export { UpdateInfo };
