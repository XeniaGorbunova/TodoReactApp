import { useState, type FC } from "react";
import { useParams } from "react-router-dom";
import { useTodoDetailApi } from "./api";
import { TodoDetailCard } from "entities/todos/Detail";
import { GoBack } from "features/GoBack";
import { ChangeStatusTodoFeature } from "features/todos/ChangeStatus";
import { DeleteTodoFeature } from "features/todos/Delete";
import { withQuery } from "shared/ui/HOCs/withQuery";
import { EditTodoFeature } from "features/todos/Edit";
import { TodoCreateForm } from "features/todos/Create";

export const TodoDetail: FC = () => {
    const [ isEditing, setIsEditing ] = useState(false);
    const { id } = useParams();
    const { todo, isLoading, isError, error, refetch } = useTodoDetailApi({ id: id! });

    return withQuery(() => (
        <>
            <h2 className="text-center mb-4">Todo page</h2>
            {isEditing 
                ? <TodoCreateForm isEditing setIsEditing={setIsEditing} {...todo} />
                : <TodoDetailCard 
                        {...todo!}
                        actions={
                            <>
                            <GoBack />
                            <EditTodoFeature setIsEditing={setIsEditing} />
                            <ChangeStatusTodoFeature 
                                id={todo!.id} 
                                status={todo!.status} />
                            <DeleteTodoFeature id={todo!.id} goBack />
                            </>
                        }
                    />
            }        
        </>
    ))({ isLoading, isError, error, refetch });
}