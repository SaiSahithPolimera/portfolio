import { Link } from 'react-router-dom';

const blogPosts = [
    { 
      slug: 'how-we-built-smart-blind-stick', 
      title: 'How we built smart blind stick', 
      description: 'A personal journey of building an Arduino-based navigation aid for visually impaired individuals during my diploma studies.', 
      date: 'Jan 12, 2025',
      tags: ['Arduino', 'IoT', 'Hardware', 'GPS', 'GSM'],
      githubUrl: 'https://github.com/SaiSahithPolimera/console-log-api',
      liveUrl: 'https://console-log-blog.vercel.app/'
    },
];

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <section>
        <h2 className="section-heading mb-6">Blog</h2>
        <ul className="space-y-6 sm:space-y-8">
          {blogPosts.map(post => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="blog-card block">
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:space-y-0 space-y-2">
                    <h3 className="font-semibold text-lg sm:text-xl leading-tight">{post.title}</h3>
                    <span className="text-stone-500 dark:text-[#8b949e] text-sm font-medium sm:ml-4 flex-shrink-0">
                      {post.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 ">
                    {post.tags.map(tag => (
                      <span key={tag} className="project-tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Blog;
