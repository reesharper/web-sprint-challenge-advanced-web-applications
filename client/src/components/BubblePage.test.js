import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { BubblePage as mockGetBubbles } from './BubblePage'

const data = {
  data:[
    {
      color: "aqua",
      code: {
        hex: "#00ffff"
      },
      id: 3
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4"
      },
      id: 4
    }
  ]
}

test("Fetches data and renders the bubbles", async () => {

  mockGetBubbles.mockResolvedValueOnce(data);
  render(<BubblePage/>);

  const aqua = screen.getByText(/aqua/i);
  expect(aqua).toExist();

});
