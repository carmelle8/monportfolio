import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Zélie Carmelle TCHUENDOM KAAM</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:underline">À propos</Link></li>
            <li><Link href="#skills" className="hover:underline">Compétences</Link></li>
            <li><Link href="#experience" className="hover:underline">Expériences</Link></li>
            <li><Link href="#projects" className="hover:underline">Projets</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
