import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Suspense } from 'react';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Notes from './pages/Notes';
import NoteDetail from './pages/NoteDetail';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="xl" text="Loading..." />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/notes/:slug" element={<NoteDetail />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
            <Analytics />
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
