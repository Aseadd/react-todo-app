import React, { useState } from 'react';
import styles from './TodoItem.module.css';

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prefer-stateless-function
const TodoItem = (props) => {
  const {
    todo: { id, title, completed },
  } = props;

  const [editing, setEditing] = useState(false);

  const { handleChangeProps } = props;
  const { delTodoProps } = props;
  const { setUpdate } = props;
  const completedStyle = {
    fontSyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdateDOne = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEdit} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="button" onClick={() => delTodoProps(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdateDOne}
      />
    </li>
  );
};

export default TodoItem;
