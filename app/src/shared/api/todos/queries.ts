import type { Todo } from "shared/model/Todo";
import { api } from "../base";

export const getTodos = () => api.get('todos').json<Todo[]>();
export const getTodoById = ({ id }: Pick<Todo, 'id'>) => api.get(`todos/${id}`).json<Todo>();
export const createTodo = ({ title, description }: Pick<Todo, 'title' | 'description'>) =>
  api.post(`todos`, { json: { title, status: false, description }});
export const deleteTodo = ({ id }: Pick<Todo, 'id'>) => api.delete(`todos/${id}`);
export const changeTodoStatus = ({ id, status }: Pick<Todo, "id" | "status">) =>
  api.patch(`todos/${id}`, { json: { status } }).json<Todo>();
export const editTodo = ({
  id,
  title,
  description,
}: Pick<Todo, "id" | "title" | "description">) =>
  api.patch(`todos/${id}`, { json: { title, description } }).json<Todo>();