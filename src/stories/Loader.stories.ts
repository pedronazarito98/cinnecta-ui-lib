import { Loader } from "../components/Loader/Loader";

export default {
  title: "Example/Loader",
  component: Loader,
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
  },
};
