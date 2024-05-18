import React from 'react'

interface WorkArea {
  icon: React.ReactElement // SVG icon
  title: string
  description: string
}

interface OurWorkAreasProps {
  heading: string
  subheading: string
  description: string
}

const OurWorkAreas: React.FC<OurWorkAreasProps> = ({ heading, subheading, description }) => {
  return (
    <section id="what-we-do">
      <div className="py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-base font-semibold uppercase tracking-wide text-yellow-600">
            {heading}
          </h1>
          <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {subheading}
          </h2>
          <h2 className="mx-auto mt-5 mb-10 max-w-xl text-xl text-gray-500">{description}</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-md bg-white p-8 shadow-md">
              <span className="inline-flex items-center justify-center rounded-md bg-yellow-500 p-3 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </span>
              <h3 className="mt-7 text-lg font-semibold">Economy</h3>
              <p className="mt-2 text-justify text-base font-normal tracking-tighter text-gray-500">
                Enable Auroville with modern technologies to realise higher goals of creating a new
                kind of economy while providing efficient, transparent and accountable systems for
                the present day reality where money plays a vital role.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-md bg-white p-8 shadow-md">
              <span className="inline-flex items-center justify-center rounded-md bg-yellow-500 p-3 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0H24V24H0z"></path>
                  <path d="M15 3c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-2v2h4c.552 0 1 .448 1 1v3h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-2H8v2h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-3c0-.552.448-1 1-1h4V9H9c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"></path>
                </svg>
              </span>
              <h3 className="mt-7 text-lg font-semibold">Management</h3>
              <p className="mt-2 text-justify text-base font-normal tracking-tighter text-gray-500">
                Transparent and efficient management systems for the community to work efficiently
                towards the Dream.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-md bg-white p-8 shadow-md">
              <span className="inline-flex items-center justify-center rounded-md bg-yellow-500 p-3 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                </svg>
              </span>
              <h3 className="mt-7 text-lg font-semibold">Communication</h3>
              <p className="mt-2 text-justify text-base font-normal tracking-tighter text-gray-500">
                Communication tools to effectively share information both within the community and
                to the world at large.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-md bg-white p-8 shadow-md">
              <span className="inline-flex items-center justify-center rounded-md bg-yellow-500 p-3 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </span>
              <h3 className="mt-7 text-lg font-semibold">Education</h3>
              <p className="mt-2 text-justify text-base font-normal tracking-tighter text-gray-500">
                Develop online platforms enabling sharing of knowledge between Auroville and the
                larger world.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-md bg-white p-8 shadow-md">
              <span className="inline-flex items-center justify-center rounded-md bg-yellow-500 p-3 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mt-7 text-lg font-semibold">IT Infrastructure</h3>
              <p className="mt-2 text-justify text-base font-normal tracking-tighter text-gray-500">
                Software and hardware infrastructure for Auroville apps.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-md bg-white p-8 shadow-md">
              <span className="inline-flex items-center justify-center rounded-md bg-yellow-500 p-3 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mt-7 text-lg font-semibold">Sustainability</h3>
              <p className="mt-2 text-justify text-base font-normal tracking-tighter text-gray-500">
                Sustainability in Food. Water. Shelter.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-md bg-white p-8 shadow-md">
              <span className="inline-flex items-center justify-center rounded-md bg-yellow-500 p-3 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mt-7 text-lg font-semibold">Research & Innovation</h3>
              <p className="mt-2 text-justify text-base font-normal tracking-tighter text-gray-500">
                Going beyond what is comfortable and venturing into the unknown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWorkAreas
