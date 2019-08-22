import { API, useAddonState, useChannel } from "@storybook/api";
import React, { Fragment } from "react";
import { Icons, IconButton, WithTooltip } from "@storybook/components";
import { REQUEST_PROPS_CHANGE, ADDON_ID } from "../constants";

export const Tool: React.FC<{}> = ({}) => {
  const [selected, setSelected] = useAddonState<boolean>(ADDON_ID, true);
  const emit =
    useChannel({
      [REQUEST_PROPS_CHANGE]: (newState: boolean) => setSelected(newState)
    });

  return (
    <Fragment>
      <WithTooltip
        placement="auto"
        trigger="click"
        closeOnClick
        tooltip="Show test component"
        onVisibilityChange={() => {}}
      >
        <IconButton
          key="test-info"
          title="Show test component"
          active={selected}
          onClick={() => emit(REQUEST_PROPS_CHANGE)}
        >
          <Icons icon="info" />
        </IconButton>
      </WithTooltip>
    </Fragment>
  );
};
