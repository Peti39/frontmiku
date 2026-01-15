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
            <h1 className="mb-4 text-primary">Toys List</h1>
            <div className="row g-4">
                {toys.map(toy => (
                    <div key={toy.id} className="col-md-6 col-lg-4">
                        <ToyComp toy={toy} onToyDelete={deleteToy} />
                    </div>
                ))}
            </div>
        </div>
    );
}