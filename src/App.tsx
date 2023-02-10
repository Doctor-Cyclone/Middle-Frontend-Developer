import * as React from "react";
import { FunctionComponent } from "react";
import data from './data';
import './index.scss';

const App: FunctionComponent = () => {
	let currentSoundId = 0;
	const audio = new Audio();
	const audioData = [
		{
			id: 1,
			audio: new Audio('./sounds/summer.mp3'),
			playing: false
		},
		{
			id: 2,
			audio: new Audio('./sounds/rain.mp3'),
			playing: false
		},
		{
			id: 3,
			audio: new Audio('./sounds/winter.mp3'),
			playing: false
		}
	];

	const changeSoundVolume = (event: Event) => {
		audioData[currentSoundId].audio.volume = +(event.target as HTMLInputElement).value / 100;
	}

	const playSound = (id: number) => {
		for (let i = 0; i < audioData.length; i++) {
			if (audioData[i].playing && id === audioData[i].id) {
				audioData[i].playing = false;
				audioData[i].audio.pause();

				return
			} else {
				audioData[i].playing = false;
				audioData[i].audio.pause();
			}
		}

		switch (id) {
			case 1:
				audioData[id - 1].audio.play();
				audioData[id - 1].playing = true;
				currentSoundId = id - 1;
				break;
			case 2:
				audioData[id - 1].audio.play();
				audioData[id - 1].playing = true;
				currentSoundId = id - 1;
				break;
			case 3:
				audioData[id - 1].audio.play();
				audioData[id - 1].playing = true;
				currentSoundId = id - 1
				break;
		}
	}

	return (
		<div className="wrapper">
			<h1 className="title">Weather sounds</h1>
			<ul className="sounds">
				{data.map(sound => {
					return (
						<li className="sounds__item" key={sound.id} style={{backgroundImage: `url('${sound.srcBackground}')`}} onClick={() => playSound(sound.id)}>
							<img className="sounds__icon" src={sound.srcIcon} alt={sound.name} />
						</li>
					)
				})}
			</ul>
			<input className="sounds__volume" type="range" onChange={() => changeSoundVolume(event)}/>
			<img className="wrapper__bg" src="./images/rainy-bg.jpg" alt="bg"/>
		</div>
	)
}

export default App;