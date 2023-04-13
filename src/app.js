import {Routes, Route} from "react-router-dom";


import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Show from "./Pages/Show";
import Faq from "./Pages/Faq";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import Movies from "./Pages/Movies";


export default function App() {

    return(   
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/show" element={<Show/>}/>
            <Route path="/video" element={<Video/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}