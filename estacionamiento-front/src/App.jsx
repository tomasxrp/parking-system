import { useEffect, useState } from 'react'
import SideBar from './components/sideBar'
import CardContainer from './components/CardContainer';
import './App.css'

function App() {
  const [selected, setSelected] = useState("lista");
  const [listadoVehiculos, setListadoVehiculos] = useState([]);

  const listadoTemporal = [
    { marca: "Toyota", patente: "ABC123", hora_ingreso: "2025-09-09T08:30:00" },
    { marca: "Honda", patente: "DEF456", hora_ingreso: "2025-09-09T09:15:00" },
    { marca: "Ford", patente: "GHI789", hora_ingreso: "2025-09-09T10:45:00" },
    { marca: "Chevrolet", patente: "JKL012", hora_ingreso: "2025-09-09T11:30:00" },
    { marca: "Nissan", patente: "MNO345", hora_ingreso: "2025-09-09T12:00:00" },
    { marca: "BMW", patente: "PQR678", hora_ingreso: "2025-09-09T13:20:00" },
    { marca: "Audi", patente: "STU901", hora_ingreso: "2025-09-09T14:10:00" },
    { marca: "Mercedes", patente: "VWX234", hora_ingreso: "2025-09-09T15:05:00" },
    { marca: "Volkswagen", patente: "YZA567", hora_ingreso: "2025-09-09T16:30:00" },
    { marca: "Hyundai", patente: "BCD890", hora_ingreso: "2025-09-09T17:45:00" },
  ];




  useEffect(()=>{
    setListadoVehiculos(listadoTemporal);
  },[]);

  return (
    <div className="flex">
      <SideBar selected={selected} setSelected={setSelected} />

      <div className="ml-72 flex-1 p-6">
        <h1 className="text-2xl font-bold">Listado de vehiculos</h1>
        <p className="mt-4">
          Aqui se mostraran los vehiculos que actualmente tienes registrados en el sistema.
        </p>

        <CardContainer listadoVehiculos={listadoVehiculos} setListadoVehiculos={setListadoVehiculos} />
      </div>
    </div>
  )
}

export default App
