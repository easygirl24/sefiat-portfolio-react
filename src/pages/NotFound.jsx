import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <p className="text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">Page not found</h1>
      <p className="mt-4 text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-brand px-6 py-3 font-bold text-white"
      >
        Back home
      </Link>
    </main>
  );
}

export default NotFound;