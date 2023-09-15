export interface RootObject {
  cinema: Cinema;
}

export interface Cinema {
  name: string;
  movies: Movie[];
}

export interface Movie {
  title: string;
  duration: string;
  shows: Show[];
  picture: string;
}

export interface Show {
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