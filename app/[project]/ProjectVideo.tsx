import { ProjectFigure } from './ProjectFigure';
import { ImageAlignment, imageAlignmentProps } from './ProjectImage';
import {
  RemoteVideo,
  remoteVideoCaptions,
  type RemoteVideoName,
} from '@/components/RemoteVideo';
import { cn } from '@/helpers';

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
      <RemoteVideo
        className={cn('w-full')}
        name={name}
        autoPlay
        controls
        muted
        loop
      />
    </ProjectFigure>
  );
}
