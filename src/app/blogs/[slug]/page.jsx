import Image from "next/image";
import Link from "next/link";

// Blog data - you can move this to a separate file or database
const blogData = {
  "marriage-blog": {
    title: "Discover the most beautiful resorts in Asia",
    image: "/marriage1.jpg",
    date: "Sept 6, 2019",
    author: "Admin",
    content: `Full blog content about discovering beautiful resorts in Asia...`,
    description: "Explore the most stunning resort destinations across Asia",
  },
  "birthday-blog": {
    title: "Relax and unwind at top luxury resorts",
    image: "/marriage2.jpg",
    date: "Sept 6, 2019",
    author: "Admin",
    content: `Full blog content about luxury resort experiences...`,
    description: "Find your perfect luxury getaway for ultimate relaxation",
  },
  "meeting-blog": {
    title: "Experience the charm of seaside resorts",
    image: "/marriage3.jpg",
    date: "Sept 6, 2019",
    author: "Admin",
    content: `Full blog content about charming seaside resorts...`,
    description: "Discover coastal gems with breathtaking ocean views",
  },
};

export default function BlogPage({ params }) {
  const blog = blogData[params.slug];

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl text-red-600 font-semibold">
          Blog Not Found
        </h1>
        <Link href="/" className="text-blue-500 underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-16 flex flex-col items-center">
      <div className="w-10/12 md:w-8/12 bg-white shadow-xl rounded-2xl overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <div className="text-sm text-gray-500 mb-2">
            {blog.date} • {blog.author}
          </div>
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-700 text-lg mb-6">{blog.description}</p>
          <p className="text-gray-600 leading-relaxed">{blog.content}</p>

          <div className="mt-8">
            <Link
              href="/" // Or your blog listing page
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}