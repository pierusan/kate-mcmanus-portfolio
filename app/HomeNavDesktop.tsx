import { ProjectCardsDesktop } from './ProjectCardsDesktop';
import { ContactInfoDesktop } from './ContactInfoDesktop';
import { cn } from '@/helpers';

export function HomeNavDesktop({ className }: { className?: string }) {
  return (
    <nav className={cn('', className)}>
      <ProjectCardsDesktop className="h-full w-full" />
      <ContactInfoDesktop />
    </nav>
  );
}
