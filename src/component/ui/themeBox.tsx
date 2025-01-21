import * as React from "react";

export interface ThemeBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  theme: string;
}

const ThemeBox = React.forwardRef<HTMLDivElement, ThemeBoxProps>(
  ({ theme }, ref) => {
    return (
      <div className="theme_box" ref={ref}>
        {theme}
      </div>
    );
  }
);

ThemeBox.displayName = "ThemeBox";

export { ThemeBox };
