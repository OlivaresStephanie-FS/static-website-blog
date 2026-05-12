import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function PostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const paragraphs = post.content
		.trim()
		.split("\n\n")
		.filter((paragraph) => paragraph.trim() !== "");

	return (
		<main className="home">
			<nav className="nav">
				<h1>Memory Lane</h1>

				<div className="nav-links">
					<Link href="/">Home</Link>
					<Link href="/posts">Posts</Link>
				</div>
			</nav>

			<article className="post-detail">
				<Link href="/posts" className="back-link">
					← Back to all posts
				</Link>

				<p className="post-date">{post.date}</p>
				<h2>{post.title}</h2>

				{paragraphs.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</article>
		</main>
	);
}
