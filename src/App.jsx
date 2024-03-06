import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import theme from "./Theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lobby from "./pages/Lobby";
import SingleGame from "./pages/SingleGame";
import MultipleGame from "./pages/MultipleGame";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box } from "@mui/material";

var screenHeight = window.innerHeight;

export default function App() {
  const queryClient = new QueryClient();

  return (
    <Box
      sx={{
        height: screenHeight,
        maxHeight: screenHeight,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<Lobby />} />
              <Route path="single-game" element={<SingleGame />} />
              <Route path="multiple-game/:id" element={<MultipleGame />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </ThemeProvider>
    </Box>
  );
}
