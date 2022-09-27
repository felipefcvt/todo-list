import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function Form({ addTodo, deleteTodo }) {

    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
        const todoObj = {text: text, id: id};
        setId(id + 1);
        addTodo(todoObj)
        document.querySelector("#outlined-basic").value = null;
    }

    return(
        <div>
            <Paper style={{ padding: "2em"}}>
                <div style={{ display: "flex", justifyContent: "center"}}>
                    <TextField id="outlined-basic" label="Tarefas" variant="outlined" onChange={(e) => setText(e.target.value)}/>
                    <Button variant="text" onClick={() => todoCreate(text)}>Add</Button>
                </div>
            </Paper>
        </div>
    )
}