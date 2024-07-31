import React, { useState } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

function App() {
  const [listTodo, setListTodo] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setListTodo([...listTodo, todo]);
  };

  return (
    <main className="App">
      <InputTodo
        addTodo={ addTodo }
      />
      <ul>
        { listTodo.map((todo, index) => (
          <li key={ index }>
            <Item content={ todo } />
          </li>
        )) }
      </ul>
    </main>
  );
}

export default App;
