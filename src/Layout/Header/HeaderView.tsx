import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

type Anchor = "top" | "left" | "bottom" | "right";

export default function HeaderView() {
  const [state, setState] = React.useState<{ left: boolean }>({
    left: false,
  });

  const token = localStorage.getItem("codequiztoken");
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      style={{
        background:
          "linear-gradient(-45deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
      }}
      sx={{
        width: 250,
        height: "100%",

        color: "hsl(0, 0%, 100%)",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: "login", href: "/login" },
          { name: "Sign Up", href: "/registration" },
        ].map(({ name, href }, index) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <LoginIcon sx={{ color: "hsl(0, 0%, 100%)" }} />
                ) : (
                  <AppRegistrationIcon sx={{ color: "hsl(0, 0%, 100%)" }} />
                )}
              </ListItemIcon>
              <Link
                style={{
                  color: "white",
                  padding: "10px",
                  textDecoration: "None",
                }}
                to={href}
              >
                <ListItemText primary={name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          background:
            "linear-gradient(-45deg,hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            CodeQuiz
          </Typography>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              onClick={toggleDrawer("left", true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </Box>

          <Box display={{ xs: "none", md: "block" }}>
            {token ? (
              <>
                <Link
                  onClick={() => {
                    localStorage.removeItem("codequiztoken");
                  }}
                  style={{
                    color: "white",
                    padding: "10px",
                    textDecoration: "None",
                  }}
                  to="/login"
                >
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link
                  style={{
                    color: "white",
                    padding: "10px",
                    textDecoration: "None",
                  }}
                  to="/registration"
                >
                  Sign up
                </Link>

                <Link
                  style={{
                    color: "white",
                    padding: "10px",
                    textDecoration: "None",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
