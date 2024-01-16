import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/08-useReducer/todoReducer";

const init = () => {
	return JSON.parse(localStorage.getItem("todos"));
};

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const todosCount = todos.length;

	const pendingTodos = todos.filter((todo) => !todo.done).length;

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const onNewTodo = (todo) => {
		const action = {
			type: "[TODO] add",
			payload: todo,
		};

		dispatch(action);
	};

	const onDeleteTodo = (id) => {
		dispatch({
			type: "[TODO] delete",
			payload: id,
		});
	};

	const onDoneTodo = (id) => {
		dispatch({
			type: "[TODO] done",
			payload: id,
		});
	};

	return {
		todos,
		todosCount,
		pendingTodos,
		onNewTodo,
		onDeleteTodo,
		onDoneTodo,
	};
};
