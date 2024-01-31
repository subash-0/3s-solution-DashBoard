import React from "react";
import './index.css'
import ReactDOM  from "react-dom";
import App from './App';
import { ContextProvider } from "./contexts/contextProvide";
ReactDOM.render(
<ContextProvider>
<App/>
</ContextProvider>
,document.getElementById('root'));