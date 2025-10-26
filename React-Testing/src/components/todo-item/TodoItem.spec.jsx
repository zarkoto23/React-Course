import { beforeEach, expect, it } from "vitest";
import TodoItem from "./TodoItem";
import ReactDOM from "react-dom/client";
import { act } from "react";

beforeEach(() => {
  document.body.innerHTML = "";
});

it("should display todo text", () => {
  const container = document.createElement("div");

  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);

  act(() => {
    root.render(<TodoItem text={"test1"} />);
  });

  //   console.log("eto go", container.innerHTML);

  const textEl = document.querySelector("label span");

  expect(textEl.textContent).toBe("test1");
});
