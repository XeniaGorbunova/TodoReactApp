import type { Todo } from "../../shared/model/Todo";

export interface InitialReduxState {
    todos: Todo[];
}

export const getInitState = (): InitialReduxState => {
    return {todos: []};
}

export const initState = getInitState();