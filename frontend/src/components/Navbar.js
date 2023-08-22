import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to={'/'}>
          <h1>Website</h1>
        </Link>
        <Link to={'/store/shirts'}>
          <h1>Shirts</h1>
        </Link>
        <Link to={'/store/pants'}>
          <h1>Pants</h1>
        </Link>
        <Link to={'/store/hats'}>
          <h1>Hats</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;