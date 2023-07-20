import { styled, units } from "../../styles/theme";
import * as TooltipRadix from "@radix-ui/react-tooltip";

const propTypes = {
  message: propTypes.string,
  icon: propTypes.an,
  css: propTypes.bool,
  onClick: propTypes.func,
  noIcon: propTypes.bool,
};

export const Tooltip = ({ message, icon, css, onClick, noIcon }) => {
  return (
    <TooltipProvider delayDuration="200">
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <IconButton css={css} onClick={onClick}>
            {!noIcon && icon ? (
              icon
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </IconButton>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent sideOffset={2}>
            {message}
            <TooltipArrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipProvider>
  );
};

const TooltipProvider = styled(TooltipRadix.Provider, {
  position: "relative",

  variants: {
    top: {
      true: {
        bottom: "100%",
        left: "50%",
        paddingBottom: units(0.5),
        transform: "translateX(-50%)",
      },
    },

    bottom: {
      true: {
        top: "100%",
        left: "50%",
        paddingTop: units(0.5),
        transform: "translateX(-50%)",
      },
    },

    left: {
      true: {
        top: "50%",
        right: "100%",
        paddingRight: units(0.5),
        transform: "translateY(-50%)",
      },
    },

    right: {
      true: {
        top: "50%",
        left: "100%",
        paddingLeft: units(0.5),
        transform: "translateY(-50%)",
      },
    },
  },
});

const TooltipArrow = styled(TooltipRadix.Arrow, {
  fill: "$grayDarker",
});
const TooltipContent = styled(TooltipRadix.Content, {
  borderRadius: 4,
  padding: units(0.25),
  fontSize: "1rem",
  lineHeight: 1,
  textAlign: "center",
  width: 150,
  color: "#FFFFFF",
  backgroundColor: "$grayDarker",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: "1rem",
  width: "1rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#A6A6A6",
  backgroundColor: "transparent",

  "&:hover": {
    svg: {
      path: {
        fill: "$secondary",
      },
    },
  },
});
Tooltip.propTypes = propTypes;
