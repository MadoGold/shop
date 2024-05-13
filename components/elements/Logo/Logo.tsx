import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    {/* <img className='logo__img' src='/img/Logo.png' alt='Logo' /> */}
    <div className='logo__img'>
      <span>HEAVEN</span>
    </div>
  </Link>
)

export default Logo
