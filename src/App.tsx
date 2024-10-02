import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './app.css';
import { MainPage, UserInfoPage, UsersPage } from './pages';
import { PlayListsPage } from './pages/PlayListsPage/PlayListsPage';
import { PlaylistInfoPage } from './pages/PlaylistInfoPage/PlaylistInfoPage';

export const App = () => {
	return (
		<BrowserRouter>
			<div className='header'>_</div>

			<div className='section'>
				<nav className='nav'>
					<NavLink to={'/'}>Главная</NavLink>
					<NavLink to={'/users'}>Пользователи</NavLink>
					<NavLink to={'/playlists'}>Плейлисты</NavLink>
				</nav>

				<main className='content'>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/users' element={<UsersPage />} />
						<Route path='/users/:userId' element={<UserInfoPage />} />
						<Route path='/playlists' element={<PlayListsPage />} />
						<Route
							path='/playlists/:playlistId'
							element={<PlaylistInfoPage />}
						/>
					</Routes>
				</main>
			</div>

			<div className='footer'>
				<a href='https://skillbox.ru/code/'>https://skillbox.ru/</a>
			</div>
		</BrowserRouter>
	);
};
