
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="mx-auto w-full max-w-sm">
          <img
            src="/images/profile-picture.jpg"
            alt="Portrait of Lawal Sefiat Opeyemi"
            className="aspect-square w-full rounded-3xl border-4 border-white object-cover shadow-playful"
            width="400"
            height="400"
          />
        </div>

        <section>
          <p className="font-semibold uppercase tracking-widest text-brand">
            A little about me
          </p>

          <h1 className="mt-3 text-4xl font-extrabold">
            Hello, I'm Sefiat!
          </h1>

          <p className="mt-5 leading-8 text-gray-600">
            I'm an aspiring frontend developer passionate about
            building responsive, accessible, and user-friendly
            web experiences. I enjoy learning new technologies
            and turning design ideas into functional websites.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            My goal is to keep improving my skills in React,
            JavaScript, and modern frontend development while
            creating useful digital experiences.
          </p>

          <Link
            to="/projects"
            className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            Explore my projects
          </Link>
        </section>
      </div>
    </main>
  );
}

export default About;
