import { ProjectImage } from '../ProjectImage';
import imageFull1 from './images/1_Image_Full.png';
import imageOnRight2 from './images/2_Image_OnRight.png';
import imageFull3 from './images/3_Image_Full.png';
import imageLeft4 from './images/4_Left.png';
import imageRight4 from './images/4_Right.png';
import imageFull5 from './images/5_MVP Standard Hover Smallest 1.png';
import imageOnLeft6 from './images/6_Image_Left.png';

export function MainImage() {
  return <ProjectImage imageType="main" src={imageFull1} alt="image full 1" />;
}

export function ImageRight1() {
  return (
    <ProjectImage imageType="right" src={imageOnRight2} alt="img on right 2" />
  );
}

export function ImageFull1() {
  return <ProjectImage imageType="full" src={imageFull3} alt="image full 3" />;
}

export function ImagePair1() {
  return (
    <>
      <ProjectImage imageType="leftSmall" src={imageLeft4} alt="image left 4" />
      <ProjectImage
        imageType="rightSmall"
        src={imageRight4}
        alt="img right 4"
      />
    </>
  );
}

export function ImageFull2() {
  return <ProjectImage imageType="full" src={imageFull5} alt="image full 5" />;
}

export function ImageLeft1() {
  return (
    <ProjectImage imageType="left" src={imageOnLeft6} alt="image on left 6" />
  );
}
