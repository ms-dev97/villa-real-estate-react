import Home from "./pages/Home";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import PropertyDetails from "./pages/PropertyDetails";
import ContactUs from "./pages/ContactUs";
import Properties from "./pages/Properties";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/property-details" element={<PropertyDetails />} />
						<Route path="/contact-us" element={<ContactUs />} />
						<Route path="/properties" element={<Properties />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
