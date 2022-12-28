import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const level = router.route.slice(1)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
    const body = document.querySelector('body')

    {
      isOpen ? body.classList.remove('overflow-hidden') : body.classList.add('overflow-hidden')
     }
  }

  const linkClickHandler = () => {
    setIsOpen(prev => false)
    const body = document.querySelector('body')
    body.classList.remove('overflow-hidden')
  }

    console.log(level);
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gray-800'>
      <div className="relative max-w-[1440px] px-5 md:px-10 mx-auto h-16 bg-gray-800 flex items-center justify-between z-40">
        <Link href={`/`}>
          <h1 className='font-bold text-gray-200'>JLPT Tango<span className='text-rose-500 font-notoSansJP'>単語</span></h1>
        </Link>
        <nav className='hidden md:block'>
          <ul className='flex items-center justify-between gap-8'>
            <li className={`${level === 'n5' ? 'text-rose-500 font-medium' : 'text-white'}`}>
              <Link href={`/n5`}>N5</Link>
            </li>
            <li className={`${level === 'n4' ? 'text-rose-500 font-medium' : 'text-white'}`}>
              <Link href={`/n4`}>N4</Link>
            </li>
            <li className={`${level === 'n3' ? 'text-rose-500 font-medium' : 'text-white'}`}>
              <Link href={`/n3`}>N3</Link>
            </li>
            <li className={`${level === 'n2' ? 'text-rose-500 font-medium' : 'text-white'}`}>
              <Link href={`/n2`}>N2</Link>
            </li>
            <li className={`${level === 'n1' ? 'text-rose-500 font-medium' : 'text-white'}`}>
              <Link href={`/n1`}>N1</Link>
            </li>
          </ul>
        </nav>

        <button className='md:hidden text-gray-200' onClick={toggleMenu}>
          {isOpen?
            <HiX size={28}/> :
            <HiMenu size={28}/>
          }
        </button>
      </div>
      <div className={`${isOpen? 'top-16' : '-top-[110vh]'} transition-all duration-700 ease-in-out absolute left-0 right-0 md:hidden bg-gray-900 h-[calc(100vh-4rem)] pt-20 z-10`}>
        <nav className=' max-w-[1440px] mx-auto px-5'>
          <ul className='flex flex-col items-center justify-center gap-6'>
            <li className={`${level === 'n5' ? 'text-rose-500 font-medium' : 'text-white'} p-3 w-full text-xl text-center hover:text-rose-500`} onClick={linkClickHandler}>
              <Link href={`/n5`}>N5</Link>
            </li>
            <li className={`${level === 'n4' ? 'text-rose-500 font-medium' : 'text-white'} p-3 w-full text-xl text-center hover:text-rose-500`} onClick={linkClickHandler}>
              <Link href={`/n4`}>N4</Link>
            </li>
            <li className={`${level === 'n3' ? 'text-rose-500 font-medium' : 'text-white'} p-3 w-full text-xl text-center hover:text-rose-500`} onClick={linkClickHandler}>
              <Link href={`/n3`}>N3</Link>
            </li>
            <li className={`${level === 'n2' ? 'text-rose-500 font-medium' : 'text-white'} p-3 w-full text-xl text-center hover:text-rose-500`} onClick={linkClickHandler}>
              <Link href={`/n2`}>N2</Link>
            </li>
            <li className={`${level === 'n1' ? 'text-rose-500 font-medium' : 'text-white'} p-3 w-full text-xl text-center hover:text-rose-500`} onClick={linkClickHandler}>
              <Link href={`/n1`}>N1</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header