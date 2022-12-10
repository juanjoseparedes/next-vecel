import { useRouter } from "next/router"
import Link from "next/link"
import { CSSProperties, FunctionComponent, ReactNode } from "react"

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props {
    text: string;
    href: string;
}

export const ActiveLink:  FunctionComponent<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={href} legacyBehavior>
            <a style={ asPath === href ? style : undefined }>{text}</a>
        </Link>
    )
}