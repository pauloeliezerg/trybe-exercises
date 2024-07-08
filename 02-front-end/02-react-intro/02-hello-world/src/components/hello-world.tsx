import Title from "./title"
import ModuleDetails from "./module-details"
import { calculateAge } from "../utils/age"

function HelloWorld() {
  const name = 'Lorem Ipsum';
  const birthDate = '1/1/2000';
  const age = calculateAge(birthDate);

  return (
    <>
      <h1>{name}</h1>
      <p>{`Age: ${age}`}</p>
      <Title></Title>
      <ModuleDetails></ModuleDetails>
    </>
  )
}

export default HelloWorld
