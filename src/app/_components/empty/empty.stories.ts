import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmptyState } from "./index";

const meta: Meta<typeof EmptyState> = {
    title: "EmptyState",
    component: EmptyState,
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const CustomMessage: Story = {
    args: {
        message: "Belum ada artikel ditemukan",
    },
};

export const WithIcon: Story = {
    args: {
        message: "Tidak ada hasil pencarian",
    },
};
