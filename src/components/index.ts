//? TYPES
// @ts-expect-error TS(6142): Module './Cell/Cell' was resolved to '/home/pedro/... Remove this comment to see the full error message
import { CellProps } from "./Cell/Cell";
// @ts-expect-error TS(6142): Module './Button/Button' was resolved to '/home/pe... Remove this comment to see the full error message
import { ButtonProps } from "./Button/Button";
// @ts-expect-error TS(6142): Module './Shimmer/Shimmer' was resolved to '/home/... Remove this comment to see the full error message
import { ShimmerProps } from "./Shimmer/Shimmer";

//? Componentes

// @ts-expect-error TS(6142): Module './Button/Button' was resolved to '/home/pe... Remove this comment to see the full error message
import { Button } from "./Button/Button";
// @ts-expect-error TS(6142): Module './Cell/Cell' was resolved to '/home/pedro/... Remove this comment to see the full error message
import { Cell } from "./Cell/Cell";
// @ts-expect-error TS(6142): Module './Shimmer/Shimmer' was resolved to '/home/... Remove this comment to see the full error message
import { Shimmer } from "./Shimmer/Shimmer";

export type { CellProps, ButtonProps, ShimmerProps };
export { Button, Cell, Shimmer };
