import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import Navbar from "./components/Navbar.tsx"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Navbar />
        </BrowserRouter>
    </React.StrictMode>
)
