import Link from "next/link";

type ButtonProps = {
    type: 'button' | 'submit' ;
    title: string;
    icon?: string;
    variant: string,
    fontSize: string,
    link?: string
}

const Button = (
    {type, title, link, icon, variant, fontSize} : ButtonProps
) => {
  return (
    <button 
    className={`flexCenter rounded-md ${variant}`}
    type={type}>
        <Link href={`${link}`} className={`${fontSize} py-1  px-2  whitespace-nowrap cursor-pointer`}>
            {title}
        </Link>
    </button>
  )
}

export default Button