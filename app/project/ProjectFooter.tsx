import Link from 'next/link';

export function ProjectFooter() {
  return (
    <footer className="pointer-events-auto col-span-full flex justify-between">
      <Link href="#" className="p-5 font-mono tracking-[0.125em]">
        {'<previous'}
      </Link>
      <Link href="#" className="p-5 font-mono tracking-[0.125em]">
        {'next>'}
      </Link>
    </footer>
  );
}
