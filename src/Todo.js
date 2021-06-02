import {
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Todo.css";
import firebase from "firebase";
import db from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>Update Todo</h1>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            onClick={updateTodo}
            color="secondary"
            variant="contained"
            size="small"
          >
            Update Todo
          </Button>
        </div>
      </Modal>
      <List>
        <ListItem className="todo_list">
          <ListItemText primary={props.todo.todo} secondary="Dummy Deadline" />
        </ListItem>
        <Button onClick={handleOpen} color="primary" variant="outlined">
          Edit
        </Button>
        <DeleteIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
