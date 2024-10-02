import { ChangeEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { USERS } from '../../data';
import './UsersPage.css';

export const UsersPage = () => {
	const [searchParam, setSearchParam] = useSearchParams();

	const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParam({ searchName: value.toLowerCase() });
	};

	const searchName = searchParam.get('searchName') || '';

	const filteredUsers = USERS.filter(({ fullName }) =>
		fullName.toLowerCase().includes(searchName)
	);

	return (
		<div className='usersPage'>
			<h2>UsersPage</h2>

			<div className='users'>
				<label>
					введите имя{' '}
					<input type='text' value={searchName} onChange={handleSearchName} />
				</label>
				<ul>
					{filteredUsers.map(({ id, fullName }) => (
						<li key={id}>
							<Link to={`/users/${id}`}>{fullName}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
