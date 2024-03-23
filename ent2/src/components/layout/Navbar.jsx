import CartWidget from "../common/CartWidget";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { menuNavigation } from "../../router/menuNavigation";

export const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <Stack spacing={5} direction="row">
          <h5>
            {" "}
            <FaRegLightbulb /> ILed{" "}
          </h5>
          <Link to="/">
            <Button variant="text">Inicio</Button>
          </Link>

          <Link to="/category/interior">
            <Button variant="text">Luz interior</Button>
          </Link>
          <Link to="/category/exterior">
            <Button variant="text">Luz exterior</Button>
          </Link>
          <Link to="/category/led">
            <Button variant="text">Tiras Led</Button>
          </Link>

          <Link to="/cart">
            <CartWidget />
          </Link>
        </Stack>
      </div>
    </>
  );
};
