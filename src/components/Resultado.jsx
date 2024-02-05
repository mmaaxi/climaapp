import useClima from "../hooks/useClima"

function Resultado() {
  const { resultado } = useClima()
  const { name } = resultado
  return (
    <div className="contenedor">
      <h2>El clima de {name} es: </h2>
    </div>
  )
}

export default Resultado