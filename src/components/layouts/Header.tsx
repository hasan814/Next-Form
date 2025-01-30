import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">Form</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/server-form" className="hover:underline">
                Server
              </Link>
            </li>
            <li>
              <Link href="/client-form" className="hover:underline">
                Client
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
