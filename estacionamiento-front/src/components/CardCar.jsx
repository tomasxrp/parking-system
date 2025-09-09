

function CardCar({marca, patente, hora_ingreso}) {
    return(
        <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="font-bold text-md">{patente}</h3>
                <p className="text-sm">{marca}</p>
                <p className="text-sm">{hora_ingreso}</p>
        </div>
    );
}

export default CardCar;