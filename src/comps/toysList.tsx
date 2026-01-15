import {type Toy} from "../data/data";
import {useState, useContext, useEffect} from "react";
import {ApiContext} from "../contexts/apicontext";
import { ToyComp } from "./toy";

export function ToysList() {
    const apiContext = useContext(ApiContext);
    const [toys, setToys] = useState<Toy[]>([]);

    function deleteToy(toyId: number) {
        apiContext.deleteToy(toyId).then(() => {
            setToys(prevToys => prevToys.filter(toy => toy.id !== toyId));
        });
    }
    useEffect(() => {
        apiContext.getToys().then(fetchedToys => {
            setToys(fetchedToys);
        });
    }, [apiContext]);
    return (
        <div>
            <h1>Toys List</h1>
            {toys.map(toy => (
                <ToyComp toy={toy} key={toy.id} onToyDelete={deleteToy} />
            ))}
        </div>
    );
}