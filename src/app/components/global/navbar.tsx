import Image from "next/image";
import Link from "next/link";
import React from "react";
import {MenuIcon} from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {  // 
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b border-neutral-900 justify-between">
      <aside className="flex items-center gap-1">
        <p className="text-3xl font-bold">Fu</p>
        <Image
          src="/fuzzieLogo.png"
          width={30} // ✅ Increased size for better visibility
          height={30}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">zie</p>
      </aside>
      {/* ✅ Fixed Navbar Positioning */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Clients
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Resources
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Documentation
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Enterprise
            </Link>
          </li>
        </ul>
      </nav>

      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {true? 'Dashboard' : 'Get Started'}
          </span>
        </Link>

        <MenuIcon className="md:hidden"></MenuIcon>
      </aside>
    </header>
  );
};

export default Navbar;
