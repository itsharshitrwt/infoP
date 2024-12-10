import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'My first Solo Hackathon',
    excerpt: 'Learn best practices for building large-scale React applications...',
    date: 'Dec, 2024',
    readTime: '3 min read',
    imageUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1733035651419/f1b18ffe-e77f-4632-9783-4c93ae9ac37c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    link: 'https://harshitrwt.hashnode.dev/my-journey-through-my-first-solo-hackathon-adventure'
  },
  {
    title: 'The Definitive Guide to DSA',
    excerpt: 'Exploring the latest TypeScript features that improve development...',
    date: 'Sep, 2024',
    readTime: '4 min read',
    imageUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1727014109834/80e94206-a733-4d7b-a796-b2c463419431.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    link: 'https://harshitrwt.hashnode.dev/the-definitive-dsa-guide-building-strong-skills-from-scratch'
  },
  {
    title: 'SDLC Made Easy',
    excerpt: 'Essential techniques for improving your website\'s performance...',
    date: 'Jul, 2024',
    readTime: '6 min read',
    imageUrl: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/faEfWCdOKIg/upload/878aab4e8d6880683e87f76dfceb252e.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    link: 'https://harshitrwt.hashnode.dev/software-development-life-cycle-made-easy'
  },
  {
    title: 'AI Responses Enhancement',
    excerpt: 'A beginner-friendly guide to building web apps with Next.js...',
    date: 'Jul, 2024',
    readTime: '3 min read',
    imageUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1720941875640/89994f70-4e36-43fd-9d0e-7f45e4cb7001.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    link: 'https://harshitrwt.hashnode.dev/enhancing-ai-responses-by-merging-cloud-expertise-with-prompt-engineering'
  },
];

export function Articles() {
  return (
    <section
      className="py-20 px-8"
      style={{
        background: 'bg-green-700'
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
                <h3 className="text-xl font-bold text-green-500">
                  {article.title}
                </h3>
                <div className="gap-4 text-sm text-gray-500 hidden md:block">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-500 hover:text-green-500"
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
