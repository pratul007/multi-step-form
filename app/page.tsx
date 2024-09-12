import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-16">
      <h1 className="text-4xl font-bold mb-6 text-center leading-relaxed">Welcome to the Multi-Step Form App</h1>
      <Link href="/multi-step-form/step1">
        <button className="bg-button-gradient text-white py-2 px-16 rounded font-semibold text-xl">
          Get Started
        </button>
      </Link>
    </div>
  );
}
