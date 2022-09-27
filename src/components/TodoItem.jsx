import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';


export default function TodoItem({ todo, deleteTodo, editTodo }) {

  const [openTodoDialog, setOpenTodoDialog] = React.useState(false);
  const dialogHandler = () => {
    setOpenTodoDialog(!openTodoDialog);
  }

  return (
    <>
    <EditTodoDialog editTodo={editTodo} open={openTodoDialog} dialogHandler={dialogHandler} todo={todo}/>
    <Paper style={{padding: "1em 0em"}}>
    <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{  }}
                />
              </ListItemIcon>
              <ListItemText primary={todo.text} onClick={setOpenTodoDialog}/>
            </ListItemButton>
          </ListItem>
          </Paper>
    </>
  );
}
