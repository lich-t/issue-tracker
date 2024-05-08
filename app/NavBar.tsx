import Link from "next/link";
import { BugOff } from "lucide-react";

const NavBar = () => {
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
						className="text-zinc-600 hover:text-zinc-900 transition-colors"
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
