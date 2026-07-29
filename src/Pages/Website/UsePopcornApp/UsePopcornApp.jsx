import {
  ArrowLeft,
  Calendar,
  ChevronDown,
  ChevronUp,
  CircleAlert,
  Clapperboard,
  Clock3,
  Film,
  Plus,
  Popcorn,
  Star,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import StarRating from "../StarRating";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <Results count={movies.length} />
      </Navbar>

      <MainLayout>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
        <Box>
          <StarRating
            maxRating={5}
            size={15}
            messages={["Terrible", "Average", "Good", "Great", "Amazing"]}
          />
          <StarRating maxRating={10} defaultRating={3} />
          <StarRating size={24} color="red" />
        </Box>
      </MainLayout>
    </div>
  );
}

/* ===========================
        Navbar
=========================== */

const Navbar = ({ children }) => {
  return (
    <header className="border-b border-slate-700 bg-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-4 md:flex-row">
        <Logo />
        {children}
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-amber-400 p-2 text-slate-900">
        <Popcorn size={28} />
      </div>

      <div>
        <h1 className="text-2xl font-bold">usePopcorn</h1>

        <p className="text-sm text-slate-400">
          Discover your next favorite movie
        </p>
      </div>
    </div>
  );
};

const Search = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search movies..."
      className="w-full rounded-xl border border-slate-600 bg-slate-700 px-5 py-3 outline-none transition focus:border-amber-400 md:max-w-md"
    />
  );
};

const Results = ({ count }) => {
  return (
    <p className="text-sm text-slate-300">
      Found <span className="font-bold text-amber-400">{count}</span> results
    </p>
  );
};

/* ===========================
        Layout
=========================== */

const MainLayout = ({ children }) => {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-2">
      {children}
    </main>
  );
};

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="overflow-hidden rounded-2xl bg-slate-800 shadow-xl">
      <div className="flex justify-end border-b border-slate-700 p-4">
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg bg-slate-700 p-2 transition hover:bg-slate-600"
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isOpen && <div className="p-5">{children}</div>}
    </section>
  );
};

/* ===========================
        Movies List
=========================== */

const MovieList = ({ movies }) => {
  return (
    <div className="space-y-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <article className="group flex cursor-pointer gap-4 rounded-xl bg-slate-700 p-4 transition duration-300 hover:-translate-y-1 hover:bg-slate-600 hover:shadow-xl">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="h-32 w-24 rounded-lg object-cover shadow-lg transition group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="line-clamp-2 text-lg font-bold text-white">
            {movie.Title}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
            <Calendar size={16} className="text-amber-400" />

            <span>{movie.Year}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm text-yellow-400">
          <Star size={16} fill="currentColor" />

          <span>IMDb Movie</span>
        </div>
      </div>
    </article>
  );
};

/* ===========================
      Watched Summary
=========================== */

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));

  const avgUserRating = average(watched.map((movie) => movie.userRating));

  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="rounded-xl bg-slate-700 p-5 shadow-lg">
      <h2 className="mb-5 text-lg font-bold text-white">Movies you watched</h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat
          icon={<Clapperboard size={18} />}
          label="Movies"
          value={watched.length}
        />

        <Stat
          icon={<Star size={18} />}
          label="IMDb"
          value={avgImdbRating.toFixed(1)}
        />

        <Stat
          icon={<Star size={18} />}
          label="Your Rate"
          value={avgUserRating.toFixed(1)}
        />

        <Stat
          icon={<Clock3 size={18} />}
          label="Runtime"
          value={`${avgRuntime.toFixed(0)} min`}
        />
      </div>
    </div>
  );
};

const Stat = ({ icon, label, value }) => {
  return (
    <div className="rounded-xl bg-slate-800 p-4 text-center transition hover:bg-slate-700">
      <div className="mb-2 flex justify-center text-yellow-400">{icon}</div>

      <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>

      <p className="mt-2 text-lg font-bold text-white">{value}</p>
    </div>
  );
};

/* ===========================
      Watched List
=========================== */

const WatchedList = ({ watched }) => {
  return (
    <div className="mt-6 space-y-4">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

const WatchedMovie = ({ movie }) => {
  return (
    <article className="group flex gap-4 rounded-xl bg-slate-700 p-4 transition duration-300 hover:-translate-y-1 hover:bg-slate-600 hover:shadow-xl">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="h-28 w-20 rounded-lg object-cover shadow-lg transition group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col justify-between">
        <h3 className="line-clamp-2 text-lg font-semibold text-white">
          {movie.Title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300">
          <span className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400" fill="currentColor" />
            {movie.imdbRating}
          </span>

          <span className="flex items-center gap-1">⭐ {movie.userRating}</span>

          <span className="flex items-center gap-1">
            <Clock3 size={16} />
            {movie.runtime} min
          </span>
        </div>
      </div>

      <button className="self-start rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600">
        <Trash2 size={18} />
      </button>
    </article>
  );
};

/* ===========================
        Movie Details
=========================== */

const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  return (
    <section className="overflow-hidden rounded-2xl bg-slate-800 shadow-xl">
      {/* Header */}
      <div className="relative">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="h-80 w-full object-cover"
        />

        <button className="absolute left-5 top-5 rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-black">
          <ArrowLeft size={22} />
        </button>
      </div>

      {/* Body */}
      <div className="space-y-6 p-6">
        <div>
          <h2 className="text-3xl font-bold">{movie.Title}</h2>

          <div className="mt-4 flex flex-wrap gap-5 text-slate-300">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {movie.Year}
            </span>

            <span className="flex items-center gap-2">
              <Clock3 size={16} />
              {movie.runtime} min
            </span>

            <span>{movie.genre}</span>
          </div>

          <div className="mt-4 flex items-center gap-2 text-yellow-400">
            <Star size={18} fill="currentColor" />

            <span>{movie.imdbRating} IMDb Rating</span>
          </div>
        </div>

        <StarRating />

        <div className="rounded-xl bg-slate-700 p-5">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 font-bold text-slate-900 transition hover:bg-amber-300">
            <Plus size={18} />
            Add To Watched
          </button>
        </div>

        <div className="space-y-5">
          <p className="italic leading-7 text-slate-300">{movie.plot}</p>

          <p className="text-slate-400">
            <strong>Actors:</strong> {movie.actors}
          </p>

          <p className="text-slate-400">
            <strong>Director:</strong> {movie.director}
          </p>
        </div>
      </div>
    </section>
  );
};

/* ===========================
        Star Rating
=========================== 

const StarRating = () => {
  return (
    <div className="rounded-xl bg-slate-700 p-5">
      <div className="mb-5 flex justify-center gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <button key={i} className="transition hover:scale-125">
            <Star size={30} className="text-yellow-400" />
          </button>
        ))}
      </div>

      <p className="text-center font-medium text-white">Rate this movie</p>
    </div>
  );
};
*/
/* ===========================
          Loader
=========================== */

const Loader = () => {
  return (
    <div className="py-20 text-center">
      <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-600 border-t-amber-400"></div>

      <p className="mt-6 text-slate-400">Loading movies...</p>
    </div>
  );
};

/* ===========================
      Error Message
=========================== */

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <CircleAlert size={55} className="text-red-500" />

      <h2 className="text-2xl font-bold">Something went wrong</h2>

      <p className="text-slate-400">{message}</p>
    </div>
  );
};

/* ===========================
          No Movies
=========================== */

const NoMovies = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-24">
      <Film size={60} className="text-slate-500" />

      <h2 className="text-2xl font-bold">Search for a movie</h2>

      <p className="text-slate-400">Start typing in the search box...</p>
    </div>
  );
};
