'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { site, navGroups } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary text-primary-foreground shadow-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
          <span className="text-xl font-extrabold tracking-tight">
            املاک <span className="text-accent">۳۶۵</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/10">
                {group.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {openGroup === group.label && (
                <div className="absolute right-0 top-full pt-1 z-50">
                  <div className="w-56 rounded-lg border border-border bg-popover text-popover-foreground shadow-lg py-1">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm transition-colors hover:bg-muted"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/districts/" className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/10">
            مناطق
          </Link>
          <Link href="/blog/" className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/10">
            وبلاگ
          </Link>
          <Link href="/contact/" className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/10">
            تماس
          </Link>
        </nav>

        {/* Phone CTA + Mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden sm:flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="منو"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-primary">
          <nav className="container-page py-4 space-y-1">
            {navGroups.map((group) => (
              <div key={group.label} className="py-1">
                <div className="px-2 py-1 text-sm font-bold text-accent">{group.label}</div>
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-1.5 text-sm rounded-md hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="border-t border-white/10 pt-2 mt-2 space-y-1">
              <Link href="/districts/" className="block px-2 py-1.5 text-sm font-medium hover:bg-white/10 rounded-md" onClick={() => setMobileOpen(false)}>
                مناطق
              </Link>
              <Link href="/blog/" className="block px-2 py-1.5 text-sm font-medium hover:bg-white/10 rounded-md" onClick={() => setMobileOpen(false)}>
                وبلاگ
              </Link>
              <Link href="/contact/" className="block px-2 py-1.5 text-sm font-medium hover:bg-white/10 rounded-md" onClick={() => setMobileOpen(false)}>
                تماس
              </Link>
            </div>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
