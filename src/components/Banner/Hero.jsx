import Banner from "./Banner";
import spices from "../../assets/spices.png";
import logo from "../../assets/image 10.png";
const Hero = () => {
  return (
    <div
      className="relative h-[480px] md:h-[75vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${spices})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Banner />

          <div className="mt-16 sm:mt-36 max-w-2xl bg-white border-t-8 border-[#F2B90F] p-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#F59E0B] font-semibold text-base sm:text-lg mb-2">
                  SPICES
                </p>
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Exporting Spices from India
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  The Spices Board of India promotes spice cultivation, export,
                  and research through various initiatives and regulations.
                </p>
              </div>
              <img
                src={logo}
                alt="Spices Board Logo"
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
