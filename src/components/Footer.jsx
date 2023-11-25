import React from "react";
import { ApartmentRounded } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-white p-2">
      <div className="flex flex-wrap items-center gap-1">
        <ApartmentRounded style={{ fontSize: "2rem" }} />
        <span className="text-sm">AptTalk</span>
      </div>
      <p className="text-sm">Copyright © 2023 - All right reserved</p>
    </footer>
  );
};

export default Footer;
