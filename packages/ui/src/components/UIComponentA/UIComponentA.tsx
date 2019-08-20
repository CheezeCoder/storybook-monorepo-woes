import * as React from "react";

interface IUIComponentAProps {}

export const UIComponentA: React.FunctionComponent<
  IUIComponentAProps
> = ({}) => {
  return <div>This is Component A</div>;
};

UIComponentA.displayName = "UIComponentA";
