import React, { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { yellow, green } from "@mui/material/colors";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { Egg, GitHub, YouTube, LightMode, DarkMode } from "@mui/icons-material";
import {
  Container,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Avatar,
  Divider,
  Link,
  Checkbox,
  Chip,
  Stack,
} from "@mui/material";

function App() {
  const [theme, setTheme] = useState("dark");
  const [checked, setChecked] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.primary,
    "&.Mui-checked": {
      color: theme.status.secondary,
    },
  }));

  const themeButton = createTheme({
    status: {
      primary: yellow[500],
      secondary: green[500],
    },
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleChange = (event) => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100vw",
        backgroundColor: theme === "dark" ? "#121212" : "#fff",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed">
          <Container maxWidth="md">
            <Toolbar variant="dense">
              <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                <Egg className="egg" />

                <Typography
                  variant="h6"
                  color="inherit"
                  component="div"
                  sx={{ ml: 1 }}
                >
                  S.Onis
                </Typography>
              </Box>
              <ThemeProvider theme={themeButton}>
                <CustomCheckbox
                  {...label}
                  icon={<LightMode />}
                  checkedIcon={<DarkMode />}
                  onChange={handleChange}
                  checked={checked}
                  inputProps={{ "aria-label": "controlled" }}
                  disableRipple
                />
              </ThemeProvider>
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth="sm">
          <img
            src="galaxy-brain.gif"
            style={{ width: "100%", marginTop: 100 }}
            alt="you didn't have to cut me off"
          />

          <Typography
            variant="h2"
            color="textPrimary"
            textAlign="center"
            sx={{ my: 5 }}
          >
            Hola, soy dora
          </Typography>

          <Box display="flex">
            <Avatar src="onis.jpeg" sx={{ width: 64, height: 64, mr: 2 }} />
            <Box>
              <Typography variant="h4" color="textPrimary">
                Onis Soyolerdene
              </Typography>
              <Typography variant="body1" color="grey.500">
                Pinecone asademy student
              </Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={1} sx={{ mt: 5 }}>
            <Chip label="Smartest person" />
            <Chip label="Bruh" />
            <Chip label="Nyoho" />
          </Stack>

          <Typography variant="h5" color="textPrimary" sx={{ mt: 5 }}>
            About me (no one asked)
          </Typography>
          <Divider variant="middle" />
          <Typography variant="body1" color="textPrimary" textAlign="justify">
            ㅤOnis is smartest person who lives in this earth right now. He is
            an existance that surpassed the humanity so dont behave bad in front
            of him or you will die because his litteral GOD. He was in Japan for
            7 years, and 2 years in Canada. Right now lives in Mongolia because
            he is Mongolian. So he can speak 3 language witch it makes him more
            smarter.
          </Typography>
          <Typography variant="h5" color="textPrimary" sx={{ mt: 5 }}>
            ChatGPT write this for me
          </Typography>
          <Divider variant="middle" />
          <Typography variant="body1" color="textPrimary" textAlign="justify">
            ㅤHello, my name is Onis Soyolerdene and I was born in the year
            2009. I am an avid gamer who enjoys spending my free time playing
            games. Whether it's on my computer, console or mobile device, I am
            always looking for new and exciting games to play. I am a determined
            and dedicated player who loves the thrill of competition and the
            satisfaction of beating my high scores. Gaming is not just a hobby
            for me, it's a passion that I hope to continue pursuing for many
            years to come.
          </Typography>
          <Typography variant="h5" color="textPrimary" sx={{ mt: 5 }}>
            I ♥
          </Typography>
          <Divider variant="middle" />
          <Typography variant="body1" color="textPrimary" textAlign="justify">
            ㅤMinecraft, Valorant, Manga
          </Typography>
          <Typography variant="h5" color="textPrimary" sx={{ mt: 5 }}>
            I HATE
          </Typography>
          <Divider variant="middle" />
          <Typography variant="body1" color="textPrimary" textAlign="justify">
            ㅤAmong Us, Fortnite, School
          </Typography>
          <img
            src="angre.jpeg"
            alt="angry"
            style={{ width: "100%", marginTop: 50 }}
          />
          <Typography variant="h5" color="textPrimary" sx={{ mt: 5 }}>
            Socials
          </Typography>
          <Divider variant="middle" />
          <Box display="flex" alignItems="center" sx={{ my: 2 }}>
            <GitHub color="primary" sx={{ mr: 1 }} />
            <Link href="https://github.com/WhyOni" underline="hover">
              GitHub
            </Link>
          </Box>
          <Box display="flex" alignItems="center" sx={{ my: 2 }}>
            <YouTube color="primary" sx={{ mr: 1 }} />
            <Link
              href="https://www.youtube.com/watch?v=FmLzfYBHfuY"
              underline="hover"
            >
              Youtube
            </Link>
          </Box>
          <Typography
            variant="body1"
            color="textSecondary"
            textAlign="center"
            sx={{ pb: 3 }}
          >
            ඞ Among Us is Unfunny
          </Typography>
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export default App;
