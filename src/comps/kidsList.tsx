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
            <h1>Kids List</h1>
            {kids.map(kid => (
                <KidComp kid={kid} key={kid.id} />
            ))}
        </div>
    );
}

