// @ts-expect-error TS(6142): Module '../components/Button/Button' was resolved ... Remove this comment to see the full error message
import { Button } from "../components/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    primary: true,
    children: "Button",
  },
};
