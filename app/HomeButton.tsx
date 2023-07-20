import Link from 'next/link';
import { monoton, parisienne, pirataOne, staatliches } from './fontSubsets';

export function HomeButton({ className }: { className?: string }) {
  return (
    // TODO: When already on homepage, clicking the home button would ideally
    // close the dialog
    <Link href="/" className={`text-[1.375rem] ${className}`}>
      <span className={`font-mono`}>K</span>
      <span className={`${staatliches.className}`}>a</span>
      <span className={`font-mono`}>T</span>
      <span className={`font-mono`}>E</span>{' '}
      <span className={`font-mono`}>M</span>
      <span className={`${parisienne.className}`}>c</span>
      <span className={`${pirataOne.className}`}>M</span>
      <span className={`${monoton.className}`}>a</span>
      <span className={`${staatliches.className}`}>n</span>
      <span className={`font-mono`}>u</span>
      <span className={`${pirataOne.className}`}>S</span>
    </Link>
  );
}
