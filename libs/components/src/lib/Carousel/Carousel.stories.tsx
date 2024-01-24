import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";
import Testimonial from "../Testimonial/Testimonial";

const childrenProps = {
  userImage: {
    src: "",
    alt: "user profile picutre",
  },
  username: "Jaxsan Sivanesan",
  date: "30.07.2023",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "TESTIMONIALS",
    children: [
      <Testimonial {...childrenProps} />,
      <Testimonial {...childrenProps} />,
      <Testimonial {...childrenProps} />,
      <Testimonial {...childrenProps} />,
      <Testimonial {...childrenProps} />,
      <Testimonial {...childrenProps} />,
    ],
    slideSize: [1, 2, 3]
  },
};