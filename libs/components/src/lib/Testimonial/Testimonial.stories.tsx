import { Meta, StoryObj } from "@storybook/react";
import Testimonial from "./Testimonial";

const meta: Meta<typeof Testimonial> = {
    title: "Components/Testimonial",
    component: Testimonial,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

export const Primary: Story = {
    args: {
        userImage: {
            src: "https://i.etsystatic.com/20164836/r/il/bd77b8/3943923229/il_fullxfull.3943923229_ebhm.jpg",
            alt: "user profile picutre"
        }, 
        username: "Barbie",
        date: "30.07.2023",
        message: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
}