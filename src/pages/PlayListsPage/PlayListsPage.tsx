import { PLAYLISTS } from '../../data';
import './PlayListsPage.css';

export function PlayListsPage() {
	return (
		<div className='PlayListsPage'>
			<h2>PlayListsPage</h2>

			<ul className='playlist-lis'>
				{PLAYLISTS.filter(playlist => playlist.songs.length !== 0).map(
					playlist => (
						<li className='playlist-item'>{playlist.name}</li>
					)
				)}
			</ul>
		</div>
	);
}
