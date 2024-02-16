import * as React from "react";

import { cn } from "../../../lib/utils.ts";
import { Button } from "@radix-ui/themes";

export interface ButtonMachinesProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  state: "sendToMachine" | "train" | "fire";
}

export const ButtonMachines = React.forwardRef<
  React.ElementRef<typeof Button>,
  ButtonMachinesProps
>(
  (
    { state = "sendToMachine", disabled, className, children, ...props },
    ref
  ) => {
    const color = disabled
      ? "gray"
      : state === "train"
      ? "yellow"
      : state === "fire"
      ? "green"
      : undefined;

    return (
      <Button
        size="3"
        variant="soft"
        color={color}
        disabled={disabled}
        className={cn("w-40", className)}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
