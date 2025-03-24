interface Props {
    title?: string
    navTitle?: string[]
}

const Header: React.FC<Props> = ({
    title = 'MangaDiary',
    navTitle = ['Manga', 'Manhwa'],
}) => {
    return (
        <div className="flex h-[50px] items-center justify-between bg-red-50 px-7 text-2xl font-bold">
            <div>{title}</div>
            <nav className="flex space-x-4">
                {navTitle.map((navItem, idx) => (
                    <li className="list-none" key={idx}>
                        {navItem}
                    </li>
                ))}
            </nav>
        </div>
    )
}

export default Header
