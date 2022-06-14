import React, { FormEvent, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../Input'
import { List } from '../List'
import { ListItem } from '../List/ListItem'
import { useState } from 'react'


interface ToDo {
  id: string;
  task: string;
  completed: boolean;
}

export function ToDoList() {
  const [toDo, setToDo] = useState('')
  const [toList, setList] = useState([] as ToDo[])

  function handleChange(event: FormEvent) {
    const element = event.target as HTMLInputElement
    setToDo(element.value)
  }

  function onClickToDo(event: FormEvent) {
    if (toDo.length === 0) return

    const newTask = { id: uuidv4(), task: toDo, completed: false }; //UU ID 

    addTask(newTask);
    setToDo('');
    (document.getElementById('todo') as HTMLInputElement).value = '';
  }

  function addTask(task: ToDo) {
    setList([...toList, task]);
  }

  function deleteTask(id: string) {
    const removedItem = [...toList].filter((item: ToDo) => item.id !== id)
    setList(removedItem)
  }

  function toggleToDo(id: string) {
    console.log("toggleToDo");

    const list = [...toList].map((item: ToDo) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    })
    setList(list);
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    if (todos) {
      setList(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toList));
  }, [toList]);

  return (
    <div className="flex items-center flex-col m-4 w-full">
      <Input theValue={handleChange} onClickToDo={onClickToDo} />
      <List >

        {toList.map(((item: ToDo) =>
          <ListItem item={item.task} done={item.completed} toggleToDo={() => toggleToDo(item.id)} key={item.id} deleteToDo={() => deleteTask(item.id)} />

        ))}
      </List>

    </div>
  );
}
