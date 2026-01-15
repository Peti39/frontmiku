import {type KidWhishedforToys} from "../data/data";

interface ConnectionProps{
    connection: KidWhishedforToys;
    onDelete?: (kidId: number, toyId: number) => void;
}

export function ConnectionComp(props: ConnectionProps) {
    return (
        <div>
            <h3>{props.connection.name}</h3>
            <ul>
                {props.connection.whishedFor.map(toy => (
                    <li key={toy.id}>
                        {toy.name}
                        <br />
                        <button onClick={() => props.onDelete?.(props.connection.id, toy.id)}>Remove Wish</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}