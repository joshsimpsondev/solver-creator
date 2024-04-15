import { revalidatePath } from "next/cache";
import Link from "next/link";

export function Sidebar() {
    const navItems = [{
        name: "Home",
        href: "/"
    }, {
        name: "Solvers",
        href: "/solvers"
    }, {
        name: "About",
        href: "/about"
    }]
    return <div className="bg-gray-800 text-white">
        <nav className="">
            <ul className="py-3 flex flex-col space-y-1 px-6 ">
                <li>
                    <span className="text-xl pt-10 px-2 whitespace-nowrap pb-5 h-7 font-semibold">Solver Creator</span>
                </li>
                {
                    navItems.map((x) => (<SidebarItem name={x.name} href={x.href} key={x.name} />))
                }
            </ul>
        </nav>
    </div>
}

type SidebarItemProps = {
    name: string;
    href: string;
}

function SidebarItem(props: SidebarItemProps) {
    const {name, href} = props;

    return <li>
        <Link href={href} className="block py-3 px-2 rounded transition-colors hover:bg-gray-700">{name}</Link>
    </li>
}

