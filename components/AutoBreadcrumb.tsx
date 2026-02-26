"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AutoBreadcrumb() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  const crumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    return {
      label: segment.replace(/-/g, " "),
      href,
    };
  });

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ul className="flex flex-wrap gap-2">

        <li className="flex items-center gap-2">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          {crumbs.length > 0 && <span>&gt;</span>}
        </li>

        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">

            {index === crumbs.length - 1 ? (
              <span className="font-medium text-black capitalize">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="hover:text-black capitalize">
                {crumb.label}
              </Link>
            )}

            {index !== crumbs.length - 1 && <span>&gt;</span>}

          </li>
        ))}

      </ul>
    </nav>
  );
}