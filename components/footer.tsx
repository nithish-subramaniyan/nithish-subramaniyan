import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="hairline">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
        <p className="text-sm text-muted">
          {profile.name} · {new Date().getFullYear()}
        </p>
        <p className="text-sm text-muted">Built to be read in 30 seconds.</p>
      </div>
    </footer>
  );
}
