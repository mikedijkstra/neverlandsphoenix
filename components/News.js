import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import { frontMatter as pages } from '../pages/news/*.mdx'

const News = ({ size, layout }) => {
  let sortedPages = pages.sort((a, b) =>
    b.date < a.date ? -1 : b.date > a.date ? 1 : 0
  )

  if (size) sortedPages = sortedPages.slice(0, size)

  const formatPath = (p) => {
    return p.replace(/\.mdx$/, '')
  }

  const formattedDate = (date) => {
    const parsed = parseISO(date)
    return format(parsed, 'MM/dd/yyyy')
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto">
        <div className="-my-8 divide-solid divide-y-2 divide-gray-100">
          {sortedPages.map((page) => (
            <div
              key={page.__resourcePath}
              className={`${
                layout === 'stacked' ? '' : 'md:flex-nowrap'
              } py-8 flex flex-wrap `}
            >
              <div
                className={`${
                  layout === 'stacked' ? '' : 'md:w-64 md:mb-0 '
                } flex-shrink-0 flex flex-col mb-6 `}
              >
                <span className="font-semibold title-font text-gray-700">
                  {page.category}
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  {formattedDate(page.date)}
                </span>
              </div>
              <div
                className={`${
                  layout === 'stacked' ? 'w-full' : 'md:flex-grow'
                }`}
              >
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {page.title}
                </h2>
                <p className="leading-relaxed">{page.excerpt}</p>
                <Link href={formatPath(page.__resourcePath)}>
                  <a className="text-indigo-500 inline-flex items-center mt-4">
                    Read the full update
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
