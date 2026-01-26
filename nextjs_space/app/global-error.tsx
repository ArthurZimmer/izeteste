'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Algo deu errado!</h2>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-[#a3e635] rounded-lg"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
