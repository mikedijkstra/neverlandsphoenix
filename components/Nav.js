import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ href, children, ...props }) => {
  const router = useRouter()
  const active = router.pathname === href
  return (
    <Link href={href}>
      <a
        className={`block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
          active ? ' bg-gray-200' : ''
        }`}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
      <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <Link href="/">
          <a className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            Neverlands Phoenix
          </a>
        </Link>
        <button
          className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          onClick={() => setOpen(!isOpen)}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            )}
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } flex-grow border-gray-100 border-b-2 md:border-b-0 md:block px-4 pb-4 md:pb-0 md:overflow-y-auto`}
      >
        <NavLink href="/getting-started">Getting Started</NavLink>
        <NavLink href="/library">Library</NavLink>
        <NavLink href="/guides">Guides</NavLink>
        <NavLink href="https://discord.gg/8maTyRF" target="_blank">
          Discord
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
