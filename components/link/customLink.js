import Link from "next/link";

const CustomLink = ({link,...rest}) => {
    return (
        <Link href={link.href}>
            <a {...rest} />
        </Link>
    )
}
 
export default CustomLink;