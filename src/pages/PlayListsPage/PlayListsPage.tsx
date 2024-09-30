import { Link } from 'react-router-dom';
import { PLAYLISTS } from '../../data';
import './PlayListsPage.css';

export const PlayListsPage = () => {
	return (
		<div className='PlayListsPage'>
			<h2>PlayListsPage</h2>

			<ul className='playlist-lis'>
				{PLAYLISTS.filter(playlist => playlist.songs.length !== 0).map(
					playlist => (
						<li className='playlist-item' key={playlist.id}>
							<Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
						</li>
					)
				)}
			</ul>
		</div>
	);
};
