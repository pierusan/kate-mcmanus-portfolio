import { ProjectLinksDesktop } from './ProjectsLinksDesktop';
import { ContactInfoDesktop } from './homepageContent/ContactInfoDesktop';

export function NavDesktop({ className }: { className?: string }) {
  return (
    <nav className={`${className}`}>
      <ProjectLinksDesktop className="h-full w-full" />
      <ContactInfoDesktop />
    </nav>
  );
}
