import * as React from "react";
import { useChannel, useState } from "@storybook/client-api";
import { TestComponent } from "./components/TestComponent";

export const withTestComponent = (storyFn: () => any) => {
  const [selected, setSelected] = useState<boolean>(true);

  const newSelect = !selected;

  useChannel({
    REQUEST_PROPS_CHANGE: () => setSelected(newSelect)
  });

  console.log(selected);

  return (
    <div>
      {storyFn()}
      {selected && <TestComponent />}
    </div>
  );
};
