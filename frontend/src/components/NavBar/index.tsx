import Logo from '../../assets/img/ds-dark.svg';

export default function NavBar() {
  return (
      <nav className='navbar navbar-light bg-light container'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <img src={Logo} alt="Logo SDS" width="140"/>
          </a>
        </div>
      </nav>
  )
}
