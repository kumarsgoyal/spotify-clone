import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromResponse } from './spotify'
import { useStateValue } from "./StateProvider";
import Login from './Login'
import Player from './Player'
import './App.css'

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useStateValue();

	// Run code based in a given condition
	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			console.log(_token);
			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});

			spotify.setAccessToken(_token);
			spotify.getMe().then(user => {
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			});

			spotify.getUserPlaylists().then(playlists => {
				console.log(playlists);
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				});
			});

			spotify.getPlaylist('6baMmGkGG3tivx3LK7DNMj').then(response => {
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discover_weekly: response,
				});
			});

		}

	}, []);

	return (
		<div className="App">
			{ token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
