import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type Post = {
	title: string;
	slug: string;
	date: string;
	image?: string;
	content: string;
};

export function getAllPosts(): Post[] {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			title: data.title,
			slug: data.slug || slug,
			date: data.date,
			image: data.image,
			content,
		};
	});
}

export function getPostBySlug(slug: string): Post | undefined {
	const posts = getAllPosts();
	return posts.find((post) => post.slug === slug);
}