import Video from "./Video";
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Video> = {
  title: 'Components/Video',
  component: Video,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Video>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
