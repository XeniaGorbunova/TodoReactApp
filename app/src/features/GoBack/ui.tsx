import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface GoBackProps {
    action?: () => void;
}

export const GoBack: FC<GoBackProps> = ({ action }) => {
    const navigate = useNavigate();

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('!!', action);

        if (action) {
            action();
            return;
        }

        navigate('..', { relative: 'path' });
    }

    return (
        <button type="button" onClick={clickHandler} className='btn btn-dark mx-1'>
            Go Back
        </button>
    )
}