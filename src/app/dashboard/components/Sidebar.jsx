"use client";
import Link from "next/link";
import {
  FaFilm,
  FaTicketAlt,
  FaDoorOpen,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside
      className="sidebar bg-dark text-white vh-100 p-3"
      style={{ width: "250px" }}
    >
      <h3 className="text-center mb-4 text-warning">🎬 CineMax Admin</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link href="/dashboard" className="nav-link text-white">
            <FaHome className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link href="/dashboard/movies" className="nav-link text-white">
            <FaFilm className="me-2" /> Movies
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link href="/dashboard/halls" className="nav-link text-white">
            <FaDoorOpen className="me-2" /> Halls
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link href="/dashboard/tickets" className="nav-link text-white">
            <FaTicketAlt className="me-2" /> Tickets
          </Link>
        </li>
      </ul>
      <div className="text-center mt-auto">
        <button className="btn btn-outline-warning w-100 mt-3">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
}
