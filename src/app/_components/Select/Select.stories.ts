import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SelectSearch, Option } from "./Select";

const meta: Meta<typeof SelectSearch> = {
    title: "SelectSearch",
    component: SelectSearch,
    tags: ["autodocs"],
    argTypes: {
        onChange: { action: "changed" },
    },
};
export default meta;

type Story = StoryObj<typeof SelectSearch>;

const options: Option[] = [
    { value: "", label: "Semua" },
    { value: "tech", label: "Tech" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "design", label: "Design" },
];

export const Default: Story = {
    args: {
        value: "",
        options,
        placeholder: "Pilih kategori",
    },
};

export const WithValue: Story = {
    args: {
        value: "tech",
        options,
        placeholder: "Pilih kategori",
    },
};

export const CustomClass: Story = {
    args: {
        value: "",
        options,
        placeholder: "Custom style",
        className: "bg-gray-100 text-sm",
    },
};
