import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Building Scalable React Apps',
    excerpt: 'Learn best practices for building large-scale React applications...',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    imageUrl: 'https://via.placeholder.com/150',
    link: 'https://example.com/building-scalable-react-apps'
  },
  {
    title: 'Modern TypeScript Features You Should Know',
    excerpt: 'Exploring the latest TypeScript features that improve development...',
    date: 'Mar 10, 2024',
    readTime: '4 min read',
    imageUrl: 'https://via.placeholder.com/150',
    link: 'https://example.com/modern-typescript-features'
  },
  {
    title: 'Optimizing Web Performance',
    excerpt: 'Essential techniques for improving your website\'s performance...',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    imageUrl: 'https://via.placeholder.com/150',
    link: 'https://example.com/optimizing-web-performance'
  },
  {
    title: 'Introduction to Next.js',
    excerpt: 'A beginner-friendly guide to building web apps with Next.js...',
    date: 'Feb 25, 2024',
    readTime: '3 min read',
    imageUrl: 'https://via.placeholder.com/150',
    link: 'https://example.com/introduction-to-nextjs'
  },
  {
    title: 'CSS-in-JS vs. Traditional CSS',
    excerpt: 'Comparing the pros and cons of CSS-in-JS and traditional CSS...',
    date: 'Feb 20, 2024',
    readTime: '5 min read',
    imageUrl: 'https://via.placeholder.com/150',
    link: 'https://example.com/css-in-js-vs-traditional-css'
  }
];

export function Articles() {
  return (
    <section
      className="py-20 px-8"
      style={{
        background: 'bg-[#1A1A1A]/50'
      }}
    >
      <h2 className="text-3xl font-bold text-center text-green-500 mb-12">
        Recent Articles
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {articles.map((article, index) => (
          <article
            key={index}
            className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow gap-4"
          >
            <img
              src={article.imageUrl}
              alt="Article thumbnail"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-emerald-800">
                  {article.title}
                </h3>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
              >
                Read more <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
