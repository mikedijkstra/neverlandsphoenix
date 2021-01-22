import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neverlands Phoenix</title>
      </Head>

      <main>
        <div class="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Welcome to Neverlands Phoenix!
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium">
            This is a player run site for the{' '}
            <a
              href="http://neverlandsphoenix.org/"
              className="text-gray-900 font-bold"
            >
              Neverlands Phoenix Ultima Online Shard
            </a>
            .
          </p>
        </div>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/2">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Getting Started
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Learn how to download Ultima Online and get started
                      playing Neverlands Phoenix.
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href="/getting-started"
                      >
                        Get started
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-4 md:w-1/2">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Learn
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Learn about the commands, rules, skills and items within
                      Neverlands Phoenix.
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href="/library"
                      >
                        View library
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-4 md:w-1/2">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Guides
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Discover guides written by players on treasure hunting,
                      crafting and more.
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href="/guides"
                      >
                        Read guides
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-4 md:w-1/2">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Discord
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Join us on Discord to ask questions, contact staff and
                      barter for items.
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href="https://discord.gg/8maTyRF"
                      >
                        Join Discord
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
