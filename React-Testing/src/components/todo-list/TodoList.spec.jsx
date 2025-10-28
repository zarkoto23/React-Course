import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import TodoList from "./TodoList";

vi.mock("../../utils/request.js", () => {
  return {
    default: {
      get: vi.fn(async () => {
        return {
          todo_2: {
            _id: "todo_2",
            text: "Do laundry",
            isComplete: false,
          },
        };
      }),
    },
  };
});
it("should check todo when click | Snapshot", async () => {
  const { container } = render(<TodoList />);

  await vi.waitFor(() => {
    expect(document.querySelector(".todo-item")).not.toBeNull();
  });

  expect(container.firstChild).toMatchSnapshot();
});
