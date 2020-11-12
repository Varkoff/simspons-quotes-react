import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";
import "./components/QuoteCard.css";
function App() {
	return (
		<div className="App">
			<Navbar />
			<QuoteCard
				quote="Shoplifting is a victimless crime, like punching someone in the
						dark."
				character="Nelson Muntz"
				image="https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg"
			/>
			<QuoteCard
				quote="Oh Yeah!"
				character="Duffman"
				image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709"
			/>
		</div>
	);
}

export default App;
