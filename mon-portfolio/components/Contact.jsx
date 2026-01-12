export default function Contact() {
  return (
    <section id="contact" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <p className="text-center mb-4">N'hésitez pas à me contacter pour discuter d'opportunités de stage ou de collaboration !</p>
        <div className="flex justify-center">
          <ul className="text-center">
            <li>Email : zeliecarmelle8@gmail.com</li>
            <li>Téléphone : +33 746529166</li>
            <li>LinkedIn : <a href="https://cm.linkedin.com/in/zelie-carmelle" className="text-blue-600 hover:underline">Mon profil</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
