import { useRef, useState, type Dispatch, type FC, type SetStateAction } from "react";
import styles from './styles.module.scss';
import classNames from "classnames";
import { Dropdown } from "react-bootstrap";

export type FilterType = 'All' | 'Done' | 'Not done';

interface FilterProps {
    filter: FilterType;
    setFilter: Dispatch<SetStateAction<FilterType>>;
}

export const Filter: FC<FilterProps> = ({ setFilter, filter }) => {    
    const [show, setShow] = useState(false);

    const handleSelect = (filter: FilterType) => {
        setFilter(filter);
        setShow(false); // Close the dropdown
    }

    return (
        <Dropdown 
            show={show} 
            onToggle={(isOpen) => setShow(isOpen)}
            onSelect={handleSelect}
        >
            <Dropdown.Toggle 
                className={classNames('btn-light', 'mb-3', styles['filter-btn'])} 
                variant="light"
            >
                <img src="/filter.svg" alt="filter" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item active={filter === 'All'} eventKey="All">All</Dropdown.Item>
                <Dropdown.Item active={filter === 'Done'} eventKey="Done">Done</Dropdown.Item>
                <Dropdown.Item active={filter === 'Not done'}  eventKey="Not done">Not done</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}