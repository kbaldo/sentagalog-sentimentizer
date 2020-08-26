import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/shared/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const SetDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        light: "#8e82ff",
        main: "#5755d9",
        dark: "#082ca6",
        contrastText: "#fff",
      },
      secondary: {
        light: "#f15d75",
        main: "#ba274a",
        dark: "#840023",
        contrastText: "#fff",
      },
      warning: {
        light: "#ffbd5c",
        main: "#ed8c2c",
        dark: "#b55e00",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router path="/">
          <NavigationBar darkMode={darkMode} setDarkMode={SetDarkMode}/>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(routerProps) => <Home routerProps={routerProps} />}
            />
            <Route
              exact
              path={"/about"}
              render={(routerProps) => <About routerProps={routerProps} />}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
