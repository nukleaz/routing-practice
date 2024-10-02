import { Link, useParams } from 'react-router-dom';
import { PLAYLISTS } from '../../data';

export const PlaylistInfoPage = () => {
	const { playlistId } = useParams();
	const playlist = PLAYLISTS[Number(playlistId)];

	return (
		<div className='playlist-page playlist'>
			<h2>PlayListInfoPage</h2>
			{playlist.songs.length === 0 ? (
				<p>Плейлист пустой</p>
			) : (
				<>
					<div className='playlist-descr'>
						<Link to={'/playlists'}>
							<p>Жанр: {playlist.genre}</p>
						</Link>
						<p>Название: {playlist.name}</p>
					</div>
					<ul className='songs-list'>
						{playlist.songs.map((song, index) => (
							<li className='song' key={index}>
								{song}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};
