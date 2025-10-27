import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { useTodoCreateMutation, useTodoEditMutation } from "./api";
import type { Todo } from "shared/model/Todo";
import { GoBack } from "features/GoBack";
import { useNavigate } from "react-router-dom";

interface CreateFormProps extends Partial<Pick<Todo, 'title' | 'description' | 'id'>> {
    isEditing: boolean;
    setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>
}

export const Create: FC<CreateFormProps> = ({ isEditing, setIsEditing, id, title: editingTitle, description: editingDescription }) => {
    const [title, setTitle] = useState(editingTitle ?? '');
    const [description, setDescription] = useState(editingDescription ?? '');
    const { mutateAsync: mutateCreateAsync } = useTodoCreateMutation();
    const { mutateAsync: mutateEditAsync } = useTodoEditMutation();

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todoTitle = title.trim();
        const todoDescription = description.trim();

        try {
            if (isEditing) {
                await mutateEditAsync({id: id!, title: todoTitle, description: todoDescription});
                setIsEditing!(false);
                
            } else {
                await mutateCreateAsync({title: todoTitle, description: todoDescription});
                setTitle('');
                setDescription('');
            }
                
            } catch(error) {
                console.log({error});
            }
    }

    const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const descriptionChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    return (
        <form className="d-flex justify-content-center" onSubmit={submitHandler}>
            <div className="mb-3">
                <input type="text" placeholder="Todo title..." className="form-control mb-4" aria-describedby="todo title" value={title} onChange={titleChangeHandler} />
                <input type="text" placeholder="Todo description..." className="form-control mb-4" aria-describedby="todo description" value={description} onChange={descriptionChangeHandler} />
                <div className="d-flex justify-content-center mb-4">
                    {isEditing && setIsEditing ? <GoBack action={() => setIsEditing(false)} /> : null}
                    <button type="submit" className="btn btn-primary" disabled={!title}>Submit</button>
                </div>
            </div>
        </form>
    );
}