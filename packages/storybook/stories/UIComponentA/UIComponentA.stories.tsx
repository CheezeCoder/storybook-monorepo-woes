import * as React from "react";
import { UIComponentA, UICOMPONENTA_OPTIONS } from "@trjm/ui";
import { select } from "@storybook/addon-knobs";

export default {
  title: "UI Component A",
  component: UIComponentA
};

export const uIComponentA = () => {
  const size = select(
    "size",
    Object.values(UICOMPONENTA_OPTIONS.type),
    UICOMPONENTA_OPTIONS.type.medium
  );

  return <UIComponentA type={size} />;
};
