import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-slate-900">POS Akuntansi Dashboard</h1>
        <p className="mt-2 text-slate-600">
          Mulai dengan memilih salah satu modul untuk mengelola data toko Anda.
        </p>
      </header>

      <nav>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow">
            <Link className="block" href="/import-products">
              <h2 className="text-lg font-medium text-slate-900">Import Produk</h2>
              <p className="mt-1 text-sm text-slate-600">
                Unggah data master produk untuk memperbarui informasi stok.
              </p>
            </Link>
          </li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow">
            <Link className="block" href="/import-sales">
              <h2 className="text-lg font-medium text-slate-900">Import Penjualan</h2>
              <p className="mt-1 text-sm text-slate-600">
                Sinkronkan transaksi penjualan untuk analisis performa toko.
              </p>
            </Link>
          </li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow">
            <Link className="block" href="/reports/negative-stock">
              <h2 className="text-lg font-medium text-slate-900">Laporan Stok Minus</h2>
              <p className="mt-1 text-sm text-slate-600">
                Identifikasi produk dengan stok negatif sebelum menimbulkan masalah.
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
