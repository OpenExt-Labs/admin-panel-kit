import Link from 'next/link';
import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <span className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by {" "}
          <Link href={"https://openext.dev"} className='font-medium underline underline-offset-4'>
            OpenExt
          </Link>
          {" "}
          with ❤️ {" "}
          <Link href="https://ui.shadcn.com/" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">shadcn</Link>
          {" "} and Next.js & Tailwind
        </span>
      </div>
    </footer >
  );
}
