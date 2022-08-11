import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Button, Footer, Theme } from "react-daisyui";
import Login from "./Login";
import StyledFooter from "./components/StyledFooter";
import StyledNavbar from "./components/StyledNavbar";
import StyledTable from "./components/StyledTable";
import { Route, Routes } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Theme dataTheme="light">
				<StyledNavbar />

				<div className="container mx-auto px-4 mb-14">
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/login" element={<Login />} />
						<Route path="/history" element={<StyledTable />} />
					</Routes>
				</div>
				<StyledFooter />
			</Theme>
		</>
		// <div className="App">
		// 	<div>
		// 		<a href="https://vitejs.dev" target="_blank">
		// 			<img src="/vite.svg" className="logo" alt="Vite logo" />
		// 		</a>
		// 		<a href="https://reactjs.org" target="_blank">
		// 			<img src={reactLogo} className="logo react" alt="React logo" />
		// 		</a>
		// 	</div>
		// 	<h1>Vite + React</h1>
		// 	<div className="card">
		// 		<button onClick={() => setCount((count) => count + 1)}>
		// 			count is {count}
		// 		</button>
		// 		<p>
		// 			Edit <code>src/App.jsx</code> and save to test HMR
		// 		</p>
		// 	</div>
		// 	<p className="read-the-docs">
		// 		Click on the Vite and React logos to learn more
		// 	</p>
		// </div>
	);
}

export default App;
