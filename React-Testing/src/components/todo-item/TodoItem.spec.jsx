import { beforeEach, expect, it } from "vitest";
import TodoItem from "./TodoItem";
import ReactDOM from "react-dom/client";
import { act } from "react";
import { cleanup,getByText,queryByText,render,screen} from "@testing-library/react";

beforeEach(() => {
//   document.body.innerHTML = "";
cleanup()
});

// it("should display todo text", () => {
//   const container = document.createElement("div");

//   document.body.appendChild(container);

//   const root = ReactDOM.createRoot(container);

//   act(() => {
//     root.render(<TodoItem text={"test1"} />);
//   });

  //   console.log("eto go", container.innerHTML);

//   const textEl = document.querySelector("label span");

//   expect(textEl.textContent).toBe("test1");
// });


it('should display todo txt',()=>{
render(<TodoItem text={'test1'}/>)
//   const textEl = document.querySelector("label span");
const textEl=screen.getByText('test1')


  expect(textEl.textContent).equal("test1");

}) 