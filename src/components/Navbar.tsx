"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Simple Navbar with links to main sections. No styling yet.
export default function Navbar() {
  const pathname = usePathname();
  const linkStyle = (path: string) => ({
    textDecoration: pathname === path ? "underline" : "none",
  });

  return (
    <nav aria-label="Primary" style={{ padding: "1rem 0" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
        <li>
          <Link href="/" style={linkStyle("/")}>Home</Link>
        </li>
        <li>
          <Link href="/about" style={linkStyle("/about")}>About</Link>
        </li>
        <li>
          <Link href="/projects" style={linkStyle("/projects")}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
