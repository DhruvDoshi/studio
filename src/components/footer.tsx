import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-teal/20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="NextBridge Ventures"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-white/80 max-w-sm">
              Next Bridge Ventures (NBV) is a private Canadian venture
              incubation platform.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-white/70 hover:text-brand-teal transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-white/70 hover:text-brand-teal transition-colors" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-2 font-headline text-brand-teal">
              Legal Disclaimer
            </h3>
            <p className="text-xs text-white/70">
              Next Bridge Ventures (NBV) is not an immigration consultant, legal
              advisor, or government-endorsed entity. All decisions regarding
              temporary or permanent immigration to Canada are made solely by
              Immigration, Refugees and Citizenship Canada (IRCC). NBV does not
              provide any guarantees of immigration outcomes, and all services
              provided are strictly business-focused.
            </p>
          </div>
        </div>
        <div className="border-t border-brand-teal/20 mt-8 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} NextBridge Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
