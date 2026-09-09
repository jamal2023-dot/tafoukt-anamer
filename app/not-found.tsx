import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>Page introuvable</h1>
      <p>الصفحة غير موجودة</p>
      <Link className="button" href="/fr">
        Retour à l’accueil
      </Link>
    </main>
  );
}
