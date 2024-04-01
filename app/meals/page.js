import Link from 'next/link'

export default function Meals() {
  return (
    <>
      <p>
        <Link href="/meals/share">SHARE</Link>
      </p>
      <p>
        <Link href="/meals/meal-1">MEAL1</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">MEAL2</Link>
      </p>
      <h1>MEALS PAGEE</h1>
    </>
  )
}
