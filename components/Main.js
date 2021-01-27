import Nav from './Nav.js'
import Breadcrumbs from './Breadcrumbs.js'

const Main = ({ children }) => {
  return (
    <>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <Nav />
        <div className="bg-white w-full md:p-8 text-gray-500 antialiased bg-white js-focus-visible">
          <Breadcrumbs />
          {children}
        </div>
      </div>
    </>
  )
}

export default Main
