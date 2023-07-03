import ButtonWithLink from "./Button";
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ButtonWithLink> = {
  title: 'Components/Button',
  component: ButtonWithLink,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonWithLink>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args:{
        variant: 'primary', 
        children: 'Learn More', 
        href: 'https://www.google.com'
    }
};

export const Secondary: Story = {
  args:{
      variant: 'secondary', 
      children: 'Learn More', 
      href: 'https://www.google.com'
  }
};