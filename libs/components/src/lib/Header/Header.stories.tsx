import Header from "./Header";
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args:{
      links: ["About Us", "Classes", "Timetable & Prices", "Contact Us"],
      image: {
        src: "https://images.ctfassets.net/c5iz9ysb7wxa/ye4hvPDphEXdtZVH7QeFd/295706f1a898e0745bc85f2f1394c2ae/Group_666_-_Edited.png",
        alt: "tigerdenlogo",
        height: "60px",
        width: "280px",
      },
      cta: {
        url: "https://www.google.com",
        label: "Shop Now",
        variant: "primary",
      },
    }
};