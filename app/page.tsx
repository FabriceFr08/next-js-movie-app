import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';

export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row w-full">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20 grow">
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal text-center ${lusitana.className}`}>
              <strong>Welcome to Movie app.</strong> <br />
              <a href="" className="text-blue-500">
                You can see movies, their details and add them to favorites
              </a>
            </p>
            <Link
                href="/login"
                className="flex items-center gap-5 mx-auto rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white justify-center transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
      </main>
  );
}