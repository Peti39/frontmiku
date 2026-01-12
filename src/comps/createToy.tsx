import {type Material} from "../data/data";
import {useState, useContext} from "react";
import {ApiContext} from "../contexts/apicontext";


export function CreateToy() {
    const apiContext = useContext(ApiContext);
    const [name, setName] = useState("");
    const [material, setMaterial] = useState<Material>("other");
    const [weight, setWeight] = useState(0);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        apiContext.createToy({name, material, wheight: weight}).then(() => {
            setName("");
            setMaterial("other");
            setWeight(0);
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Toy</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label>Material:</label>
                <select value={material} onChange={e => setMaterial(e.target.value as Material)}>
                    <option value="wood">Wood</option>
                    <option value="plastic">Plastic</option>
                    <option value="metal">Metal</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label>Weight (kg):</label>
                <input type="number" value={weight} onChange={e => setWeight(parseFloat(e.target.value))} />
            </div>
            <button type="submit">Create Toy</button>
        </form>
    );
}