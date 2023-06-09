import React, { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import styles from "./Navbar.module.css";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

let { links, menuItem, menuNavbar, logo } = styles;
const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "blanchedalmond" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dhpyauyit/image/upload/v1680560000/E-commerce%20ChocoLove/logoChocolate_time_wrnilo.png"
                alt="Logo"
                className={logo}
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="rgb(143, 68, 15);"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "inline",
                    paddingLeft: 10,
                  }}
                >
                  {categories.map((category) => {
                    return (
                      <Link
                        key={category.id}
                        to={category.path}
                        className={menuItem}
                      >
                        {category.title}
                      </Link>
                    );
                  })}
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Link className={links} to="/">
                <Button
                  onClick={handleCloseNavMenu}
                  className={menuNavbar}
                  color="success"
                >
                  Todas
                </Button>
              </Link>
              <Link className={links} to="/category/Bombones">
                <Button
                  onClick={handleCloseNavMenu}
                  className={menuNavbar}
                  color="success"
                >
                  Bombones
                </Button>
              </Link>
              <Link className={links} to="/category/Trufas">
                <Button
                  onClick={handleCloseNavMenu}
                  className={menuNavbar}
                  color="success"
                >
                  Trufas
                </Button>
              </Link>
              <Link className={links} to="/category/Tabletas">
                <Button
                  onClick={handleCloseNavMenu}
                  className={menuNavbar}
                  color="success"
                >
                  Tabletas
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <CartWidget />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Navbar;
