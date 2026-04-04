export default async function Home() {
  return (
    <>
      <div className="relative w-screen h-dvh overflow-hidden ">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/backvideo.webm" type="video/webm" />
        </video> */}

        <iframe
          src="https://player.vimeo.com/video/875686258?background=1&autoplay=1&loop=1&muted=1"
          className="
      absolute top-1/2 left-1/2
      w-[177.78vh] h-[100vh]
      md:w-[100vw] md:h-[56.25vw]
      -translate-x-1/2 -translate-y-1/2
      pointer-events-none
    "
          allow="autoplay; fullscreen"
        />

        {/* затемнение */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        {/* текст поверх */}
        {/* <div className="absolute z-10 flex flex-col justify-end w-full h-full p-10 text-white">
          <h1 className="text-4xl font-bold uppercase">ввв</h1>
          <p className="text-xl">вв</p>
        </div> */}
      </div>
      {/* <Section title="Choreo Portfolio">
        <div className="mt-12 text-lg text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 transition rounded-full bg-primary hover:bg-opacity-90"
          >
            View all →
          </Link>
        </div>
      </Section> */}
    </>
  );
}
