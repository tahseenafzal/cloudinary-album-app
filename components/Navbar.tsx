import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container">
        PHOTO APP
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
