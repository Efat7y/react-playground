import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "@/services/omdb";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const mapSearchMovie = (item) => ({
      imdbID: item.imdbID,
      title: item.Title,
      year: item.Year,
      poster:
        item.Poster && item.Poster !== "N/A"
          ? item.Poster
          : "https://placehold.co/200x300?text=No+Image",
      imdbRating: null,
    });

    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
        console.log("[useMovies] fetching:", url);

        const res = await fetch(url, {
          signal: controller.signal,
        });

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        console.log("[useMovies] response:", data);

        if (data.Response === "False") throw new Error(data.Error);

        const mapped = (data.Search ?? []).map(mapSearchMovie);
        console.log("[useMovies] mapped movies:", mapped);
        setMovies(mapped);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("[useMovies] error:", err.message);
        setError(err.message);
        setMovies([]);
      } finally {
        // Don't flip loading off for an aborted request — a newer one may still be in flight
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    // Match Jonas: wait until query has at least 3 chars (avoids OMDb "Too many results")
    if (query.length < 3) {
      return;
    }

    fetchMovies();

    return () => controller.abort();
  }, [query]);

  const hasQuery = query.length >= 3;

  return {
    movies: hasQuery ? movies : [],
    loading: hasQuery ? loading : false,
    error: hasQuery ? error : "",
  };
};
