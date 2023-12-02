import { Link, useRoute } from "wouter";

const ActiveLink = props => {
    const [isActive] = useRoute(props.href);
    const activeClasses = "border rounded-full"
    return (
        <Link {...props}>
            <a className={`px-5 py-1 flex flex-col justify-between ${isActive ? activeClasses : ""}`}>
                {props.children}
            </a>
        </Link>
    );
};

export function Header() {
    return <header className="fixed top-0 left-0 text-white z-10 w-full">
        <div className="mx-auto flex space-x-3 items-center space-x-12 justify-between p-6 lg:px-8">
        <div>
            <a  className="px-5 py-2 border rounded-full flex space-x-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>Exit</span>
            </a>
        </div>
        <nav className="flex-1 flex justify-between items-center">
            <ul className="p-1 m-auto border rounder-full flex space-x-6 justify-between items-center rounded-full">
                <li><ActiveLink href="/exterior">Exterior</ActiveLink></li>
                <li><ActiveLink href="/interior">Interior</ActiveLink></li>
            </ul>
        </nav>
        </div>
    </header>
}