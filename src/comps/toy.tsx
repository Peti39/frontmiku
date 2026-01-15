
import {type Toy} from "../data/data";
//import {useContext} from "react";
//import {ApiContext} from "../contexts/apicontext";

interface ToyProps{
    toy: Toy;
    onToyClick?: (toy: Toy) => void;
    onToyDelete?: (toyId: number) => void;
}

export function ToyComp(props: ToyProps) {
    return (
        <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
                <h2 className="card-title text-primary">{props.toy.name}</h2>
                <p className="card-text"><strong>Material:</strong> {props.toy.material}</p>
                <p className="card-text"><strong>Weight:</strong> {props.toy.weight} kg</p>
                <button onClick={() => props.onToyDelete?.(props.toy.id)} className="btn btn-danger btn-sm mt-2">
                    Delete Toy
                </button>
            </div>
        </div>
    );
}