import Link from 'next/link'
export function Botons({bg, name, link} ) {
  return (
    <>
      <Link
        className={bg+" py-1 px-2  text-white rounded"} type='button'
        href={link}>
        {name}
      </Link>
    </>
  );
}

