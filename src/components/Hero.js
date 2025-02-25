import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: 'url(/images/food.jpg)' }}
    >
  
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 bg-white opacity-80 p-4 mt-16  md:p-12 text-center rounded-2xl shadow-lg max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight pt-4">
          Voyagez à travers les saveurs du monde !
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-6 mb-4">
          Laissez-vous emporter par un voyage culinaire à travers des recettes authentiques venues des quatre coins du monde.
        </p>
       
      </div>
    </section>
  );
};

export default Hero;
