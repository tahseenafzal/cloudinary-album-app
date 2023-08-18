import React from "react";
import Navbar from "./Navbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px,1fr] grid-rows-3 min-h-screen">
      <div className="col-span-full">
        <Navbar />
      </div>
      <div className="hidden lg:block">SideBar</div>
      <div>{children}</div>
      <div className="col-span-full">
        Developed by: TEHSEEN AFZAL - IT Mate Pakistan
      </div>
    </div>
  );
};

export default AppLayout;
