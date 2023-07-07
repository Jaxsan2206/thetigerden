import Announcement from "./Announcement";
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Announcement> = {
  title: 'Components/Announcement',
  component: Announcement,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Announcement>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args:{
      message:
      "Announcement: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
};

