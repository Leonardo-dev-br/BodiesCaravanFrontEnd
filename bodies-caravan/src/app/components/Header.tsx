import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-purple-900 text-white p-4">
      <nav className="max-w-6xl mx-auto">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-lg font-bold hover:text-gray-300">
              Home
            </Link>
          </li>

          <li>
            <ul className="flex gap-6">
              <li>
                <Link href="/search-history" className="hover:text-gray-300">
                  Histórico de Pesquisa
                </Link>
              </li>
              <li>
                <Link href="/profile-user" className="hover:text-gray-300">
                  Perfil
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
