import { Actor } from "components/ActorItem/types";

export interface Movie {
    id: number;
    title: string;
    description: string;
    image: string;
    actors: Actor[];
}

export interface MovieProps extends Movie {
    showActor?: boolean;
}