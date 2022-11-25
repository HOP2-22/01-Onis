import React, { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import {
  Container,
  Button,
  AppBar,
  Box,
  Typography,
  Switch,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const headers = ["Products", "Services", "Contacts", "Login"];
  const navigate = useNavigate();
  const { changeTheme, isDark } = useContext(ColorModeContext);

  return (
    <AppBar
      position="static"
      sx={{ background: isDark ? "black" : "white", boxShadow: 0 }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Typography
            align="left"
            fontSize={34}
            sx={{ fontWeight: 900, color: isDark ? "white" : "black" }}
          >
            team.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Switch checked={isDark} onChange={() => changeTheme()} />
            {headers.map((header) => (
              <Button
                onClick={() => {
                  navigate("/" + header);
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textTransform: "capitalize",
                    color: "grey",
                    textDecoration: "underline",
                  }}
                  color={"black"}
                >
                  {header}
                </Typography>
              </Button>
            ))}
            <Button
              variant="outlined"
              sx={{ background: "#cce0ff", height: 60 }}
            >
              Get Access
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Header;
