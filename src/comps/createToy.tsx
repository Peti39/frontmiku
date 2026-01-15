import {type Material} from "../data/data";
import {useState, useContext} from "react";
import {ApiContext} from "../contexts/apicontext";


export function CreateToy() {
    const apiContext = useContext(ApiContext);
    const [name, setName] = useState("");
    const [material, setMaterial] = useState<Material>("other");
    const [wheight, setWeight] = useState(0);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) {
            alert("Name is required");
            return;
        }
        if (wheight <= 0) {
            alert("Weight must be positive");
            return;
        }
        console.log("Creating toy:", {name, material, wheight});
        apiContext.createToy({name, material, weight: wheight}).then(() => {
            setName("");
            setMaterial("other");
            setWeight(0);
        });
    };
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-primary mb-4">Create New Toy</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label"><strong>Toy Name:</strong></label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={name} 
                                        onChange={e => setName(e.target.value)} 
                                        placeholder="Enter toy name"
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><strong>Material:</strong></label>
                                    <select 
                                        className="form-select" 
                                        value={material} 
                                        onChange={e => setMaterial(e.target.value as Material)}
                                    >
                                        <option value="wood">Wood</option>
                                        <option value="plastic">Plastic</option>
                                        <option value="metal">Metal</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><strong>Weight (kg):</strong></label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        value={wheight} 
                                        onChange={e => setWeight(parseFloat(e.target.value))}
                                        placeholder="0.00"
                                        step="0.1"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Create Toy
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}