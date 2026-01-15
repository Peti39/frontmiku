import {useState, useContext, useEffect} from "react";
import {ApiContext} from "../contexts/apicontext";
import {type KidWhishedforToys} from "../data/data";
import {ConnectionComp} from "./connection";
import {type Kid, type Toy} from "../data/data";

export function ConnectToyToKid() {
    const apiContext = useContext(ApiContext);
    const [kidId, setKidId] = useState<number | undefined>(undefined);
    const [toyId, setToyId] = useState<number | undefined>(undefined);

    const [kids, setKids] = useState<Kid[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [toys, setToys] = useState<Toy[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (kidId !== undefined && toyId !== undefined) {
            apiContext.giveToyToKid(kidId, toyId).then(() => {
                console.log(`Connected toy ${toyId} to kid ${kidId}`);
                fetchWhishes();
            });
        }
    };

    const [whishes, setWhishes] = useState<KidWhishedforToys[]>([]);

    function deleteWish(kidId: number, toyId: number) {
        apiContext.removeToyFromKid(kidId, toyId).then(() => {
            setWhishes(prevWhishes => prevWhishes.map(wish => {
                if (wish.id === kidId) {
                    return {
                        ...wish,
                        whishedFor: wish.whishedFor.filter(toy => toy.id !== toyId)
                    };
                }
                return wish;
            }));
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function fetchWhishes() {
        apiContext.getKidsWhished().then(fetchedWhishes => {
            setWhishes(fetchedWhishes);
        });
    }

    useEffect(() => {
        fetchWhishes();
        apiContext.getKids().then(fetchedKids => {
            setKids(fetchedKids);
        });
        apiContext.getToys().then(fetchedToys => {
            setToys(fetchedToys);
        });
    }, [fetchWhishes, apiContext]);


//<input type="number" value={kidId ?? ''} onChange={e => setKidId(parseInt(e.target.value))} />
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-5">
                    <div className="card shadow-lg mb-4">
                        <div className="card-body">
                            <h2 className="card-title text-primary mb-4">Connect Toy to Kid</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label"><strong>Select Kid:</strong></label>
                                    <select 
                                        className="form-select" 
                                        value={kidId ?? ''} 
                                        onChange={e => setKidId(parseInt(e.target.value))}
                                    >
                                        <option value="" disabled>Choose a kid...</option>
                                        {kids.map(kid => (
                                            <option key={kid.id} value={kid.id}>{kid.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><strong>Select Toy:</strong></label>
                                    <select 
                                        className="form-select" 
                                        value={toyId ?? ''} 
                                        onChange={e => setToyId(parseInt(e.target.value))}
                                    >
                                        <option value="" disabled>Choose a toy...</option>
                                        {apiContext.toys.map(toy => (
                                            <option key={toy.id} value={toy.id}>{toy.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-success w-100">
                                    Add to Wishlist
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <h2 className="text-primary mb-4">Wishlist Summary</h2>
                    {whishes.filter(wish => wish.whishedFor.length > 0).length > 0 ? (
                        whishes.filter(wish => wish.whishedFor.length > 0).map(wish => (
                            <ConnectionComp key={wish.id} connection={wish} onDelete={deleteWish} />
                        ))
                    ) : (
                        <div className="alert alert-info" role="alert">
                            No wishlists yet. Create connections above!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}