import { useRef, useState } from "react";
import { TodoItem } from "./todo-item";

const todoItems = ["Buy tomato", "Pet cat", "Pet dog"];

/**
 * PROPS: properties as objecct that are used to pass to components, and we declare this props in a parent component.
 * STATE: it is like props, but it is the memory control of your component.
 *
 */

export const Todo = () => {
  // create a state for component input field, in order for it to work ('controllable element/component'). This is for the input to work
  const [todoInputText, setTodoInputText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // TODO: create a state for the array, to be able to modify/update the todo list from default. Usestate = hook; every hook starts with use.
  const [todos, setTodos] = useState(todoItems);
  // Syntax: const [value of state, setter function to change state - built in already with react, just name it with set<Value>] = useState(default value). Set is also a hook, starts with set so react knows you change the state.

  // Create a function to add the todo, to the current array.
  const onSubmit = (event: { preventDefault(): void }) => {
    event.preventDefault();
    // setTodos([...array, value])
    // 1. Get value ==> with {todoInputText} value in form
    // 2. Push into todoItems-array with setTodos(array w/input as parameters) --> done automatically with setTodos built-in react function - with spread operator
    const trimmedTodoInputText = todoInputText.trim();
    if (trimmedTodoInputText.length !== 0 && !todos.includes(trimmedTodoInputText)) { 
      setTodos([...todos, trimmedTodoInputText]); 
    } 
    // 3. Clean input form
    setTodoInputText("");
  };

  //   useEffect(() => {
  //     if (inputRef.current) {
  //       console.log(inputRef.current.value);
  //     }
  //   }, [inputRef.current.value]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-input">To do:</label>
        <input
          ref={inputRef}
          type="text"
          id="todo-input"
          name="todo-input"
          value={todoInputText}
          onChange={(event) => setTodoInputText(event.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
      <TodoItem todos={todos} />
    </div>
  );
};
