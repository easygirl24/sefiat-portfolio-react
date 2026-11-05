import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-extrabold sm:text-7xl">
        Creating and turning Ideas into <span className="text-brand"> beautiful digital </span>
        experiences.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Hi, I'm Lawal Sefiat Opeyemi, a frontend developer passionate
        about creating responsive and user-friendly websites.
      </p>

      <Link
        to="/projects"
        className="mt-8 inline-block rounded-xl bg-brand px-6 py-4 font-bold text-white hover:bg-brand-dark"
      >
        Explore my projects →
      </Link>
    </main>
  );
}

export default Home;