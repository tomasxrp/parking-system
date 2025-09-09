import { FaCar, FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

function SideBar({ selected, setSelected }) {
  return (
    <div className="h-screen w-72 bg-gray-800 text-white fixed top-0 left-0">
      <div className="pl-4 pt-20 pr-4">
        <ul className="gap-8 flex flex-col">
          <li
            onClick={() => setSelected("lista")}
            className={`flex items-center gap-2 w-full rounded-md p-2 cursor-pointer ${
              selected === "lista" ? "bg-gray-400 text-black" : "hover:bg-gray-700"
            }`}
          >
            <FaCar /> Lista vehículos
          </li>

          <li
            onClick={() => setSelected("eliminar")}
            className={`flex items-center gap-2 w-full rounded-md p-2 cursor-pointer ${
              selected === "eliminar" ? "bg-gray-400 text-black" : "hover:bg-gray-700"
            }`}
          >
            <AiFillDelete /> Eliminar vehículo
          </li>

          <li
            onClick={() => setSelected("agregar")}
            className={`flex items-center gap-2 w-full rounded-md p-2 cursor-pointer ${
              selected === "agregar" ? "bg-gray-400 text-black" : "hover:bg-gray-700"
            }`}
          >
            <IoMdAdd /> Agregar vehículo
          </li>

          <li
            onClick={() => setSelected("buscar")}
            className={`flex items-center gap-2 w-full rounded-md p-2 cursor-pointer ${
              selected === "buscar" ? "bg-gray-400 text-black" : "hover:bg-gray-700"
            }`}
          >
            <FaSearch /> Buscar vehículo
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
