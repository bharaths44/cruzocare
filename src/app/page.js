import { Metadata } from 'next'

export const metadata = {
  title: 'CruzoCare - Coming Soon',
  description: 'CruzoCare - Website Coming Soon',
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 text-center">
      {/* Coming Soon Section */}
      <section className="py-20">
        <h1 className="text-4xl font-bold text-blue-600">CruzoCare</h1>
        <p className="mt-2 text-lg text-gray-600">Our website is coming soon. Stay tuned!</p>
      </section>
    </main>
  );
}