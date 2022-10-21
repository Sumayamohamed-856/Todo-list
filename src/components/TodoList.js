import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import axios from "axios";
import { useNavigate } from "react-router";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = (todo) => {
    if (!todo.task || /^\s*$/.test(todo.task)) {
      return;
    }
    const access_token = window.localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/todos/", todo, config)
      .then((response) => {
        console.log(response);
        todo = response.data.todo;
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTodos = () => {
    const access_token = window.localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .get("http://localhost:5000/todos/", config)
      .then((response) => {
        let todos = response.data;
        setTodos(todos);
      })
      .catch((err) => {
        if(err.response.status === 401) {
          window.localStorage.removeItem("access_token")
          navigate('/')
        }
        console.log(err.response.status);

      });
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.task || /^\s*$/.test(newValue.task)) {
      return;
    }

    const access_token = window.localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .put(
        `http://localhost:5000/todos/${todoId}`,
        { id: todoId, task: newValue.task },
        config
      )
      .then((response) => {
        let todo = response.data.todo;
        setTodos((prev) =>
          prev.map((item) => (item.id === todoId ? todo : item))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeTodo = (todoId) => {
    const access_token = window.localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .delete(`http://localhost:5000/todos/${todoId}`, config)
      .then(() => {
        const removedArr = [...todos].filter((todo) => todo.id !== todoId);

        setTodos(removedArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const completeTodo = (todo) => {
    const access_token = window.localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .put(
        `http://localhost:5000/todos/${todo.id}`,
        { done:  !todo.done},
        config
      )
      .then((response) => {
        let todo = response.data.todo;
        setTodos((prev) =>
          prev.map((item) => (item.id === todo.id ? todo : item))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>PLAN FOR THE DAY OR FOR THE WEEK</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;