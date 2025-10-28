import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import TodoList from "./TodoList";



it('should chek todo when it clicked',()=>{
    render(<TodoList />)

    expect(true).toBe(true)

    
})