import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-xl font-bold mb-4">404 - Halaman Tidak Ditemukan</h1>
      <Link href="/" className="text-blue-600 hover:underline">
        Kembali ke Home
      </Link>
    </div>
  );
};

export default NotFound;
