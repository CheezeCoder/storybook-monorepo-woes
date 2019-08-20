import * as React from "react";
import { UIComponentA } from "@trjm/ui";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module);

stories.add("UI Component A", () => {
  return <UIComponentA />;
});
