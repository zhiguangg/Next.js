import Link from "next/link"

async function getPets() {
  const petPromise = await fetch("https://raw.githubusercontent.com/LearnWebCode/bootcamp-pet-data/main/docs/pets.json")
  const pets = await petPromise.json()
  return pets
}

export default async function Page() {
  const pets = await getPets()
  return (
    <>
      <div>Pet's List</div>
      <ul>
        {pets.map((pet, index) => {
          return (
            <li key={index}>
              <Link href={`/pet/${pet.name.toLowerCase()}`}>{pet.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
