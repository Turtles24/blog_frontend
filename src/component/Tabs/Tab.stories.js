// Tabs.stories.js
import React from "react";
import { Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    styleVariant: {
      control: "select",
      options: ["rectangular", "rounded", "underline"],
    },
    initialActiveIndex: {
      control: "number",
      defaultValue: 0,
    },
  },
};

const Template = (args) => <Tabs {...args} />;

export const Rectangular = Template.bind({});
Rectangular.args = {
  items: ["항목1", "항목2", "항목3"],
  initialActiveIndex: 0,
  styleVariant: "rectangular",
};

export const Underline = Template.bind({});
Underline.args = {
  items: ["항목1", "항목2", "항목3"],
  initialActiveIndex: 0,
  styleVariant: "underline",
};

export const Rounded = Template.bind({});
Rounded.args = {
  items: ["항목1", "항목2", "항목3"],
  initialActiveIndex: 0,
  styleVariant: "rounded",
};
