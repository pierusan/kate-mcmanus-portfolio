export function NavMobile({ className }: { className?: string }) {
  return (
    <nav className={`${className}`}>
      <menu
        className={
          'absolute inset-x-5 bottom-5 bg-white md:hidden ' +
          'grid grid-cols-2 rounded-md border border-border-action-subtle shadow-md ' +
          '[&>li:not(:last-child)]:border [&>li:not(:last-child)]:border-y-0 [&>li:not(:last-child)]:border-l-0 [&>li:not(:last-child)]:border-r-border-action-subtle ' +
          'text-base [&_button]:w-full [&_button]:py-5 ' +
          '[&_button]:font-mono [&_button]:lowercase [&_button]:tracking-[0.125rem]'
        }
      >
        <li>
          <button>Projects</button>
        </li>
        <li>
          <button>Contacts</button>
        </li>
      </menu>
    </nav>
  );
}
