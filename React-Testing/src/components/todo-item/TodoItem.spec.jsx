import { render, screen, cleanup } from '@testing-library/react'
import { beforeEach, it, expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'

import TodoItem from './TodoItem'

// разширяваме expect с jest-dom matchers (за Vitest)
expect.extend(matchers)
beforeEach(() => {
//   document.body.innerHTML = "";
cleanup()
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





it('should display todo txt',()=>{
render(<TodoItem text={'test1'}/>)
//   const textEl = document.querySelector("label span");
const textEl=screen.getByText('test1')


  expect(textEl).toBeInTheDocument();

}) 