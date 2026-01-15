import {useState, useContext} from "react";
import {ApiContext} from "../contexts/apicontext";

export function ConnectToyToKid() {
    const apiContext = useContext(ApiContext);
    const [kidId, setKidId] = useState<number | undefined>(undefined);
    const [toyId, setToyId] = useState<number | undefined>(undefined);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (kidId !== undefined && toyId !== undefined) {
            apiContext.giveToyToKid(kidId, toyId).then(() => {
                console.log(`Connected toy ${toyId} to kid ${kidId}`);
            });
        }
    };

    return (
        <div>
            <h1>Connect Toy To Kid</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Kid ID:</label>
                    <input type="number" value={kidId ?? ''} onChange={e => setKidId(parseInt(e.target.value))} />
                </div>
                <div>
                    <label>Toy ID:</label>
                    <input type="number" value={toyId ?? ''} onChange={e => setToyId(parseInt(e.target.value))} />
                </div>
                <button type="submit">Connect</button>
            </form>


        </div>
    );
}