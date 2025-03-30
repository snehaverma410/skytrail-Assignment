"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/lib/auth-context"
import { logout } from "@/lib/auth"
import { Globe, Menu, User } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const { user, isAuthenticated } = useAuth()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-6 w-6" />
          <span className="font-bold text-xl">Travel Tales by Sneha Verma</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm ${pathname === "/" ? "text-primary font-medium" : "text-muted-foreground"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm ${pathname === "/about" ? "text-primary font-medium" : "text-muted-foreground"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm ${pathname === "/contact" ? "text-primary font-medium" : "text-muted-foreground"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  {user?.name || "Account"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-blogs">My Blogs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/register">Register</Link>
              </Button>
            </>
          )}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem asChild>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/contact">Contact</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="md:hidden" asChild>
              {isAuthenticated ? <Link href="/profile">Profile</Link> : <Link href="/auth/login">Login</Link>}
            </DropdownMenuItem>
            <DropdownMenuItem className="md:hidden" asChild>
              {isAuthenticated ? <button onClick={logout}>Logout</button> : <Link href="/auth/register">Register</Link>}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

