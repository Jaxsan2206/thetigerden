import { Box } from "../FlexBox/FlexBox";
import Header from "./Header";
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header,
  render: (args) => (
    // <Box width={'100%'} height={'100vh'} backgroundColor={'black'}>
      <Header {...args}/>
    // </Box>
  ),
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args:{
      links: [
        { label: "About Us", href: 'https://www.google.com'}, 
        { label: "Classes", href: 'https://www.google.com'}, 
        { label: "Timetable & Prices", href: 'https://www.google.com'}, 
        { label: "Contact Us", href: 'https://www.google.com'}
      ],
      desktopLogo: {
        src: "https://images.ctfassets.net/vuhxrpoqv3gn/6CealvdP3HwDMVZWji0Tb5/b412c3ff866e8ad91eaf4e42c4573f7f/Group_666_-_Edited.webp",
        alt: "tigerdenlogo",
        height: "60px",
        width: "280px",
      },
      mobileLogo: {
        src: "https://images.ctfassets.net/vuhxrpoqv3gn/2WfqN7XaWgQNhuRdDukLzF/ff9bc301c6c863e9e36fcebd397e82a5/MobileIcon.png",
        alt: "tigerdenlogo",
        height: "75px",
        width: "86px",
      },
      showCart: true
    }
};

export const ShopOff: Story = {
  args:{
    links: [
      { label: "About Us", href: 'https://www.google.com'}, 
      { label: "Classes", href: 'https://www.google.com'}, 
      { label: "Timetable & Prices", href: 'https://www.google.com'}, 
      { label: "Contact Us", href: 'https://www.google.com'}
    ],
    desktopLogo: {
      src: "https://images.ctfassets.net/vuhxrpoqv3gn/6CealvdP3HwDMVZWji0Tb5/b412c3ff866e8ad91eaf4e42c4573f7f/Group_666_-_Edited.webp",
      alt: "tigerdenlogo",
      height: "60px",
      width: "280px",
    },
    mobileLogo: {
      src: "https://images.ctfassets.net/vuhxrpoqv3gn/2WfqN7XaWgQNhuRdDukLzF/dcd4cae7e4bbbed4d89d867ccd8943cf/MobileIcon.png",
      alt: "tigerdenlogo",
      height: "75px",
      width: "86px",
    },
    showCart: false
  }
};