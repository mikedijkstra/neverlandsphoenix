import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
}

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (breadcrumbs.length < 2) {
    return null
  }

  return (
    <nav className="flex flex-wrap text-base pb-3 mb-2 border-gray-100 border-b-2">
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <span key={i} className="flex items-center">
            <Link href={breadcrumb.href}>
              <a className="hover:text-gray-900 capitalize">
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </a>
            </Link>
            {i === breadcrumbs.length - 1 ? null : (
              <span className="mx-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
