import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { beforeEach, it, expect, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

import TodoItem from "./TodoItem";

// разширяваме expect с jest-dom matchers (за Vitest)
expect.extend(matchers);
beforeEach(() => {
  //   document.body.innerHTML = "";
  cleanup();
});

// it("should display todo text", () => {
//   const container = document.createElement("div");

//   document.body.appendChild(container);`

//   const root = ReactDOM.createRoot(container);

//   act(() => {
//     root.render(<TodoItem text={"test1"} />);
//   });

//   console.log("eto go", container.innerHTML);

//   const textEl = document.querySelector("label span");

//   expect(textEl.textContent).toBe("test1");
// });

it("should display todo txt", () => {
  render(<TodoItem text={"test1"} />);
  //   const textEl = document.querySelector("label span");
  const textEl = screen.getByText("test1");

  expect(textEl).toHaveTextContent("test1");
});

it("shoudl be cheked when its completed", () => {
  render(<TodoItem isCompleted />);

  const chekBox = screen.getByRole("checkbox");

  expect(chekBox).toBeChecked();
});

it("should be called  when clicked", () => {
  const onToggle = vi.fn();

  render(
    <TodoItem
      _id="todo1"
      onToggle={onToggle}
      isCompleted={false}
      text={"test1"}
    />
  );

  const chekBoxEl = screen.getByRole("checkbox", { name: "test1" });

  fireEvent.click(chekBoxEl);

  // expect(onToggle).toBeCalled()
  // expect(onToggle).toBeCalledTimes(1)
  expect(onToggle.mock.calls[0]).toEqual(["todo1"]);
});

