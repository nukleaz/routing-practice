import { useParams } from 'react-router-dom';
import { PLAYLISTS } from '../../data';
import './PlaylistInfoPage.css';

export function PlaylistInfoPage() {
	const { playlistId } = useParams();
	const playlist = PLAYLISTS[Number(playlistId)];

	return (
		<div className='playlistInfoPage'>
			<h2>PlayListInfoPage</h2>
			{playlist.songs.length === 0 ? (
				<p>Плейлист пустой</p>
			) : (
				<>
					<div className='playlist-descr'>
						<p>Жанр: {playlist.genre}</p>
						<p>Название: {playlist.name}</p>
					</div>
					<ul className='songs-list'>
						{playlist.songs.map(song => (
							<li className='song'>{song}</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
}
