import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href, style, className }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </Link>
  );
};

export default ActiveLink;
