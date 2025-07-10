import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const NoteDetail = () => {
  const { slug } = useParams();
  const [Content, setContent] = useState(null);
  const [frontmatter, setFrontmatter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNote = async () => {
      try {
        setLoading(true);
        
        const noteModule = await import(`../notes/${slug}.mdx`);
        
        setContent(() => noteModule.default);
        setFrontmatter(noteModule.frontmatter || {
          title: 'Note',
          date: new Date().toLocaleDateString(),
          tags: []
        });
      } catch (err) {
        console.error('Error loading note:', err);
        setError('Note not found');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadNote();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="loading-container">
          <LoadingSpinner size="lg" text="Loading note..." />
        </div>
      </div>
    );
  }

  if (error || !Content) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Note not found</h1>
          <Link to="/notes" className="text-blue-600 hover:underline dark:text-blue-400">
            ← Back to notes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full dark:bg-[#0d1117]">
      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Link 
          to="/notes"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-700 dark:text-[#8b949e] dark:hover:text-[#c9d1d9] mb-8 transition-colors"
        >
          ← Back to notes
        </Link>
        
        <header className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            {frontmatter.title}
          </h1>
          <div className="text-sm sm:text-base opacity-75 text-stone-500 dark:text-[#8b949e] mb-4">
            <em>Published on: {frontmatter.date}</em>
          </div>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {frontmatter.tags.map(tag => (
                <span key={tag} className="project-tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div className="prose prose-base sm:prose-lg lg:prose-xl dark:prose-invert max-w-none w-full prose-li:my-2">
          <Content />
        </div>
      </article>
    </div>
  );
};

export default NoteDetail;
