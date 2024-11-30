import { CheckIcon } from "@/components/icons/CheckIcon";
import { Input } from "@/components/Input";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Korea-IT/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    $type: "Default",
    $label: "Label",
    placeholder: "Placeholder",
    // $hintText: "This is a hint text to help user.",
    $destructive: false,
    $leadingIcon: <CheckIcon />,
    $trailingIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_8730_1714)">
          <path
            d="M7.99992 5.33325V7.99992M7.99992 10.6666H8.00659M14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99992C1.33325 4.31802 4.31802 1.33325 7.99992 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992Z"
            stroke="#F04438"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_8730_1714">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
};
