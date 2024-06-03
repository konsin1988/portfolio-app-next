import { TypeAnimation } from 'react-type-animation';

const TypeAnimationTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Dmitry',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        1000,
        'Frontend developer',
        1000
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  );
};

export default TypeAnimationTitle;