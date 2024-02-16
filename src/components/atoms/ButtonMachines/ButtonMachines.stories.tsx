import type { Meta, StoryObj } from "@storybook/react";

import { ButtonMachines } from "./ButtonMachines.tsx";

const meta: Meta<typeof ButtonMachines> = {
  title: "Components/Atoms/ButtonMachines",
  component: ButtonMachines,
  parameters: {
    design: [
      {
        type: "figma",
        url: "",
      },
    ],
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ButtonMachines>;

export const SendToMachine: Story = {
  args: {
    state: "sendToMachine",
    children: "Send to Machine",
  },
};

export const TrainPitches: Story = {
  args: {
    state: "train",
    children: "Train Pitches",
  },
};

export const Fire: Story = {
  args: {
    state: "fire",
    children: "Fire",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    disabled: true,
  },
};
