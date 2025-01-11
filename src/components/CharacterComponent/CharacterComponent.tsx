import {ISimpsonsList} from "../../moduls/ISimpsonsList.ts";
import {ReactNode} from "react";

interface CharacterComponentProps{
    item: ISimpsonsList,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='flex justify-around flex-row-reverse  m-10'>
            <h3>
                {item.name} {item.surname}
            </h3>
            <p>
                {children}
            </p>
            <img className='w-24' src={item.photo} alt={item.name}/>
        </div>
    );
};