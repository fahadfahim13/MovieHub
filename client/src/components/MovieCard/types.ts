export interface MovieProps {
    id: number;
    title: string;
    description: string;
    image: string;
    showActor?: boolean;
    actors: [];
}