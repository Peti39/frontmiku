import {type Toy} from "../data/data";
import {useState, useContext, useEffect} from "react";
import {ApiContext} from "../contexts/apicontext";
import { ToyComp } from "./toy";

export function ToysList() {
    const apiContext = useContext(ApiContext);
    const [toys, setToys] = useState<Toy[]>([]);
    useEffect(() => {
        apiContext.getToys().then(fetchedToys => {
            setToys(fetchedToys);
        });
    }, [apiContext]);
    return (
        <div>
            <h1>Toys List</h1>
            {toys.map(toy => (
                <ToyComp toy={toy} key={toy.id} />
            ))}
        </div>
    );
}