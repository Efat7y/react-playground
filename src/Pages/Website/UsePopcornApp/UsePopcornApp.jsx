import { movies, watched } from "@/Data/popcornData/movies";
import {
  ArrowLeft,
  Calendar,
  ChevronDown,
  ChevronUp,
  //   CircleAlert,
  Clapperboard,
  Clock3,
  //   Film,
  Plus,
  Popcorn,
  Star,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const UsePopcornApp = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar moviesCount={movies.length} />

      <MainLayout>
        {/* Movies */}
        <Box>
          <MovieList movies={movies} />
        </Box>

        {/* Watched */}
        <Box>
          <WatchedSummary watched={watched} />

          <WatchedList watched={watched} />

          {/* UI Preview Only */}
          {/* هنشيله بعدين لما ندخل الـ Logic */}
          {movies[0] && <MovieDetails movie={movies[0]} />}
        </Box>
      </MainLayout>
    </div>
  );
};

export default UsePopcornApp;

const Navbar = ({ moviesCount }) => {
  return (
    <header className="border-b border-slate-700 bg-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
        <Logo />

        <Search />

        <Results count={moviesCount} />
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-amber-400 p-2 text-slate-900">
        <Popcorn size={30} />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-white">usePopcorn</h1>
        <p className="text-sm text-slate-400">
          Discover your next favorite movie
        </p>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      className="w-full rounded-xl border border-slate-600 bg-slate-700 px-5 py-3 text-white outline-none transition focus:border-amber-400 md:max-w-md"
    />
  );
};

const Results = ({ count }) => {
  return (
    <p className="text-sm font-medium text-slate-300">
      Found <span className="font-bold text-amber-400">{count}</span> movies
    </p>
  );
};

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
      <div className="flex items-center justify-end border-b border-slate-700 px-5 py-4">
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg bg-slate-700 p-2 transition hover:bg-slate-600"
        >
          {isOpen ? (
            <ChevronUp className="text-white" size={20} />
          ) : (
            <ChevronDown className="text-white" size={20} />
          )}
        </button>
      </div>

      {isOpen && <div className="p-5">{children}</div>}
    </section>
  );
};

const MovieList = ({ movies }) => {
  return (
    <div className="space-y-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const MovieCard = ({ movie }) => {
  const { poster, title, year, imdbRating } = movie;

  return (
    <article className="flex gap-4 rounded-xl bg-slate-700 p-4 transition hover:bg-slate-600">
      <img
        src={poster}
        alt={title}
        className="h-28 w-20 rounded-lg object-cover"
      />

      <div className="flex flex-1 flex-col justify-between">
        <h3 className="line-clamp-2 text-lg font-semibold text-white">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Calendar size={16} />
          <span>{year}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-yellow-400">
          <Star size={16} fill="currentColor" />
          <span>{imdbRating}</span>
        </div>
      </div>
    </article>
  );
};

const WatchedSummary = ({ watched }) => {
  const avgImdbRating =
    watched.reduce((acc, movie) => acc + movie.imdbRating, 0) /
      watched.length || 0;

  const avgUserRating =
    watched.reduce((acc, movie) => acc + movie.userRating, 0) /
      watched.length || 0;

  const avgRuntime =
    watched.reduce((acc, movie) => acc + movie.runtime, 0) / watched.length ||
    0;

  return (
    <div className="rounded-xl bg-slate-700 p-5">
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

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-lg bg-slate-800 p-4 text-center">
      <div className="mb-2 flex justify-center text-yellow-400">{icon}</div>

      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>

      <p className="mt-1 text-lg font-bold text-white">{value}</p>
    </div>
  );
}

const WatchedList = ({ watched }) => {
  return (
    <div className="mt-5 space-y-4">
      {watched.map((movie) => (
        <WatchedMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
const WatchedMovie = ({ movie }) => {
  return (
    <article className="flex gap-4 rounded-xl bg-slate-700 p-4 transition hover:bg-slate-600">
      <img
        src={movie.poster}
        alt={movie.title}
        className="h-28 w-20 rounded-lg object-cover"
      />

      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-lg font-semibold text-white">{movie.title}</h3>

        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <span className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400" />
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

const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  return (
    <section className="overflow-hidden rounded-2xl bg-slate-800">
      {/* Header */}

      <div className="relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-72 w-full object-cover"
        />

        <button className="absolute left-4 top-4 rounded-full bg-black/60 p-2 text-white backdrop-blur">
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Body */}

      <div className="space-y-6 p-6">
        <div>
          <h2 className="text-3xl font-bold text-white">{movie.title}</h2>

          <p className="mt-2 flex flex-wrap gap-4 text-slate-300">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {movie.year}
            </span>

            <span className="flex items-center gap-2">
              <Clock3 size={16} />
              {movie.runtime}
            </span>

            <span>{movie.genre}</span>
          </p>

          <div className="mt-4 flex items-center gap-2 text-yellow-400">
            <Star fill="currentColor" size={18} />

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

        <div className="space-y-4">
          <p className="italic leading-7 text-slate-300">{movie.plot}</p>

          <p className="text-slate-400">
            <strong>Actors:</strong> {movie.actors ?? "Not available"}
          </p>

          <p className="text-slate-400">
            <strong>Director:</strong> {movie.director ?? "Not available"}
          </p>
        </div>
      </div>
    </section>
  );
};

const StarRating = () => {
  return (
    <div className="rounded-xl bg-slate-700 p-5">
      <div className="mb-4 flex justify-center gap-2">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((rating) => (
          <button key={rating}>
            <Star
              size={28}
              className="text-yellow-400 transition hover:scale-110"
            />
          </button>
        ))}
      </div>

      <p className="text-center text-white">Rate this movie</p>
    </div>
  );
};

// const Loader = () => {
//   return (
//     <div className="py-16 text-center">
//       <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-500 border-t-amber-400" />

//       <p className="mt-5 text-slate-300">Loading...</p>
//     </div>
//   );
// };

// const ErrorMessage = () => {
//   return (
//     <div className="flex flex-col items-center gap-4 py-16 text-center">
//       <CircleAlert size={48} className="text-red-500" />

//       <h2 className="text-2xl font-bold text-white">Something went wrong</h2>

//       <p className="text-slate-400">Please try again later.</p>
//     </div>
//   );
// };

// const NoMovies = () => {
//   return (
//     <div className="flex flex-col items-center gap-4 py-20">
//       <Film size={55} className="text-slate-500" />

//       <h2 className="text-2xl font-bold text-white">Search for a movie</h2>

//       <p className="text-slate-400">Start typing in the search box...</p>
//     </div>
//   );
// };
