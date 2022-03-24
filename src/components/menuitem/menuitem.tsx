import Link from "next/link";

const MenuItem = (props) => {
  return (
    <Link href={"/"+props.title}>
      <a className="uppercase font-bold decoration-cyan-400 underline-4 hover:underline decoration-4 underline-offset-3">{props.title}</a>
    </Link>
  )
}
export default MenuItem;