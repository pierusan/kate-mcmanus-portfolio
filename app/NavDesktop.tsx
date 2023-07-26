import { ProjectCardsDesktop } from './ProjectCardsDesktop';
import { ContactInfoDesktop } from './ContactInfoDesktop';

export function NavDesktop({ className }: { className?: string }) {
  return (
    <nav className={`${className}`}>
      <ProjectCardsDesktop className="h-full w-full" />
      <ContactInfoDesktop />
    </nav>
  );
}
