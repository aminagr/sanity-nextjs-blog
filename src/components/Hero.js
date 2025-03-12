

const Hero = () => {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: 'url(/images/food.jpg)' }}
    >
  
      <div className="absolute inset-0 bg-black opacity-70"></div>


      <div className="relative z-10 p-4 md:p-12 text-center rounded-2xl shadow-lg max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight pt-4">
          Voyagez à travers les saveurs du monde !
        </h1>
      
      </div>
    </section>
  );
};

export default Hero;
