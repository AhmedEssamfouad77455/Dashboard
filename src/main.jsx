import React, {  useState } from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import Dashboard from "./Components/Page/dashboard/Dashboard";
import Team from "./Components/Page/Team/Team";
import Contents from "./Components/Page/Contents/Contents";
import Fqa from "./Components/Page/Fqa/Fqa";
import Form from "./Components/Page/Forms/Form";
import Calender from "./Components/Page/Calender/Calender";
import Line from "./Components/Page/Line/Line";
import Pie from "./Components/Page/Pie/Pie";
import Invoices from "./Components/Page/Invoices/Invoices";
import App from './App';
import Goagraphy from './Components/Page/Goagraphy/Goagraphy';
import BarChart from './Components/Page/Bar/BarChart';

const Root = () => {
  const themeStorage = window.localStorage.getItem("mode");
  const [mode, setMode] = React.useState(themeStorage || "light");

  
  const theme = React.useMemo(() => createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
        }
        : {
        }),
      },

    }), [mode]);
    const toggleMode = () => {
      const newMode = mode === "light" ? "dark" : "light";
      setMode(newMode);
      window.localStorage.setItem("mode", newMode);
    };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App toggleMode={toggleMode} />}>
        <Route index element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/fqa" element={<Fqa />} />
        <Route path="/form" element={<Form />} />
        <Route path="/calendar" element={<Calender />} />
        <Route path="/bar" element={<BarChart />} />
        <Route path="/line" element={<Line />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path='/geography' element={<Goagraphy/>} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
