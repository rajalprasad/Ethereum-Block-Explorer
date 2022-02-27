import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { BlockDataPage } from "./pages/BlockDataPage";

export function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="blockdata" element={<BlockDataPage/>} />
            </Routes>
        </BrowserRouter>
    )
}