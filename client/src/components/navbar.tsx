import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 flex h-16 items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold tracking-tighter cursor-pointer">PolyCraft</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                  location === href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-4">
              {links.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                      location === href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}