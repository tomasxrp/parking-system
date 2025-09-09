import CardCar from "./CardCar";


function CardContainer({listadoVehiculos, setListadoVehiculos}) {
    return (
        <div className="flex flex-col h-full gap-4 mt-6  p-8 rounded-lg border-1 border-gray-300">
            
        {listadoVehiculos.map((vehiculo, index) => (
            <CardCar key={index} {...vehiculo} />
        ))}

        </div>
    );

}
export default CardContainer;