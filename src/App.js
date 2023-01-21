import React from "react";
import { Routes, Route } from "react-router-dom";
import Addtrans from "./TrackerComponents/AddTransition/Addtrans";
import GlobalProvider from "./TrackerComponents/GlobalContext/Context";
import Expensebox from "./TrackerComponents/Income&Expense/Expensebox";
import Incomebox from "./TrackerComponents/Income&Expense/Incomebox";
import Developer from "./TrackerComponents/Mainpagefolder/Developer";

import Mainpage from "./TrackerComponents/Mainpagefolder/Mainpage";
import Starterpage from "./TrackerComponents/StarterFolder/Starterpage";

function App() {
	return (
		<div>
			{/* Route Section */}
			{/* <Starterpage /> */}
			<GlobalProvider>
				<Routes>
					<Route path="/" element={<Starterpage />}></Route>
					<Route path="transition-page" element={<Mainpage />}></Route>
					<Route path="addtransition" element={<Addtrans />}></Route>
					<Route path="incomebox" element={<Incomebox />}></Route>
					<Route path="expensebox" element={<Expensebox />}></Route>
					<Route path="developer-contact" element={<Developer />}></Route>
				</Routes>
			</GlobalProvider>
		</div>
	);
}

export default App;
