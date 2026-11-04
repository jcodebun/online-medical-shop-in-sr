package com.searchmedicine.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.searchmedicine.entity.MedicineEntity;
import com.searchmedicine.entity.UserOrderEntity;
import com.searchmedicine.repository.MedicineRepository;
import com.searchmedicine.repository.UserOrderRepository;

@Service
public class UserOrderService {
	
	@Autowired
	UserOrderRepository userOrderRepository;
	
	@Autowired
	MedicineRepository medicineRepository;

	public UserOrderEntity createOrder(UserOrderEntity entity) {
		
		UserOrderEntity orderEntity = userOrderRepository.save(entity);
		
		long bookingQuntity = entity.getQuantity();
		long medicineId = entity.getMedicineid();
		if(bookingQuntity>0) {
		MedicineEntity medicineEntiry =	medicineRepository.getById(medicineId);
		
		long preQuantity = medicineEntiry.getQuantity();
		
		medicineEntiry.setQuantity(preQuantity-bookingQuntity);
		medicineRepository.saveAndFlush(medicineEntiry);
		}
		
		return orderEntity;
	}
	
	public List<UserOrderEntity> list(){		
		return userOrderRepository.findAll();
	}
	
	public List<UserOrderEntity> list(long id){		
		return userOrderRepository.findByUserid(id);
	}
	
	public UserOrderEntity update(UserOrderEntity entity) {
		return userOrderRepository.saveAndFlush(entity);
	}
	
	public UserOrderEntity findById(long id) {
		
		return userOrderRepository.findById(id);
	}
	
}
