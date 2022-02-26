import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { BlockData } from "./pages/BlockData";

export function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="blockdata" element={<BlockData/>} />
            </Routes>
        </BrowserRouter>
    )
}