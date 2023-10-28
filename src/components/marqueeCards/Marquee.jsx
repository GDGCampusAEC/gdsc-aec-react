import Marquee from "react-fast-marquee";

const MarqueeCards = ({ children, direction }) => {
  const containerStyle = {};
  return (
    <Marquee
      style={{ containerStyle }}
      direction={direction}
      gradient={true}
      gradientWidth={500}
      speed={100}
      pauseOnHover={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
