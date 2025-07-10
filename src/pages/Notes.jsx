import { Link } from 'react-router-dom';

const notes = [
    {
        id: 1,
        slug: 'magic-of-thinking-big',
        title: 'The Magic of Thinking Big - highlights',
        date: 'Jan 15, 2025',
        excerpt: 'Personal notes and key takeaways from David J. Schwartz\'s classic book on success mindset.',
        tags: ['Books', 'Notes'],
    },
];

const Notes = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <section>
                <h2 className="section-heading mb-6">Notes</h2>
                <p className="text-neutral-600 mb-8 text-base">These are mostly notes to myself - thoughts, learnings, and random ideas that I find worth documenting.</p>

                <ul className="space-y-6 sm:space-y-8">
                    {notes.map(note => (
                        <li key={note.id}>
                            <Link to={`/notes/${note.slug}`} className="blog-card block">
                                <div className="flex flex-col space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:space-y-0 space-y-2">
                                        <h3 className="font-semibold text-lg sm:text-xl leading-tight">
                                            {note.title}
                                        </h3>
                                        <span className="text-stone-500 dark:text-[#8b949e] text-sm font-medium sm:ml-4 flex-shrink-0">
                                            {note.date}
                                        </span>
                                    </div>
                                    <p className="text-stone-600 dark:text-[#8b949e] text-sm leading-relaxed">
                                        {note.excerpt}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {note.tags.map(tag => (
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

export default Notes;
