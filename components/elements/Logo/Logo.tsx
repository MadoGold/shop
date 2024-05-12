import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo_img' src='/img/logo.svg' alt='Logo' />
  </Link>
)

export default Logo
