import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
      <p className="font-mono text-xs text-ink-faint">404</p>
      <h1 className="font-mono text-2xl text-ink">FILE NOT FOUND</h1>
      <p className="max-w-sm text-sm text-ink-muted">
        The requested resource does not exist.
      </p>
      <p className="font-mono text-sm text-accent">$ cd home</p>
      <Link
        href="/"
        className="mt-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg hover:bg-accent-dim"
      >
        Return to Portfolio
      </Link>
    </div>
  );
}
