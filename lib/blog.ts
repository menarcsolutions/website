import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  authorBio: string;
  content: string;
  faqs: { question: string; answer: string }[];
  primaryKeyword: string;
  secondaryKeywords: string[];
}

const blogDirectory = path.join(process.cwd(), "content/blog");

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        readTime: data.readTime || "5 min read",
        category: data.category || "General",
        image: data.image || "",
        author: data.author || "Muthu Kumaran V",
        authorBio: data.authorBio || "",
        content,
        faqs: data.faqs || [],
        primaryKeyword: data.primaryKeyword || "",
        secondaryKeywords: data.secondaryKeywords || [],
      } as BlogPost;
    });

  // Sort posts by date descending
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      readTime: data.readTime || "5 min read",
      category: data.category || "General",
      image: data.image || "",
      author: data.author || "Muthu Kumaran V",
      authorBio: data.authorBio || "",
      content,
      faqs: data.faqs || [],
      primaryKeyword: data.primaryKeyword || "",
      secondaryKeywords: data.secondaryKeywords || [],
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post by slug ${slug}:`, error);
    return null;
  }
}
