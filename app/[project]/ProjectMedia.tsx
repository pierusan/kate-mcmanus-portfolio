import { ComponentProps } from 'react';
import { ProjectImage } from './ProjectImage';
import { ProjectVideo } from './ProjectVideo';
import { remoteImageAltTexts } from '@/components/RemoteImage';

function isImage(
  props: ComponentProps<typeof ProjectImage | typeof ProjectVideo> & {
    priority?: boolean;
  }
): props is ComponentProps<typeof ProjectImage> {
  return props.name in remoteImageAltTexts;
}

export function ProjectMedia(
  props: ComponentProps<typeof ProjectImage | typeof ProjectVideo> & {
    priority?: boolean;
  }
) {
  if (isImage(props)) {
    return <ProjectImage {...props} />;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { priority, ...rest } = props;

  return <ProjectVideo {...rest} />;
}
