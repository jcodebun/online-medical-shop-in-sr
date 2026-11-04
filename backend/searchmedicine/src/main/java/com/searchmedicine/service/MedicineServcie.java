package com.searchmedicine.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.searchmedicine.entity.MedicineEntity;

import com.searchmedicine.repository.MedicineRepository;



@Service
public class MedicineServcie {

	@Autowired
	public MedicineRepository medicineRepository;

	
	public ResponseEntity<?> CreateMedicine(MedicineEntity entity) {
		
		MedicineEntity medicineEntity = medicineRepository.save(entity);

		return new ResponseEntity<>(entity,HttpStatus.OK);
	}
	
	public MedicineEntity UpdateMedicine(MedicineEntity entity) {
		
		MedicineEntity medicineEntity = medicineRepository.saveAndFlush(entity);
		
		return medicineEntity;
	}
	
    public String DeleteMedicine(long id) {

    	System.out.println("Delete ID: "+id);
		  medicineRepository.deleteById(id);
		
		return "Recorded Deleted Sucessfully";
	}

    public List<MedicineEntity> getMedicineDetail(){
    	
    	List<MedicineEntity> list = medicineRepository.findAll();
    	return list;
    }
    
    public List<MedicineEntity> findMedicineByName(String name) {
    	
    	List<MedicineEntity> entity =	medicineRepository.findByMedicineName(name);
    	return entity;
    }
    
    public MedicineEntity findMedicineById(long id) {
    	return medicineRepository.findById(id);
    }
    
}
