import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../Utils/Constants";
import SearchBar from "./SearchBar";


function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to='/'  style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="logo" className="h-[40px]" />
      </Link>

      <SearchBar/>

    </Stack>
  );
}

export default Navbar;
