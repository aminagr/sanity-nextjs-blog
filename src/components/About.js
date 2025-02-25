const About = () => {
    return (
      <section id="about" className="bg-white pt-20 pb-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
         
  
  
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Une passion pour la cuisine, un voyage à chaque bouchée
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Bienvenue sur mon blog culinaire, un espace dédié à la découverte des recettes traditionnelles 
            et des secrets culinaires du monde entier. 
            Chaque plat est une invitation au voyage, une découverte de nouvelles saveurs et traditions culinaires. 
            J’explore des ingrédients exotiques, des techniques ancestrales et des anecdotes culturelles 
            pour vous offrir une expérience culinaire immersive.
            </p>
           
          </div>
        
           <div className="w-full md:w-1/2">
            <img
              src="/images/food1.jpg" 
              alt="Cuisine du monde"
              className="w-full"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  