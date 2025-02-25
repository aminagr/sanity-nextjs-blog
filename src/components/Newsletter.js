const Newsletter = () => {
    return (
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Abonnez-vous à notre Newsletter</h2>
        <p className="mb-6">Recevez les derniers articles directement dans votre boîte mail.</p>
        <form>
          <input type="email" placeholder="Votre email" className="px-4 py-2 rounded-l-lg border" />
          <button className="px-6 py-2 bg-primary text-white rounded-r-lg">S'abonner</button>
        </form>
      </section>
    )
  }
  
  export default Newsletter;
  