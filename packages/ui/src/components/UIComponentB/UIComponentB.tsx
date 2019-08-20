import * as React from "react";

interface IUIComponentBProps {}

export const UIComponentB: React.FunctionComponent<
  IUIComponentBProps
> = ({}) => {
  return <div>This is Component B</div>;
};

UIComponentB.displayName = "UIComponentB";
