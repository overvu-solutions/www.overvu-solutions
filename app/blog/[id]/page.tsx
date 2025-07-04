import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { getPostData, getAllPostIds } from '../../../lib/blogs';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const postData = await getPostData(params.id);
    return {
      title: `${postData.title} - Overvu Solutions Blog`,
      description: postData.excerpt || `Read about ${postData.title} on Overvu Solutions blog`,
    };
  } catch (error) {
    return {
      title: 'Post Not Found - Overvu Solutions Blog',
      description: 'The requested blog post could not be found',
    };
  }
}

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    id: post.params.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  try {
    const postData = await getPostData(params.id);

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-6 py-18">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-500 hover:text-black mb-24 transition-colors text-sm"
          >
            ← Back to Blog
          </Link>
          
          <article>
            <header className="mb-12 border-b border-gray-200 pb-8">
              <div className="mb-4">
                <time className="text-sm text-gray-500 font-mono">
                  {new Date(postData.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <h1 className="text-3xl font-normal text-black tracking-tight">
                {postData.title}
              </h1>
            </header>
            
            <div className="prose prose-lg max-w-none prose-headings:text-black prose-headings:font-normal prose-headings:tracking-tight prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-black prose-strong:font-medium prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-md prose-pre:border prose-pre:border-gray-200 prose-a:text-black prose-a:underline prose-a:decoration-gray-400 hover:prose-a:decoration-black prose-blockquote:border-l-gray-300 prose-blockquote:text-gray-600">
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
            </div>
          </article>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
