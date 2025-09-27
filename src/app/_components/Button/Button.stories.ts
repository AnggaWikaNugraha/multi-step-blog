import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Click Me",
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Dark: Story = {
  args: {
    variant: "dark",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
  },
};

export const Small: Story = {
  args: {
    variant: "dark",
    size: "sm",
    children: "Small Button",
  },
};
