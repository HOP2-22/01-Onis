import React, { useState } from "react";
import { Banner } from "./Banner";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { yellow, green } from "@mui/material/colors";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import {
  Code,
  GitHub,
  YouTube,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
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
  Tooltip,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState("dark");
  const [checked, setChecked] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: "#66bb6a",
        light: "#81c784",
        dark: "#388e3c",
      },
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
                <Code className="icon" />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ mx: 1 }}
                />
                <Typography
                  variant="h4"
                  color="inherit"
                  component="div"
                  sx={{ userSelect: "none" }}
                  className="Onis"
                >
                  S.Onis
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ mx: 1 }}
                />
              </Box>
              <Divider orientation="vertical" variant="middle" flexItem />
              <ThemeProvider theme={themeButton}>
                <Tooltip title={theme} placement="left">
                  <CustomCheckbox
                    {...label}
                    icon={<LightMode />}
                    checkedIcon={<DarkMode />}
                    onChange={handleChange}
                    checked={checked}
                    inputProps={{ "aria-label": "controlled" }}
                    disableRipple
                  />
                </Tooltip>
              </ThemeProvider>
            </Toolbar>
          </Container>
        </AppBar>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
          <Container maxWidth="sm" sx={{ pt: 10 }}>
            <Box height="400px" className="Model">
              <Typography
                variant="h4"
                color="white"
                sx={{ mt: 28 }}
                position="absolute"
              >
                Onis is a human
              </Typography>
              <Banner />
            </Box>

            <Typography
              variant="h2"
              color="textPrimary"
              textAlign="center"
              sx={{ my: 5 }}
              className="Dora"
            >
              Hola, soy dora
            </Typography>

            <Box display="flex">
              <Avatar src="onisMidjourney.png" sx={{ width: 64, height: 64 }} />
              <Divider orientation="vertical" flexItem sx={{ ml: 1 }} />
              <Box>
                <Typography
                  variant="h4"
                  color="textPrimary"
                  className="MyName"
                  sx={{ ml: 1 }}
                >
                  Onis Soyolerdene
                </Typography>
                <Divider />
                <Typography variant="body1" color="grey.500" sx={{ ml: 1 }}>
                  Pinecone academy student
                </Typography>
              </Box>
            </Box>

            <Stack direction="row" spacing={1} sx={{ mt: 5 }}>
              <Chip label="Smartest person" />
              <Chip label="Bruh" />
              <Chip label="Nyoho" />
            </Stack>

            <Typography
              variant="h3"
              color="textPrimary"
              sx={{ mt: 5 }}
              className="handWrite"
            >
              About me (no one asked)...
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h5"
              color="textPrimary"
              textAlign="justify"
              className="handWrite"
            >
              ㅤOnis is smartest person who lives in this earth right now. He is
              an existance that surpassed the humanity so dont behave bad in
              front of him or you will die because his litteral GOD. He was in
              Japan for 7 years, and 2 years in Canada. Right now lives in
              Mongolia because he is Mongolian. So he can speak 3 language witch
              it makes him more smarter.
            </Typography>

            <Typography
              variant="h3"
              color="textPrimary"
              sx={{ mt: 5 }}
              className="handWrite"
            >
              ChatGPT wrote this for me...
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h5"
              color="textPrimary"
              textAlign="justify"
              className="handWrite"
            >
              ㅤHello, my name is Onis Soyolerdene and I was born in the year
              2009. I am an avid gamer who enjoys spending my free time playing
              games. Whether it's on my computer, console or mobile device, I am
              always looking for new and exciting games to play. I am a
              determined and dedicated player who loves the thrill of
              competition and the satisfaction of beating my high scores. Gaming
              is not just a hobby for me, it's a passion that I hope to continue
              pursuing for many years to come.
            </Typography>

            <Typography
              variant="h3"
              color="textPrimary"
              sx={{ mt: 5 }}
              className="handWrite"
            >
              I ♥...
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h5"
              color="textPrimary"
              textAlign="justify"
              className="handWrite"
            >
              ㅤYoutube, Valorant, Manga
            </Typography>

            <Typography
              variant="h3"
              color="textPrimary"
              sx={{ mt: 5 }}
              className="handWrite"
            >
              I HATE...
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h5"
              color="textPrimary"
              textAlign="justify"
              className="handWrite"
            >
              ㅤAmong Us, Fortnite, School
            </Typography>

            <Typography
              variant="h3"
              color="textPrimary"
              sx={{ mt: 5 }}
              className="handWrite"
            >
              Socials...
            </Typography>
            <Divider variant="middle" />
            <Box
              display="flex"
              alignItems="center"
              sx={{ my: 2 }}
              className="socialLinks"
            >
              <GitHub color="primary" sx={{ mr: 1 }} />
              <Link href="https://github.com/WhyOni" underline="hover">
                GitHub
              </Link>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ my: 2 }}
              className="socialLinks"
            >
              <YouTube color="primary" sx={{ mr: 1 }} />
              <Link
                href="https://www.youtube.com/watch?v=FmLzfYBHfuY"
                underline="hover"
              >
                Youtube
              </Link>
            </Box>

            <Typography
              variant="h3"
              color="textPrimary"
              sx={{ mt: 5 }}
              className="handWrite"
            >
              Works...
            </Typography>
            <Divider variant="middle" />
            <Card sx={{ width: "50%", my: 2 }}>
              <CardActionArea href="https://boginoo-onis.web.app/">
                <CardMedia
                  component="img"
                  height="140"
                  image="Boginoo.png"
                  alt="Boginoo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Boginoo
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    Boginoo is a url shortning website made by Onis, and I like
                    to eat donut because it taste good.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Deploy Date: Feb 1, 2023 7:16 PM
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Typography
              variant="body1"
              color="textSecondary"
              textAlign="center"
              sx={{ pb: 3 }}
            >
              ඞ Among Us is Unfunny
            </Typography>
          </Container>
        </motion.div>
      </ThemeProvider>
    </Box>
  );
}

export default App;
