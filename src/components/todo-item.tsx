export const TodoItem = (props: { todos: string[] }) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((item) => (
        <li key={item}> {item} </li>
      ))}
    </ul>
  );
};
