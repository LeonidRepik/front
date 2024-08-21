import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import FlightSummary from './components/FlightSummary/FlightSummary.jsx';

import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import "../SASS/main.scss";
import axios from "axios";
axios.defaults.baseURL = "https://crewctrl-29196d49230a.herokuapp.com";
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer position="top-center" />
    <App />
  </QueryClientProvider>
);
