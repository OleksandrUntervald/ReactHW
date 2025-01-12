import {ITodo} from "../../models/ITodo.ts";
import './Todo.css';

interface TodoProps{
    item: ITodo;
}

export const Todo = ({item}: TodoProps) => {
    return (
        <div>
            <h3 className={ item.completed ? 'complete' : 'non-complete m-2 min-w-4/5'}>{item.title}</h3>
        </div>
    );
};
