import * as React from "react";
import { UIComponentA, UIComponentB } from "@trjm/ui";
import jObject from "./docs.json";

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  const stuff = jObject.children.map(child => (
    <li>
      {child.name} {child.kindString}
    </li>
  ));

  return (
    <div>
      <UIComponentA />
      <UIComponentB />
      {stuff};
    </div>
  );
};

App.displayName = "App";
