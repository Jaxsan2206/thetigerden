import FeaturePanel from "./FeaturePanel";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FeaturePanel> = {
  title: "Components/Feature Panel",
  component: FeaturePanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturePanel>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    image: {
        src: "https://images.ctfassets.net/joh4bu6temev/3wRLzeWkkJdKUebjmegMnA/d1a579534f202f5064f1b58bfa286685/IMG_0438.png",
        alt: "featurepanelimage",
      },
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "ABOUT US",
      cta: {
        label: "Learn More",
        url: "http://www.google.com",
        variant: "primary",
      },
  },
};

