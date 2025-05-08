"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Study Groups", href: "/study-groups" },
  { name: "Job Postings", href: "/jobs" },
  { name: "Tutoring", href: "/tutoring" },
  { name: "Forums", href: "/forums" },
  { name: "Achievements", href: "/achievements" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">University</span>
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="University Logo"
                className="h-10 w-10"
              />
              <span className="ml-2 text-xl font-bold">UniConnect</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          {!searchOpen && (
            <>
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} className="mr-1">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </>
          )}

          {searchOpen && (
            <div className="flex w-full items-center">
              <Input type="search" placeholder="Search..." className="mr-2" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          )}
        </div>

        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8" />
          </div>
          <ModeToggle />
          <Button asChild variant="default">
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 z-50 bg-background lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50 flex">
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-background pb-4 pt-5">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="University Logo"
                  className="h-10 w-10"
                />
                <span className="ml-2 text-xl font-bold">UniConnect</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="mt-6 flow-root px-4">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t py-6">
                <Button className="w-full" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
                <div className="mt-4 flex justify-center">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
