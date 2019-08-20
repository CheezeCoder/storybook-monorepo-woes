import { configure, addDecorator } from "@storybook/react";
import { withTestComponent } from "@trjm/addon-info/dist/index.js";

const req = require.context("../stories", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withTestComponent);

configure(loadStories, module);
