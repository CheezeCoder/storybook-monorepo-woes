import * as React from "react";
import { UIComponentA } from "@trjm/ui";

export const TestComponent: React.FC<{}> = () => {
  return (
    <div>
      Here is a test component with a ui component
      <UIComponentA />
    </div>
  );
};
