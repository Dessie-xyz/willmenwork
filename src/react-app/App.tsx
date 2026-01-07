// src/App.tsx

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"

function App() {

	return (
		<>
			<div style={{backgroundColor:"GoldenRod", borderRadius:"10px", position:"fixed",top:"5px",right:"0px",left:"0px"}}>
        	    <h1 style={{color:"black", padding:"5px"}}>This website is INDEV. Please check back later.</h1>
        	</div>
			<div>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About />}/>
				</Routes>
			</div>
			<div>
				<p className="read-the-docs">Made by the Submissive and Breedable Foundation.</p>
			</div>
		</>
	);
}

export default App;
