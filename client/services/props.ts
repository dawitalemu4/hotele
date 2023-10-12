export interface Hotel {
    id: number;
    title: string;
    description: string;
    location: string;
    address: string;
    rating: number;
    price: number;
    img: string;
}

export interface Event {
    id: number;
    title: string;
    location: string;
    address: string;
    img: string;
    date: string;
}

export interface Admin {
    id: number;
    username: string;
    password: string;
}