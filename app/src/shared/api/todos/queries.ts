import type { Todo } from "shared/model/Todo";
import { api } from "../base";

export const getTodos = () => api.get('todos').json<Todo[]>();
export const getTodoById = ({ id }: Pick<Todo, 'id'>) => api.get(`todos/${id}1`).json<Todo>();
export const createTodo = ({ title }: Pick<Todo, 'title'>) =>
  api.post(`todos`, { json: { title, status: false }});
export const deleteTodo = ({ id }: Pick<Todo, 'id'>) => api.delete(`todos/${id}`);
export const changeTodoStatus = ({ id, status }: Pick<Todo, 'id' | 'status'>) =>
  api.patch(`todos/${id}`, { json: {status} });