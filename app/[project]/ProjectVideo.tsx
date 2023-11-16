import { RemoteVideo, type RemoteVideoName } from '../RemoteVideo';
import { cn } from '../helpers';
import { ImageAlignment, imageAlignmentProps } from './ProjectImage';

export function ProjectVideo({
  name,
  alignment,
  className,
}: {
  name: RemoteVideoName;
  alignment: ImageAlignment;
  className?: string;
}) {
  const { className: alignmentClassName } = imageAlignmentProps(alignment);

  return (
    <RemoteVideo
      name={name}
      autoPlay
      controls
      muted
      loop
      className={cn(
        // Add pointer events to use video controls
        'pointer-events-auto w-full',
        alignmentClassName,
        className
      )}
    />
  );
}
