const url = 'http://localhost:3000'

interface Kid{
    id: number;
    name: string;
    location: string;
    wasGood: boolean;
}

type Material = 'wood' | 'plastic' | 'metal'| 'other';

interface Toy{  //when updated , update too in createToy.tsx
    id: number;
    name: string;
    material: Material;
    wheight: number;
}

async function fetchKids(): Promise<Kid[]>{
    const response = await fetch(`${url}/children`);
    const data : Kid[] = await response.json();
    return data;
}

async function fetchToys(): Promise<Toy[]>{
    const response = await fetch(`${url}/toys`);
    const data : Toy[] = await response.json();
    return data;
}

async function fetchKidById(id: number): Promise<Kid>{
    const response = await fetch(`${url}/children/${id}`);
    const data : Kid = await response.json();
    return data;
}

async function fetchToyById(id: number): Promise<Toy>{
    const response = await fetch(`${url}/toys/${id}`);
    const data : Toy = await response.json();
    return data;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function createKid(kid: Omit<Kid, 'id'>): Promise<Kid>{
    const response = await fetch(`${url}/children`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(kid)
    });
    const data : Kid = await response.json();
    return data;
}

async function createToy(toy: Omit<Toy, 'id'>): Promise<Toy>{
    const response = await fetch(`${url}/toys`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toy)
    });
    const data : Toy = await response.json();
    return data;
}



async function deleteToy(id: number): Promise<void>{
    await fetch(`${url}/toys/${id}`, {
        method: 'DELETE'
    });
}

async function giveToyToKid(kidId: number, toyId: number): Promise<void>{
    await fetch(`${url}/children/${kidId}/toys/${toyId}`, {
        method: 'PUT'
    });
}

async function removeToyFromKid(kidId: number, toyId: number): Promise<void>{
    await fetch(`${url}/children/${kidId}/toys/${toyId}`, {
        method: 'DELETE'
    });
}

export {
    fetchKids, 
    fetchToys, 
    fetchKidById, 
    fetchToyById, 
    /*createKid,*/ 
    createToy, 
    deleteToy, 
    giveToyToKid, 
    removeToyFromKid, 
    type Kid, type Toy, type Material
};