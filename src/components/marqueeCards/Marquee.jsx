import Marquee from "react-fast-marquee";

const MarqueeCards = ({ children, direction }) => {
  const containerStyle = {};
  const gradientWidthCalc = () => {
    const width = window.innerWidth;
    if (width > 1024) return 400;
    if (width > 768) return 200;
    return 50;
  };
  return (
    <Marquee
      style={{ containerStyle }}
      direction={direction}
      gradient={true}
      gradientWidth={gradientWidthCalc()}
      speed={100}
      pauseOnHover={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
