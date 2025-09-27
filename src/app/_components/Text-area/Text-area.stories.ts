import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Textarea from "./TextArea";

const meta: Meta<typeof Textarea> = {
    title: "Textarea",
    component: Textarea,
    args: {
        label: "Blog Content",
        placeholder: "Write something...",
    },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const WithError: Story = {
    args: {
        error: "Content cannot be empty",
    },
};
