import {type KidWhishedforToys} from "../data/data";

interface ConnectionProps{
    connection: KidWhishedforToys;
    onDelete?: (kidId: number, toyId: number) => void;
}

export function ConnectionComp(props: ConnectionProps) {
    return (
        <div className="card shadow-sm border-0 mb-3">
            <div className="card-body">
                <h3 className="card-title text-primary">{props.connection.name}</h3>
                {props.connection.whishedFor.length > 0 ? (
                    <ul className="list-group list-group-flush">
                        {props.connection.whishedFor.map(toy => (
                            <li key={toy.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{toy.name}</span>
                                <button onClick={() => props.onDelete?.(props.connection.id, toy.id)} className="btn btn-outline-danger btn-sm">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-muted">No wishlist items</p>
                )}
            </div>
        </div>
    );
}