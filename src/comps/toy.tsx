import { useEffect } from "react";
import {type Toy} from "../data/data";
//import {useContext} from "react";
//import {ApiContext} from "../contexts/apicontext";

interface ToyProps{
    toy: Toy;
}

export function ToyComp(props: ToyProps) {
    /*useEffect(() => {
        console.log("Toy component mounted:", props.toy);
    }, [props.toy]);*/
    return (
        <div>
            <h2>{props.toy.name}</h2>
            <p>Material: {props.toy.material}</p>
            <p>Weight: {props.toy.weight} kg</p>
        </div>
    );
}