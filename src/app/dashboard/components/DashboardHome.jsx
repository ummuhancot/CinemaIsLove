"use client";
import StatsCard from "./StatsCard";
import { useEffect, useState } from "react";
import { movieService } from "@/services/movieService";

export default function DashboardHome() {
  const [movieCount, setMovieCount] = useState(0);

  useEffect(() => {
    movieService.getAll().then((res) => setMovieCount(res.totalElements || 0));
  }, []);

  return (
    <div>
      <h2 className="mb-4">🎞️ Welcome, Admin!</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <StatsCard title="Movies" value={movieCount} color="warning" />
        </div>
        <div className="col-md-3">
          <StatsCard title="Tickets" value="324" color="info" />
        </div>
        <div className="col-md-3">
          <StatsCard title="Cinemas" value="4" color="success" />
        </div>
        <div className="col-md-3">
          <StatsCard title="Users" value="1532" color="primary" />
        </div>
      </div>
    </div>
  );
}
