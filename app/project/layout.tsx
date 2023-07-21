import { type ReactNode } from 'react';

export default function ProjectPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    // TODO: Adapt the background color based on the project instead of here in
    // the layout
    <body className="max-w-screen-2xl bg-pink-200 2xl:mx-auto">{children}</body>
  );
}
