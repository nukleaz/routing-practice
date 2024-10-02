import { ChangeEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PLAYLISTS } from '../../data';
import './PlayListsPage.css';

export const PlayListsPage = () => {
	const [searchGenreParam, setSearchGenreParam] = useSearchParams();
	const [searchPlaylistNameParam, setSearchPlaylistNameParam] =
		useSearchParams();

	const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchGenreParam({
			searchGenre: value.toLowerCase(),
			searchPlaylistName: searchPlaylistName,
		});
	};

	const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchPlaylistNameParam({
			searchPlaylistName: value.toLowerCase(),
			searchGenre: searchGenre,
		});
	};

	const searchGenre = searchGenreParam.get('searchGenre') || '';
	const searchPlaylistName =
		searchPlaylistNameParam.get('searchPlaylistName') || '';

	const filteredPlayLists = PLAYLISTS.filter(
		({ genre, name, songs }) =>
			songs.length !== 0 &&
			genre.toLowerCase().includes(searchGenre) &&
			name.toLowerCase().includes(searchPlaylistName)
	);

	return (
		<div className='PlayListsPage'>
			<h2>PlayListsPage</h2>
			<div className='inputs-wrapper'>
				<label>
					Введите жанр{' '}
					<input
						type='text'
						name='genre'
						value={searchGenre}
						onChange={handleSearchGenre}
					/>
				</label>
				<label>
					Введите название{' '}
					<input
						type='text'
						name='name'
						value={searchPlaylistName}
						onChange={handleSearchName}
					/>
				</label>
			</div>
			<ul className='playlist-lis'>
				{filteredPlayLists.map(playlist => (
					<li className='playlist-item' key={playlist.id}>
						<Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
