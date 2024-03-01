import SedansIcon from "../assets/icon-sedans.svg";
import SuvsIcon from "../assets/icon-suvs.svg";
import LuxuryIcon from "../assets/icon-luxury.svg";

const Card = () => {
  return (
    <div className="sm:flex sm:justify-center sm:items-center sm:overflow-x-hidden">
      <div className="bg-BrightOrange px-10 py-10 w-72 rounded-tr-lg rounded-tl-lg  sm:rounded-tr-none sm:rounded-bl-lg">
        <img src={SedansIcon} alt="sedans" className="h-8" />
        <h2 className="font-bigShouldersDisplay text-4xl text-VeryLightGray py-5">
          SEDANS
        </h2>
        <p className="font-lexendDeca font-light text-sm  text-TransparentWhite sm:mb-16 sm:pr-5">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="font-lexendDeca font-light text-sm text-BrightOrange bg-VeryLightGray rounded-full px-7 py-3 mt-5 hover:bg-BrightOrange hover:text-VeryLightGray hover:border-VeryLightGray hover:border-2 border-VeryLightGray border-2 ">
          Learn more
        </button>
      </div>
      <div className="bg-DarkCyan px-10 py-10 w-72">
        <img src={SuvsIcon} alt="sedans" className="h-8" />
        <h2 className="font-bigShouldersDisplay text-4xl text-VeryLightGray py-5">
          SUVS
        </h2>
        <p className="font-lexendDeca font-light text-sm  text-TransparentWhite  sm:mb-16 sm:pr-5">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="font-lexendDeca font-light text-sm text-DarkCyan bg-VeryLightGray rounded-full px-7 py-3 mt-5 hover:bg-DarkCyan hover:text-VeryLightGray hover:border-VeryLightGray hover:border-2 border-VeryLightGray border-2">
          Learn more
        </button>
      </div>
      <div className="bg-VeryDarkCyan px-10 py-10 w-72 rounded-br-lg rounded-bl-lg sm:rounded-bl-none sm:rounded-tr-lg">
        <img src={LuxuryIcon} alt="sedans" className="h-8" />
        <h2 className="font-bigShouldersDisplay text-4xl text-VeryLightGray py-5">
          LUXURY
        </h2>
        <p className="font-lexendDeca font-light text-sm  text-TransparentWhite sm:mb-16 sm:pr-4 ">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="font-lexendDeca font-light text-sm text-VeryDarkCyan bg-VeryLightGray rounded-full px-7 py-3 mt-5 hover:bg-VeryDarkCyan hover:text-VeryLightGray hover:border-VeryLightGray hover:border-2 border-VeryLightGray border-2 ">
          Learn more
        </button>
      </div>
    </div>
  );
};
export default Card;
