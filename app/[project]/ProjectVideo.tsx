import {
  RemoteVideo,
  remoteVideoCaptions,
  type RemoteVideoName,
} from '../RemoteVideo';
import { cn } from '../helpers';
import { ProjectFigure } from './ProjectFigure';
import { ImageAlignment, imageAlignmentProps } from './ProjectImage';

export function ProjectVideo({
  name,
  alignment,
  showCaption = true,
  className,
}: {
  name: RemoteVideoName;
  alignment: ImageAlignment;
  showCaption?: boolean;
  className?: string;
}) {
  const { className: alignmentClassName } = imageAlignmentProps(alignment);

  return (
    <ProjectFigure
      className={cn(
        // Add pointer events to use video controls
        'pointer-events-auto w-full',
        alignmentClassName,
        className
      )}
      caption={showCaption ? remoteVideoCaptions[name] : undefined}
    >
      <RemoteVideo name={name} autoPlay controls muted loop />
    </ProjectFigure>
  );
}
