import Link from 'next/link';
import {
  monotonHeaderStyle,
  parisienneHeaderStyle,
  pirataOneHeaderStyle,
  staatlichesHeaderStyle,
} from './fontSubsets';

export function HomeButton({ className }: { className?: string }) {
  return (
    // TODO: When already on homepage, clicking the home button would ideally
    // close the dialog
    <Link href="/" className={`text-[1.375rem] ${className}`}>
      <span className={`font-mono`}>K</span>
      <span className={`${staatlichesHeaderStyle}`}>a</span>
      <span className={`font-mono`}>T</span>
      <span className={`font-mono`}>E</span>{' '}
      <span className={`font-mono`}>M</span>
      <span className={`${parisienneHeaderStyle}`}>c</span>
      <span className={`${pirataOneHeaderStyle}`}>M</span>
      <span className={`${monotonHeaderStyle}`}>a</span>
      <span className={`${staatlichesHeaderStyle}`}>n</span>
      <span className={`font-mono`}>u</span>
      <span className={`${pirataOneHeaderStyle}`}>S</span>
    </Link>
  );
}
