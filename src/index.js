import React from "react";
import ReactDOM from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);