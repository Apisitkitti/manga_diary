interface Props {
    title?: string
}

const Footer: React.FC<Props> = ({
    title = 'Thank you for visited MangaDiary website',
}) => {
    return (
        <div className="flex h-[50px] items-center justify-center bg-[#162556] align-middle text-2xl text-white">
            {title}
        </div>
    )
}
export default Footer
