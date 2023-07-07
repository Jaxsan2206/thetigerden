import Hero from "./Hero";
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// TODO: Need to figure out how to serve videos stored locally to storybook. Most likely need to use webloaders to read an .mp4 file. 
export const Primary: Story = {
  args: {
    video: "/tigerden.mp4",
    primaryHeading: "WELCOME TO",
    secondaryHeading: "THE TIGER DEN",
  }
};

export const HeroWithImage: Story = {
  args: {
    image: {
      src: 'https://images.ctfassets.net/c5iz9ysb7wxa/5TVvITd7FpMnvSyne4kv1s/25daa36ea01c7b52f9d22ca2b6db2dd7/image_1.png', 
      alt: 'Tiger Den Hero Image'
    }, 
    primaryHeading: "WELCOME TO",
    secondaryHeading: "THE TIGER DEN",
  }
};
