import Nav from "../nav/nav"
import Footer from "../footer/footer"

export default function Layout({children}) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative  pb-16 sm:pb-24 lg:pb-32">
        <Nav></Nav>
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-10 min-h-screen" >
            {!children?index():children}
        </main>
      </div>
      <Footer></Footer>
    </div>
    
  )
}

const index = () => {
  return ( 
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">Real Estate Photo Post Processing</span>
              <span className="block text-indigo-600">Based in Virginia Beach, VA</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            New clients enjoy 1 Week of Free Processing as a trial before you commit!
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <p className="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
            <form action="#" method="POST" className="mt-3 sm:flex">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              We care about the protection of your data. Read our
              <a href="#" className="font-medium text-gray-900 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
   );
}
 
