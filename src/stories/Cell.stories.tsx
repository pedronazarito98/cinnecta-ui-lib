import { Cell } from "../components/Cell/Cell";
import * as React from "react";

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
    children: <h1>dasdasd</h1>,
  },
};
