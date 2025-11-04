"use client";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./dashboard.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container d-flex">
      <Sidebar />
      <div className="dashboard-content flex-grow-1 bg-light">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
