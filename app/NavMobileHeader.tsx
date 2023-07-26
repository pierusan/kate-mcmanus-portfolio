import { HomeButton } from './HomeButton';
import CrossSvg from './icons/cross.svg';

export function NavMobileHeader({ className }: { className?: string }) {
  return (
    <header
      className={
        'border border-border-action-subtle bg-white ' +
        // Stack home button and cross on the same grid area for easier centering
        // and alignment
        `grid grid-cols-1 grid-rows-1 [grid-template-areas:"header"] ${className}`
      }
    >
      <HomeButton className="self-center justify-self-center [grid-area:header]" />
      {/* Use a form with dialog method to avoid the need for javascript to close the dialog */}
      <form
        method="dialog"
        className="mr-4 flex items-center self-center justify-self-end [grid-area:header]"
      >
        <button type="submit" autoFocus>
          <CrossSvg />
        </button>
      </form>
    </header>
  );
}
