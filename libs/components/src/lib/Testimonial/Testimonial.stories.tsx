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
            src: "",
            alt: "user profile picutre"
        }, 
        username: "Jaxsan Sivanesan",
        date: "30.07.2023",
        message: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
}