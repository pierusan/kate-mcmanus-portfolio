import Link from 'next/link';

export function Nav() {
  return (
    <nav className="mb-14">
      <ol className="flex flex-row gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ol>
    </nav>
  );
}
