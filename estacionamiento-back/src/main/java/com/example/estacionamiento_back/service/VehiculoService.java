package com.example.estacionamiento_back.service;

import com.example.estacionamiento_back.model.Vehiculo;
import com.example.estacionamiento_back.repository.VehiculoRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class VehiculoService {

    VehiculoRepository vehiculoRepository;

    public VehiculoService(VehiculoRepository vehiculoRepository) {
        this.vehiculoRepository = vehiculoRepository;
    }

    public ArrayList<Vehiculo> obtenerVehiculos(){
        return (ArrayList<Vehiculo>) vehiculoRepository.findAll();
    }

    public Vehiculo buscarVehiculoPorPatente(String patente){
        ArrayList<Vehiculo> listaVehiculos = (ArrayList<Vehiculo>) vehiculoRepository.findAll();
        for (int i = 0; i < listaVehiculos.size(); i++) {
            if (listaVehiculos.get(i).getPatente().equals(patente)){
                return listaVehiculos.get(i);
            }
        }
        return null;
    }

    public Vehiculo guardarVehiculo(Vehiculo vehiculo){
        return vehiculoRepository.save(vehiculo);
    }

    public int obtenerMinutosEstacionado(Vehiculo vehiculo){
        long minutos = java.time.Duration.between(vehiculo.getFechaIngreso(), java.time.LocalDateTime.now()).toMinutes();
        return (int) minutos;
    }

    public void eliminarVehiculoPorId(Long id){
        vehiculoRepository.deleteById(id);
    }
}
