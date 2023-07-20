// @ts-expect-error TS(6142): Module '../components/Cell/Cell' was resolved to '... Remove this comment to see the full error message
import { Cell } from "../components/Cell/Cell";

export default {
  title: "Example/Cell",
  component: Cell,
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    children: <h1>dasdasd</h1>,
  },
};
