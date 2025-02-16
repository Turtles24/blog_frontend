import { useState } from "react";
import PropTypes from "prop-types";
import * as React from "react";
import "./Tab.css";

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: string[]; // items는 문자열 배열이어야 함
  initialActiveIndex?: number;
  styleVariant?: "rectangular" | "rounded" | "underline";
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    { items, initialActiveIndex = 0, styleVariant = "rounded", ...rest },
    ref
  ) => {
    // State to track the active tab
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

    // Function to handle tab click
    const handleTabClick = (index: number) => {
      setActiveIndex(index);
    };

    return (
      <div ref={ref} className={`tabs tabs--${styleVariant}`} {...rest}>
        {items.map((item, index) => (
          <button
            key={index}
            className={`tab ${index === activeIndex ? "tab--active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
);

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialActiveIndex: PropTypes.number,
  styleVariant: PropTypes.oneOf(["rectangular", "rounded", "underline"]),
};

Tabs.defaultProps = {
  initialActiveIndex: 0,
  styleVariant: "rectangular",
};
