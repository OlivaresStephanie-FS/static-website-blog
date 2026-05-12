import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
	const posts = getAllPosts();

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
				<h2>Posts</h2>

				<div className="posts-list">
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={`/posts/${post.slug}`}
							className="post-card">
							<p className="post-date">{post.date}</p>
							<h3>{post.title}</h3>
							<p>Read journal entry →</p>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
