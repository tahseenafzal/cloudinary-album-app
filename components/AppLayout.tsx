import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px,1fr] grid-rows-[auto,1fr,auto] min-h-screen">
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="hidden lg:block p-3">
        <Sidebar />
      </div>
      <div className="p-8">{children}</div>
      <div className="col-span-2 p-3">
        Developed by: TEHSEEN AFZAL - IT Mate Pakistan
      </div>
    </div>
  );
};

export default AppLayout;
