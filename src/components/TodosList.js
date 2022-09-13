import React from 'react';
import TodoItem from './TodoItem';

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prefer-stateless-function
class TodosList extends React.Component {
  render() {
    const { todos } = this.props;
    const { handleChangeProps } = this.props;
    const { delTodoProps } = this.props;
    const { setUpdate } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            delTodoProps={delTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
