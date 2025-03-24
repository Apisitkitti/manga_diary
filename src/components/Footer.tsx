interface Props {
    title?: string
}

const Footer: React.FC<Props> = ({
    title = 'Thank you for visited MangaDiary website',
}) => {
    return <div className="text-center">{title}</div>
}
export default Footer
