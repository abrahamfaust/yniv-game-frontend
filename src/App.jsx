import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import theme from "./Theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Lobby from "./pages/Lobby";
import SingleGame from "./pages/SingleGame";
import MultipleGame from "./pages/MultipleGame";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="single-game" element={<SingleGame />} />
            <Route path="multiple-game/:id" element={<MultipleGame />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
