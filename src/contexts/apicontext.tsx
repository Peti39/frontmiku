import { createContext, useState, type PropsWithChildren } from "react";
import { type Kid, type Toy, fetchKids, fetchToys, fetchKidById, fetchToyById,createToy,deleteToy,giveToyToKid,removeToyFromKid } from "../data/data";

interface ApiContextType {
    kids: Kid[];
    toys: Toy[];
    getKids: () => Promise<Kid[]>;
    getToys: () => Promise<Toy[]>;

    getKidById: (id: number) => Promise<Kid>;
    getToyById: (id: number) => Promise<Toy>;
    
    createToy: (toy: Omit<Toy, 'id'>) => Promise<Toy>;
    deleteToy: (id: number) => Promise<void>;

    giveToyToKid: (kidId: number, toyId: number) => Promise<void>;
    removeToyFromKid: (kidId: number, toyId: number) => Promise<void>;
}

const defaultApiContext: ApiContextType = {
    kids: [],
    toys: [],
    getKids: async () => [],
    getToys: async () => [],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getKidById: async (id: number) => ({ id: 0, name: "", location: "", wasGood: false }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getToyById: async (id: number) => ({ id: 0, name: "", material: "other", wheight: 0 }),
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createToy: async (toy: Omit<Toy, 'id'>) => ({ id: 0, name: "", material: "other", wheight: 0 }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteToy: async (id: number) => {},

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    giveToyToKid: async (kidId: number, toyId: number) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeToyFromKid: async (kidId: number, toyId: number) => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const ApiContext = createContext<ApiContextType>(defaultApiContext);

export function ApiProvider(props: PropsWithChildren) {
    const [kids, setKids] = useState<Kid[]>([]);
    const [toys, setToys] = useState<Toy[]>([]);
    const getKids = async (): Promise<Kid[]> => {
        const data = await fetchKids();
        setKids(data);
        return data;
    }
    const getToys = async (): Promise<Toy[]> => {
        const data = await fetchToys();
        setToys(data);
        return data;
    }
    const getKidById = async (id: number): Promise<Kid> => {
        return await fetchKidById(id);
    }
    const getToyById = async (id: number): Promise<Toy> => {
        return await fetchToyById(id);
    }

    const deleteToyy = async (id: number): Promise<void> => {
        await deleteToy(id);
        setToys(toys.filter(toy => toy.id !== id));
    }

    const putToyToKid = async (kidId: number, toyId: number): Promise<void> => {
        await giveToyToKid(kidId, toyId);
    }
    const deleteToyFromKid = async (kidId: number, toyId: number): Promise<void> => {
        await removeToyFromKid(kidId, toyId);
    }

    const createToyy = async (toy: Omit<Toy, 'id'>): Promise<Toy> => {
        const newToy = await createToy(toy);
        setToys([...toys, newToy]);
        return newToy;
    }

    const contextValue: ApiContextType = {
        kids : kids,
        toys : toys,
        getKids : getKids,
        getToys : getToys,
        getKidById : getKidById,
        getToyById : getToyById,
        createToy : createToyy,
        deleteToy : deleteToyy,
        giveToyToKid : putToyToKid,
        removeToyFromKid : deleteToyFromKid,
    };
    return (
        <ApiContext.Provider value={contextValue}>
            {props.children}
        </ApiContext.Provider>
    );
}