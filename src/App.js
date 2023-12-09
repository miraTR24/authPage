
import { BrowserRouter ,Navigate, Route,Routes} from "react-router-dom";
//import Home from "./pages/Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";

import Layout from "./scenes/layout";
//import PageNotFound from "./scenes/pageNotFound";
import LoginPage from "./scenes/loginPage";
import Dashboard from "./scenes/dashboard";






function App() {


  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
     <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
          <Route>
            <Route path="/" element={<LoginPage />} />

          </Route>
          <Route element={<Layout />}>

            <Route path="/Dashboard" element={<Dashboard />} />



          </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


