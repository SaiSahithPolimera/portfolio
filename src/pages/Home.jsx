const socials = [
  { 
    name: 'X', 
    url: 'https://x.com/PolimeraSahith', 
    className: 'social-link-twitter',
    icon: <svg width="24" height="24" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z" fill="currentColor"/></svg> 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/saisahithpolimera/', 
    className: 'social-link-linkedin',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C15.08 12.17 15.71 12.8 15.71 13.57V18.5H18.5ZM6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 6 7.78 5.2 6.88 5.2C6 5.2 5.2 6 5.2 6.88C5.2 7.78 6 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/></svg> 
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/SaiSahithPolimera', 
    className: 'social-link-github',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.417 4.86 20.164 8.84 21.486C9.485 21.602 9.72 21.22 9.72 20.898C9.72 20.608 9.71 19.71 9.705 18.75C7.05 19.24 6.45 17.98 6.185 17.34C6.05 17.035 5.52 16.19 5.145 15.97C4.845 15.79 4.31 15.27 5.135 15.26C5.91 15.25 6.52 15.97 6.73 16.29C7.6 17.78 9.14 17.32 9.76 17.04C9.845 16.41 10.11 15.97 10.4 15.71C8.29 15.47 6.05 14.68 6.05 11.2C6.05 10.06 6.445 9.13 7.085 8.41C6.98 8.17 6.63 7.11 7.185 5.62C7.185 5.62 7.975 5.365 9.75 6.67C10.5 6.46 11.25 6.36 12 6.36C12.75 6.36 13.5 6.46 14.25 6.67C16.025 5.365 16.815 5.62 16.815 5.62C17.37 7.11 17.02 8.17 16.915 8.41C17.555 9.13 17.95 10.06 17.95 11.2C17.95 14.69 15.71 15.47 13.6 15.71C13.955 16.03 14.25 16.66 14.25 17.61C14.25 19.01 14.235 20.13 14.235 20.5C14.235 20.82 14.47 21.19 15.125 21.076C19.14 19.834 22 16.187 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/></svg> 
  },
];

const experiences = [
  { 
    title: 'Tecnics Integration Technologies', 
    role: 'Apprentice',
    period: 'December 2022 - June 2023',
    description: 'Developed Python-based GUI chat application using Tkinter with multi-threading and socket programming. Created Java application with CRUD operations for MySQL and SQLite using JDBC and Factory Design Pattern.',
    logoUrl: 'https://tecnics.com/wp-content/uploads/2020/03/logo1.png'
  },
  { 
    title: 'Summer of Bitcoin', 
    role: 'Apprentice',
    period: 'Summer Program',
    description: 'Selected for Summer of Bitcoin apprenticeship program focusing on blockchain fundamentals. Participated in intensive four-week hands-on boot-camp learning Bitcoin technologies.',
    logoUrl: 'https://assets.softr-files.com/applications/5abf9a13-d06f-44d6-b50c-187328a34a81/assets/c44fe3ae-957b-45e6-b30f-37986cc291f3.png'
  }
];

const skills = [
  { name: 'React JS', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'EJS', icon: '📄' },
  { name: 'Express JS', icon: '🚀' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Passport.js', icon: '🔐' },
  { name: 'JWT', icon: '🎟️' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Prisma', icon: '🔷' },
  { name: 'Gemini API', icon: '🤖' },
  { name: 'LLMs', icon: '🧠' },
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'C++', icon: '⚙️' },
  { name: 'Tkinter', icon: '🖥️' },
  { name: 'Socket Programming', icon: '🔌' },
  { name: 'Arduino', icon: '🔧' },
  { name: 'GPS', icon: '🗺️' },
  { name: 'GSM', icon: '📡' },
  { name: 'Git', icon: '📚' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'REST APIs', icon: '🌐' }
];

const books = [
  {
    imageUrl: 'https://media.thuprai.com/front_covers/deep-work.jpg'
  },
  {
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.IRNaoSgDGY-FI1OyYLEmMQHaLV%3Fpid%3DApi&f=1&ipt=cc4f3ba28e23d135aea591ad67194b30ddcf8407bcff41cbc166d63782ec89a8&ipo=images'
  },
  {
    imageUrl: 'https://thepowermoves.com/wp-content/uploads/make-it-stick.jpg'
  },
  {
    imageUrl: 'https://www.libertybooks.com/image/cache/catalog/9789698729707-640x996.jpg?q6'
  }
];

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="space-y-20 sm:space-y-24">
        <section>
          <h2 className="section-heading mb-6">about</h2>
          <div className="text-neutral-600 space-y-4 text-base">
            <p>I love working on projects that push the boundaries of what's possible with artificial intelligence, creating intelligent systems that can understand, learn, and assist in meaningful ways.</p>
            <p>fascinated by space, science, and ideas that expand the mind.</p>
            <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-neutral-700 mt-6">
              "If I have seen further than others, it is by standing upon the shoulders of giants."
              <footer className="text-sm text-neutral-500 mt-1">—Isaac Newton</footer>
            </blockquote>
          </div>
        </section>

        <section>
          <h2 className="section-heading mb-6">socials</h2>
          <div className="flex space-x-4">
            {socials.map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                title={social.name} 
                className={social.className}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-heading mb-6">skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="project-tech-tag flex items-center gap-1"
              >
                <span className="text-sm">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-heading mb-6">experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map(experience => (
              <div key={experience.title} className="experience-card group">
                <div className="flex items-start gap-4 mb-3">
                  <img 
                    src={experience.logoUrl} 
                    alt={`${experience.title} logo`} 
                    className="w-12 h-12 object-contain rounded-lg bg-white border border-neutral-200 p-1 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col mb-1">
                      <h3 className="font-semibold text-lg">{experience.title}</h3>
                      <span className="text-sm text-neutral-500">{experience.period}</span>
                    </div>
                    <p className="text-sm text-neutral-600 font-medium mb-2">{experience.role}</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">{experience.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-heading mb-6">favorite reads</h2>
          <p className="text-neutral-600 mb-8 text-base">I like reading non-fiction books, blogs, and articles. Here are a few books which I really like.</p>
          <div className="flex flex-wrap gap-4 justify-start items-end px-2">
            {books.map((book, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={book.imageUrl} 
                  alt={`Book ${index + 1}`}
                  className="h-40 sm:h-44 md:h-48 w-auto object-contain rounded-lg shadow-xl"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};


export default Home;
