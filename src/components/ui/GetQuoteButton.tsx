import Link from 'next/link';

export default function GetQuote() {
  return (
    <div className="flex items-center">
      <Link
        href="/GetQuote"
        className="text-sm px-3 py-2 md:text-xl rounded-3xl bg-brand md:px-6 md:py-4 hover:text-white"
      >
        GET QUOTE
      </Link>
    </div>
  );
}
