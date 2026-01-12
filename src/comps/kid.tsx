import {type Kid} from "../data/data";
//import {useContext} from "react";
//import {ApiContext} from "../contexts/apicontext";

interface KidProps{
    kid: Kid;
}

export function KidComp(props: KidProps) {
    return (
        <div>
            <h2>{props.kid.name}</h2>
            <p>Location: {props.kid.location}</p>
            <p>Was good: {props.kid.wasGood ? "Yes" : "No"}</p>
        </div>
    );
}