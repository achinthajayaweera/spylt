import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <Image
                src="/images/hero-bg.webp"
                alt="hero-bg"
                width={3000}
                height={3000}
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <Image
              src="/images/hero-img.webp"
              alt="hero-img"
              width={500}
              height={500}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/herobg.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="hero-content">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>

          <div className="hero-text-scroll">
            <div className="hero-subtitle">
              <h1>Protein + Caffeine</h1>
            </div>
          </div>

          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button">
            <p>Chug a SPYLT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
