import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <nav className="nav">
        <h1>Memory Lane</h1>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
        </div>
      </nav>

      <section className="hero">
        <h2>Developer Journal</h2>

        <p>
          Memory Lane is a small blog project focused on documenting things
          I’ve learned throughout my web development program studies.
        </p>

        <Link href="/posts" className="button">
          Read Posts
        </Link>
      </section>
    </main>
  );
}