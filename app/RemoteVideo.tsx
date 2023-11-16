import { type VideoHTMLAttributes } from 'react';
import remoteMedia from './remoteMedia.json';

export const remoteVideos = remoteMedia.videos;

export type RemoteVideoName = keyof typeof remoteVideos;

export function RemoteVideo({
  name,
  style,
  ...rest
}: { name: RemoteVideoName } & Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  'src' | 'width' | 'height'
>) {
  const { src, width, height } = remoteVideos[name];

  return (
    <video
      src={src}
      width={width}
      height={height}
      // Typescript 'preflight' reset rules (height:auto) break the aspect ratio
      // automatically computed by the browser. height:unset doesn't reset it so
      // we apply the aspect ratio manually here. Monitor this thread for
      // updates: https://github.com/tailwindlabs/tailwindcss/issues/506
      style={{ aspectRatio: `${width}/${height}`, ...style }}
      {...rest}
    />
  );
}
