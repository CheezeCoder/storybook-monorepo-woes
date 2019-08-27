import * as React from "react";

export type UIComponentAType = "big" | "small" | "medium";

export interface IUIComponentAProps {
  type: UIComponentAType;
}

export type UIComponentAOptions = {
  type: { [key in UIComponentAType]: UIComponentAType };
};

export const UICOMPONENTA_OPTIONS: UIComponentAOptions = {
  type: {
    small: "small",
    medium: "medium",
    big: "big"
  }
};

export const UIComponentA: React.FunctionComponent<IUIComponentAProps> = ({
  type = "medium"
}) => {
  const style = {
    fontSize: type === "big" ? "30px" : type === "medium" ? "16px" : "8px"
  };

  return <div style={style}>This is Component A</div>;
};

UIComponentA.displayName = "UIComponentA";
