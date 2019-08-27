# storybook-monorepo-woes

Testing repo for storybook problems.

### An issue with writing CSF style stories with the addon-knobs.

The purpose of this repo is to demonstrate how writing stories in the new CSF format will break the @storybook/addon-knobs functionality when switching between the docs and canvas view via the toolbar.

## To get started:

```
yarn install
```

then

```
yarn build
```

then

```
yarn storybook
```

### To reproduce the issue:

1.  Click on UIComponent A
2.  Change the knob setting to small or big.
3.  Notice the knobs functionality works.
4.  Switch to the docs view via the `Docs` button in the toolbar.
5.  Switch back to the canvas view via the `Canvas` button in the toolbar.
6.  Notice the knobs functionality now does not work.
7.  Reloading or switching stories fixes it.
