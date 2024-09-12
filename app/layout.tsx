import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">
        <main className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white rounded-md shadow p-8 hover:shadow-xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
