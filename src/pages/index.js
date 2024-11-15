import Slider from '@/components/Slider';
import AboutUs from '@/components/AboutUs';
import Award from '@/components/Award';
import Activities from '@/components/Activities';
import NewsEvents from '@/components/NewsEvents';

export default function Home() {
  return (
    <div>
      <Slider />
      <AboutUs />
      <Award />
      <Activities />
      <NewsEvents />
    </div>
  );
}
