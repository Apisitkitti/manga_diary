import Link from 'next/link'
interface Props {
    title?: string
    navTitle?: string[]
}

const Header: React.FC<Props> = ({
    title = 'MangaDiary',
    navTitle = ['Manga', 'Manhwa'],
}) => {
    return (
        <div className="flex h-[50px] items-center justify-between bg-[#162556] px-7 text-2xl font-bold text-white">
            <Link href="/">{title}</Link>
            <nav className="flex space-x-4">
                {navTitle.map((navItem, idx) => (
                    <Link
                        href={`/${navItem.toLowerCase()}`}
                        className="hover:underline"
                        key={idx}
                    >
                        {navItem}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Header
