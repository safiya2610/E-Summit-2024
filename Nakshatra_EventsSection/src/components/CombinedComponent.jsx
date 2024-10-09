import ZoomParallax from './ZoomParallax';
import HorizontalScrollCarousel from './HorizontalScrollCarousel';

export default function CombinedComponent() {
  return (
    <div>
      <ZoomParallax />
      <HorizontalScrollCarousel />
    </div>
  );
}
