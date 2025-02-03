export interface MovieInfo {
    name: string,
    year: number,
    genre: string,
    duration: number,
    is_favorite: boolean,
    rating: number,
    description: string
}

export interface Movie {
    id: number,
    info: MovieInfo,
    image: string
}

export interface UserData {
    name: string,
    image: string,
}