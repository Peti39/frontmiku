import {type Kid} from "../data/data";
import {useState, useContext, useEffect} from "react";
import {ApiContext} from "../contexts/apicontext";
import { KidComp } from "./kid";

export function KidsList() {
    const apiContext = useContext(ApiContext);
    const [kids, setKids] = useState<Kid[]>([]);
    useEffect(() => {
        apiContext.getKids().then(fetchedKids => {
            setKids(fetchedKids);
        });
    }, [apiContext]);
    return (
        <div>
            <h1 className="mb-4 text-primary">Kids List</h1>
            <div className="row g-4">
                {kids.map(kid => (
                    <div key={kid.id} className="col-md-6 col-lg-4">
                        <KidComp kid={kid} />
                    </div>
                ))}
            </div>
        </div>
    );
}

