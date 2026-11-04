package com.searchmedicine.ctl;

import java.util.List;

import javax.persistence.PostRemove;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.searchmedicine.dto.MedicineResponseDTO;
import com.searchmedicine.entity.MedicineEntity;
import com.searchmedicine.entity.User;
import com.searchmedicine.service.MedicineServcie;
import com.searchmedicine.service.UserService;


@RestController
public class MedicineController {
	
	
	@Autowired
	public MedicineServcie medicineService;
	
	//@PreAuthorize("hasAnyAuthority('Admin')")
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/addmedicine")
	public ResponseEntity<?> addMedicine(@RequestBody MedicineEntity entity) {
		
		System.out.println(entity.toString());

		ResponseEntity<?> medicineEntity = medicineService.CreateMedicine(entity);
		System.out.println("userEntity:" + medicineEntity);
		
		return medicineEntity;
	}
	
	//@PreAuthorize("hasAnyAuthority('Admin')")
	@CrossOrigin(origins = "http://localhost:3000")
	@PatchMapping("/updatemedicine")
	public MedicineEntity updateMedicine(@RequestBody MedicineEntity entity) {
		
		System.out.println(entity.toString());

		MedicineEntity medicineEntity = medicineService.UpdateMedicine(entity);
		System.out.println("medicineEntity:" + medicineEntity);
		
		return medicineEntity;
	}
	
	//@PreAuthorize("hasAnyAuthority('Admin')")
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/deletemedicine")
	public String deleteMedicine(@RequestParam long id) {
		System.out.println("Delete id at ctl: "+id);
		String msg = medicineService.DeleteMedicine(id);
		return msg;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/getmedicine")
	public MedicineResponseDTO Tickets() {
		List<MedicineEntity> list = medicineService.getMedicineDetail();
		return new MedicineResponseDTO(list, null);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/findmedicine")
	public List<MedicineEntity> FindMedicineByName(@RequestParam String medicineName) {
		System.out.println("Search by medicine Name: "+medicineName);
		List<MedicineEntity> list = medicineService.findMedicineByName(medicineName);
		return list;
	}
	
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/medicine")
	public MedicineResponseDTO FindMedicineById(@RequestParam long id) {
		
		MedicineEntity medicine = medicineService.findMedicineById(id);
		return new MedicineResponseDTO(null, medicine);
	}

}
