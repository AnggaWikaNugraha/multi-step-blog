import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Select from "./Select";

const options = [
    { value: "tech", label: "Tech" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "business", label: "Business" },
];

const meta: Meta<typeof Select> = {
    title: "Select",
    component: Select,
    args: {
        label: "Category",
        options,
    },
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
export const WithError: Story = {
    args: {
        error: "Please select a category",
    },
};
