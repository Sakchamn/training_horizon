import { NAV_LINKS } from '@/const'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="flexBetween max container px-3 relative py-2">
      <ul className="hidden gap-12 lg:flex py-1">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-14
          text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="sm:flexEnd -mt-1 flex items-center gap-12 ">
      <Link href={"/"} className="regular-14 max-sm:hidden text-gray-50 hover:font-bold">
        Join as Teacher
        </Link>
        <Link href={"/login"} className="regular-14 max-sm:hidden text-gray-50 transistion-all hover:font-bold">
        Log In
        </Link>
        
        <Button type='button' link='/signup' title='SignUp' variant='btn_yellow btn_small' fontSize='bold-12'/>
      </div>
    </nav>
  )
}

export default Navbar