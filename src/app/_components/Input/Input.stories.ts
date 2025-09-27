import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "./Input";

const meta: Meta<typeof Input> = {
    title: "Input",
    component: Input,
    args: {
        label: "Blog Title",
        placeholder: "Enter title...",
    },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithError: Story = {
    args: {
        error: "This field is required",
    },
};
