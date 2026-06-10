import FlavorTitle from "@/components/FlavorTitle";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          {/* FlavorSlider will be added in v6 */}
          <div className="flex-center h-full px-10 py-20 text-dark-brown opacity-30">
            <p className="font-bold uppercase tracking-widest">Slider coming in v6</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
