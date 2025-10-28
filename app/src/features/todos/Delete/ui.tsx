import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import type { Todo } from "shared/model/Todo";
import { useDeleteTodo } from "./api";
import { Modal } from "widgets/Modal";

interface DeleteProps extends Pick<Todo, 'id'> {
    goBack?: boolean
}

export const Delete: FC<DeleteProps> = ({ id, goBack }) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const { mutateAsync, isPending } = useDeleteTodo({id});
    const navigate = useNavigate();
    const deleteHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (isPending) return

        await mutateAsync({id});
        if (goBack) {
            navigate('..', {relative: 'path'});
        }
    }

    const openModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setIsModalOpen(true)
    };
    const closeModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setIsModalOpen(false)
    };
    
    return (isModalOpen 
            ? <Modal>
                <div className="d-flex align-items-center flex-column gap-4">
                    <h4>Are you sure you want to delete this task?</h4>
                    <div className="d-flex align-items-center">
                        <button type="button" onClick={closeModalHandler} className="btn btn-primary mx-1">
                            Cancel
                        </button>
                        <button type="button" onClick={deleteHandler} className="btn btn-danger mx-1">
                            Delete
                        </button>
                    </div>
                </div>
              </Modal>
            : <button type="button" onClick={openModalHandler} className="btn btn-danger mx-1">
                Delete
              </button>    
            );
}