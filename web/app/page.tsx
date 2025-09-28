export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">POS Akuntansi Dashboard</h1>
      <ul className="list-disc ml-6 mt-4">
        <li><a href="/import-products">Import Produk</a></li>
        <li><a href="/reports/negative-stock">Laporan Stok Minus</a></li>
      </ul>
    </div>
  );
}
