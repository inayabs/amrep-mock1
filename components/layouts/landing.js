import Nav from "../nav/nav"
import Footer from "../footer/footer"
import { SparklesIcon } from "@heroicons/react/outline"
import Link from "next/dist/client/link"
import Image from "next/image"

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
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto">
          <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 sm:pt-16  lg:py-16 lg:pr-0 xl:py-20 ">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-base-content sm:text-5xl">
                  <span className="block">Real Estate Photo Post Processing </span>
                  <span className="block">Based in Virginia Beach, VA</span>
                </h2>
                <p className="mt-4 text-2xl sm:text-2xl leading-6 text-base-content">
                New clients enjoy 1 Week of Free Processing as a trial before you commit!
                </p>
                <a
                  href="#"
                  className="mt-8 bg-indigo-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center font-medium text-white hover:bg-indigo-700"
                >
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 relative">
              <iframe
                src="https://player.vimeo.com/video/659875234"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen=""
                videotitle="test"
                data-ready="true"
                className="w-full h-full aspect-video bg-white dark:bg-gray-800"

              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
      <div className="relative">
        <div className="lg:mx-auto  lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
                  What We Do
                </h2>
                <p className="mt-4 text-lg text-base-content">
                  Designed specifically to meet the needs of real estate and
                  architectural photographers, our team of editors offer
                  excellent edits, unbeatable prices, and fast turnaround.
                </p>
                <div className="mt-6">
                  <Link href="/showcase">
                    <a className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700">
                      Samples
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-base-content">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                        width="25"
                        height="25"
                      />
                    </div>
                    <div className="text-base font-medium text-base-content">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/136a7d52-b759-46b0-914e-1500bff0c997/Grid-EditingServices.jpg?format=750w"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
                  What We Offer
                </h2>
                <p className="mt-4 text-lg text-base-content">
                  Advanced real estate photo processing, virtual twilight
                  conversions, virtual staging, virtual decluttering, and more.
                  Whether a standard service or a custom request, we can
                  accommodate virtually any client need.
                </p>
                <div className="mt-6">
                  <Link href="/photo-editing">
                    <a className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700">
                      Services and Pricing
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/136a7d52-b759-46b0-914e-1500bff0c997/Grid-EditingServices.jpg?format=750w"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
                  How We Do It
                </h2>
                <p className="mt-4 text-lg text-base-content">
                  Co-located in Virginia Beach, VA and our remote office in the
                  Philippines, we use a team of highly-trained, career-level
                  photo editors to ensure consistency and responsiveness to our
                  clients. Give us a try to see the difference that we can make
                  for your workflow.
                </p>
                <div className="mt-6">
                  <Link href="/contact">
                    <a className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-base-content">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                        width="25"
                        height="25"
                      />
                    </div>
                    <div className="text-base font-medium text-base-content">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/136a7d52-b759-46b0-914e-1500bff0c997/Grid-EditingServices.jpg?format=750w"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   );
}
 
