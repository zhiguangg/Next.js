async function getPet(name) {
  const petsPromise = await fetch("https://raw.githubusercontent.com/LearnWebCode/bootcamp-pet-data/main/docs/pets.json")
  const pets = await petsPromise.json()
  const pet = pets.filter(pet => name.toUpperCase() === pet.name.toUpperCase())[0]
  return pet
}

export default async function ({ params }) {
  const pet = await getPet(params.name)
  return (
    <>
      <p>{pet.name}</p>
      <p>{pet.birthdate}</p>
      <p>{pet.description}</p>
      {pet.photo && <img src={pet.photo}></img>}
    </>
  )
}
