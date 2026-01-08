// src/App.tsx

import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import NotFound from "./pages/NotFound.tsx"
import Collections from "./pages/Collections.tsx"

function App() {

	return (
		<>
			<div style={{borderRadius:"10px", position:"fixed",top:"5px",right:"0px",left:"15px"}}>
        	    <h1 style={{textAlign:"left"}}><Link to="/"><u><b>Weak Submissive Men</b></u></Link> (INDEV)</h1>
        	</div>
			<div style={{paddingTop:"90px", paddingBottom:"15px"}}>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About />}/>
					<Route path="/collections" element={<Collections />}/>

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
