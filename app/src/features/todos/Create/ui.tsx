import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { useTodoCreateMutation } from "./api";

export const Create: FC = () => {
    const [title, setTitle] = useState('');
    const { mutateAsync } = useTodoCreateMutation();

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todoTitle = title.trim();

        if (todoTitle) {
            try {
                await mutateAsync({title: todoTitle});
                setTitle('');
            } catch(error) {
                console.log({error});
            }
            
        }
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    return (
        <form className="d-flex justify-content-center" onSubmit={submitHandler}>
            <div className="mb-3">
                <input type="text" placeholder="Todo title..." className="form-control mb-4" aria-describedby="todo title" value={title} onChange={changeHandler} />
                <div className="d-flex justify-content-center mb-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );
}