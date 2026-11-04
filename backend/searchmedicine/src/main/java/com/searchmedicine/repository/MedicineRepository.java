package com.searchmedicine.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.searchmedicine.entity.MedicineEntity;


public interface MedicineRepository extends JpaRepository<MedicineEntity, Long> {

	public MedicineEntity findById(long id);
	public List<MedicineEntity> findByMedicineName(String medicineName);
}
