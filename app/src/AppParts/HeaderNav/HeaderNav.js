import { NavLink } from 'react-router-dom'
import './HeaderNav.css'
import SearchForm from './SearchForm'

export default function HeaderNav() {




    return (
        <div>
            <ul className='navContainer'>
                <li className='navLink'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to='/posts'>Posts</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to='/users'>Users</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to='/albums'>Albums</NavLink>
                </li>
                <li className='navLink'>
                    <SearchForm />
                </li>
            </ul>

        </div>

    )
}