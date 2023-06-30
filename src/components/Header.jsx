import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div>
            <Link to = '/'>Emmass Movies</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt/>Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaSignInAlt/>Registrar
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header