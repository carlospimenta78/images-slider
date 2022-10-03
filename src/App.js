import './App.css';

import logo from './logo.svg';
import { useState } from 'react';

function App() {
	const slides = [
		{ url: 'http://localhost:3000/image-1.jpg', title: 'Beach' },
		{ url: 'http://localhost:3000/image-2.jpg', title: 'Boat' },
		{ url: 'http://localhost:3000/image-3.jpg', title: 'Forest' },
		{ url: 'http://localhost:3000/image-4.jpg', title: 'City' },
		{ url: 'http://localhost:3000/image-5.jpg', title: 'Italy' }
	];

	const [index, setIndex] = useState(0);

	const previousSlide = () => {
		index === 0 ? setIndex(4) : setIndex(index - 1);
	};

	const nextSlide = () => {
		index === slides.length - 1 ? setIndex(0) : setIndex(index + 1);
	};

	const container = {
		width: '400px',
		display: 'flex',
		justifyContent: 'space-between',
		cursor: 'pointer'
	};

	const goToImage = slideIndex => {
		setIndex(slideIndex);
	};

	return (
		<div>
			<button onClick={previousSlide}>anterior</button>
			<button onClick={nextSlide}>próximo</button>
			<h2>{slides[`${index}`].title}</h2>
			<img width='400px' src={slides[`${index}`].url} />
			<div style={container}>
				{slides.map((slide, slideIndex) => (
					<div key={slideIndex} onClick={() => goToImage(slideIndex)}>
						O
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
