// src/App.tsx

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import NotFound from "./pages/NotFound.tsx"

function App() {

	return (
		<>
			<div style={{backgroundColor:"GoldenRod", borderRadius:"20px", position:"fixed",top:"5px",right:"0px",left:"0px"}}>
        	    <h1 style={{color:"black", padding:"5px"}}>This website is INDEV. Please check back later.</h1>
        	</div>
			<div style={{paddingTop:"75px", paddingBottom:"15px"}}>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About />}/>

					{/*Fallback route*/}
					<Route path="*" element={<NotFound />}/>
				</Routes>
			</div>
			<div>
				<p className="read-the-docs">I forgot what I wanted to type here</p>
			</div>
		</>
	);
}

export default App;
