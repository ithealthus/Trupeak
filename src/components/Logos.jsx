// src/components/SeenInSection.jsx

const logoList = [
  { src: "/logosvg/Abc.svg", alt: "ABC" },
  { src: "/logosvg/Cnn.svg", alt: "CNN" },
  { src: "/logosvg/Cosmo.svg", alt: "Cosmopolitan" },
  { src: "/logosvg/Forbes.svg", alt: "Forbes" },
  { src: "/logosvg/Abc.svg", alt: "ABC" },
  { src: "/logosvg/Cnn.svg", alt: "CNN" },
  { src: "/logosvg/Cosmo.svg", alt: "Cosmopolitan" },
  { src: "/logosvg/Forbes.svg", alt: "Forbes" },
  { src: "/logosvg/Abc.svg", alt: "ABC" },
  { src: "/logosvg/Cnn.svg", alt: "CNN" },
  { src: "/logosvg/Cosmo.svg", alt: "Cosmopolitan" },
  { src: "/logosvg/Forbes.svg", alt: "Forbes" },
  { src: "/logosvg/Abc.svg", alt: "ABC" },
  { src: "/logosvg/Cnn.svg", alt: "CNN" },
  { src: "/logosvg/Cosmo.svg", alt: "Cosmopolitan" },
  { src: "/logosvg/Forbes.svg", alt: "Forbes" },
  { src: "/logosvg/Abc.svg", alt: "ABC" },
  { src: "/logosvg/Cnn.svg", alt: "CNN" },
  { src: "/logosvg/Cosmo.svg", alt: "Cosmopolitan" },
  { src: "/logosvg/Forbes.svg", alt: "Forbes" },
];

const SeenInSection = () => {
  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="relative flex w-full overflow-hidden">
        {/* Track (duplicate logos twice for seamless loop) */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logoList, ...logoList].map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto mx-12 filter grayscale brightness-75 opacity-40 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeenInSection;
