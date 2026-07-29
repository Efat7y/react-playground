import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "@/services/omdb";

export const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    if (!id) return;

    const mapMovieDetails = (item) => ({
      imdbID: item.imdbID,
      title: item.Title,
      year: item.Year,
      poster:
        item.Poster && item.Poster !== "N/A"
          ? item.Poster
          : "https://placehold.co/400x600?text=No+Image",
      runtime: item.Runtime,
      genre: item.Genre,
      imdbRating: item.imdbRating,
      plot: item.Plot,
      actors: item.Actors,
      director: item.Director,
    });

    async function fetchMovie() {
      try {
        setLoading(true);
        setError("");

        const url = `${BASE_URL}?apikey=${API_KEY}&i=${encodeURIComponent(id)}`;
        console.log("[useMovieDetails] fetching:", url);

        const res = await fetch(url, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Something went wrong with fetching movie details");

        const data = await res.json();
        console.log("[useMovieDetails] response:", data);

        if (data.Response === "False") throw new Error(data.Error);

        const mapped = mapMovieDetails(data);
        console.log("[useMovieDetails] mapped movie:", mapped);
        setMovie(mapped);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("[useMovieDetails] error:", err.message);
        setError(err.message);
        setMovie(null);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchMovie();

    return () => controller.abort();
  }, [id]);

  return {
    movie: id ? movie : null,
    loading: id ? loading : false,
    error: id ? error : "",
  };
};
