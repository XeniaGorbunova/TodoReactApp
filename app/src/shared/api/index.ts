import { changeTodoStatus, createTodo, createTodoDetailQueryKey, deleteTodo, editTodo, getTodoById, getTodos, TODOS_LIST_QUERY_KEY } from './todos';

export const todosApi = {
  queries: {
    getTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    changeTodoStatus,
    editTodo
  },
  queryKeys: {
    TODOS_LIST_QUERY_KEY,
    createTodoDetailQueryKey,
  },
};