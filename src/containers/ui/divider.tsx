import * as React from "react";

const Divider = React.forwardRef<HTMLDivElement>(() => {
  return <div className="w-10/12 h-1 bg-[#888888] opacity-30 mt-4"></div>;
});

Divider.displayName = "Divider";

export { Divider };
