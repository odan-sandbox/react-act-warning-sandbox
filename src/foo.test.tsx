import React from "react";

import Button from "@mui/material/Button";
import { render } from "@testing-library/react";

it.only("test", () => {
  render(<Button autoFocus={true}>キャンセル</Button>);
});
