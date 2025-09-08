package com.example.estacionamiento_back.controller;


import com.example.estacionamiento_back.model.Vehiculo;
import com.example.estacionamiento_back.repository.VehiculoRepository;
import com.example.estacionamiento_back.service.VehiculoService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/vehiculos")
public class VehiculoController {

    private VehiculoService vehiculoService;

    public VehiculoController(VehiculoService vehiculoService) {
        this.vehiculoService = vehiculoService;
    }

    @GetMapping
    public ArrayList obtenerVehiculos(){//funcionando
        return vehiculoService.obtenerVehiculos();
    }

    @GetMapping("/{patente}")
    public Vehiculo obtenerVehiculoPorId(@PathVariable String patente){//funcionando
        return vehiculoService.buscarVehiculoPorPatente(patente);
    }

    @GetMapping("/minutos/{patente}")
    public int obtenerMinutosEstacionado(@PathVariable String patente){//funcionando
        Vehiculo vehiculo = vehiculoService.buscarVehiculoPorPatente(patente);
        if (vehiculo != null){
            return vehiculoService.obtenerMinutosEstacionado(vehiculo);
        }
        return -1;
    }

    @PostMapping
    public Vehiculo guardarVehiculo(@RequestBody Vehiculo vehiculo){//funcionando
        return vehiculoService.guardarVehiculo(vehiculo);
    }

    @DeleteMapping("/{id}")//
    public void eliminarVehiculo(@PathVariable Long id){
        vehiculoService.eliminarVehiculoPorId(id);
    }








}
