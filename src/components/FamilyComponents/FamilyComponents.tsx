import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";
import {simpsons} from "../../data/data-base.ts";

export const FamilyComponents = () => {
    return (
        <div>
            {
                simpsons.map((value,index) => <CharacterComponent key={index} item={value}>
                {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};