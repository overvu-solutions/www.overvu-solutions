import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Overvu Solutions',
  description: 'Latest insights and articles from Overvu Solutions',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
