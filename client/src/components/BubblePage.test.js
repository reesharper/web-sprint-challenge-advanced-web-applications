import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { BubblePage as mockGetBubbles } from './BubblePage'

test("Fetches data and renders the bubbles", () => {
  render(<BubblePage/>);
});
