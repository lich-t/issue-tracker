"use client";
import Link from "next/link";
import { BugOff } from "lucide-react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
	const currentPath = usePathname();

	const links = [
		{ label: "Dashboard", href: "/" },
		{ label: "Issues", href: "/issues" },
	];
	return (
		<nav className="flex space-x-4 border-b mb-3 px-5 h-14 items-center">
			<Link href="/">
				<BugOff />
			</Link>
			<ul className="flex space-x-4">
				{links.map((link) => (
					<Link
						key={link.href}
						className={classNames({
							"text-zinc-900": link.href === currentPath,
							"text-zinc-400": link.href !== currentPath,
							"hover:text-zinc-950 transition-colors": true,
						})}
						href={link.href}
					>
						{link.label}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
