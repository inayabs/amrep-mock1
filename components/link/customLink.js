import Link from "next/link";

const CustomLink = ({link,...rest}) => {
    return (
        <Link href={link.href}>
            <a {...rest} className="text-base font-medium text-gray-500 hover:text-gray-900">
                {link.name}
            </a>
        </Link>
    )
}
 
export default CustomLink;