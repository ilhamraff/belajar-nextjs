import Link from "next/link";

const Header = () => {
  return (
    <nav className="p-6 ">
      <ul className="flex gap-4 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
