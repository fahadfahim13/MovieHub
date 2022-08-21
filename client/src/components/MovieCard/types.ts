export interface Movie {
    id: number;
    title: string;
    description: string;
    image: string;
    actors: [];
}

export interface MovieProps extends Movie {
    showActor?: boolean;
}