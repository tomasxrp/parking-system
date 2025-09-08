package com.example.estacionamiento_back.repository;

import com.example.estacionamiento_back.model.Vehiculo;
import org.springframework.data.repository.CrudRepository;

public interface VehiculoRepository  extends CrudRepository<Vehiculo,Long> {
}
