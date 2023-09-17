export interface RootObject {
  cinema: Cinema;
}

export interface Cinema {
  name: string;
  movies: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  duration: string;
  shows: Show[];
  picture: string;
}

export interface Show {
  id: number;
  time: string;
  room: string;
  seats: Seat[];
}

export interface Seat {
  seatNumber: string;
  booked: boolean;
}

export interface MovieItemProps {
  movie: Movie;
}