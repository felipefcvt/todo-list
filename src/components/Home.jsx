import { Container, List } from "@mui/material";
import React from "react";
import { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";

export default function Home() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered)
    };

    const editTodo = (id, editedText) => {
        var todosArrey = [...todos];

        for (var i in todosArrey) {
            if (todosArrey[i].id === id) {
                todosArrey[i].text = editedText;
            }
        }
    };

    return(
        // <div className="App">
      <Container maxWidth="xs" style={{ marginTop: "2em"}}>
      <Form addTodo={addTodo}/>
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) =>
            <div key={todo.id} style={{ marginTop: "1em"}}>
                <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
            </div>
        )}
      </List>
      </Container>
    // </div>
    )
}