import {type Toy} from "../data/data";
//import {useContext} from "react";
//import {ApiContext} from "../contexts/apicontext";

interface ToyProps{
    toy: Toy;
}

export function ToyComp(props: ToyProps) {
    return (
        <div>
            <h2>{props.toy.name}</h2>
            <p>Material: {props.toy.material}</p>
            <p>Weight: {props.toy.wheight} kg</p>
        </div>
    );
}