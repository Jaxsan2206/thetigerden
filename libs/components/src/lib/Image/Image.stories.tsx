import Image from "./Image";
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Image>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        image: {
            src: 'https://images.ctfassets.net/c5iz9ysb7wxa/5TVvITd7FpMnvSyne4kv1s/25daa36ea01c7b52f9d22ca2b6db2dd7/image_1.png', 
            alt: 'tiger den'
        }, 
        width: 1440, 
        height: 620, 
        type: 'background-image'
    },
};
