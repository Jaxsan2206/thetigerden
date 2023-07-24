import { colors } from "../../styles/standardStyles/colors";
import { Column, Container } from "../Layout/Layout";
import Tile from "./Tile";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Image> = {
  title: "Components/Tile",
  component: Tile,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container fullWidth backgroundColor={colors.offwhite}>
        <Container>
          <Column
            width={[12, null, null, 6]}
            paddingRight={"16px"}
            paddingBottom={"16px"}
          >
            <Story />
          </Column>
        </Container>
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Image>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const NormalImage: Story = {
  args: {
    image: {
      src: "https://images.ctfassets.net/c5iz9ysb7wxa/2GNKZfiVGLtEJGe1wu7oG9/4fcd24aa0849014b6111addd972b6b7c/IMG_0439_2.png",
      alt: "image1",
      type: "background-image",
    },
    hoverText: "Hover Text",
    title: "Muay Thai",
  },
};
