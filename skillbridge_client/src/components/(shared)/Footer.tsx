import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">Skill Bridge </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Building modern service where you can teach learn and grow
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Follow me
            </h4>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Github className="h-5 w-5" />
              </Link>

              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Linkedin className="h-5 w-5" />
              </Link>

              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} YourApp. All rights reserved.</p>
          <p>Built with ❤️ using Next.js & shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}
