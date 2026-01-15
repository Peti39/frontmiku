import {type Kid} from "../data/data";
//import {useContext} from "react";
//import {ApiContext} from "../contexts/apicontext";

interface KidProps{
    kid: Kid;
}

export function KidComp(props: KidProps) {
    return (
        <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
                <h2 className="card-title text-primary">{props.kid.name}</h2>
                <p className="card-text"><strong>Location:</strong> {props.kid.location}</p>
                <p className="card-text">
                    <strong>Behavior:</strong> 
                    <span className={props.kid.wasGood ? "badge bg-success ms-2" : "badge bg-warning ms-2"}>
                        {props.kid.wasGood ? "Good" : "Bad"}
                    </span>
                </p>
            </div>
        </div>
    );
}