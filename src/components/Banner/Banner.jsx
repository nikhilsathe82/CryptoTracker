import BannerImage from "../../assets/v915-techi-025-l.jpg";

function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <img src={BannerImage} alt="Banner Image" className="h-full w-full" />
      <div className="absolute top-20 left-10 right-0 mx-auto w-[20rem]">
        <div className="flex flex-col gap-4">
          <div className="font semi-bold text-5xl text-black">
            CryptoTracker
          </div>

          <div className="font-semibold text-am text-black text-center">
            Get all info on Cryptocurrencies
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
