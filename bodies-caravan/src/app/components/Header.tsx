  import Link from "next/link";

export default function Header() {
  return (
    <header className="header text-white p-4">
      <nav className="max-w-6xl mx-auto">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="title-caravan hover:text-gray-900">
              Caravan Bodies
            </Link>
          </li>

          <li>
            <ul className="flex gap-6">
              <li>
                <Link href="/search-history" className="hover:text-gray-300">
                  Criar Conta
                </Link>
              </li>
              <li>
                <Link href="/profile-user" className="hover:text-gray-300">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/search-history" className="hover:text-gray-300">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
