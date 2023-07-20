// @ts-expect-error TS(6142): Module '../components/Loader/Loader' was resolved ... Remove this comment to see the full error message
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
