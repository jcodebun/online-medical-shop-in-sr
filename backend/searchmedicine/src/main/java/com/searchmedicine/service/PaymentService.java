package com.searchmedicine.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.searchmedicine.entity.PaymentEntity;
import com.searchmedicine.repository.PaymentRepository;

@Service
public class PaymentService {

	@Autowired
	PaymentRepository paymentRepository;
	
	public String createPayment(PaymentEntity entity) {
		System.out.println("Order ID: "+entity.getOrderid());
	  	paymentRepository.save(entity);
	  	return "Payment Sucessfully Done";
	}
	
	public List<PaymentEntity> list() {
		return	paymentRepository.findAll();	  	
	}
	
	public List<PaymentEntity> list(long id) {
		return	paymentRepository.findByUserid(id);	  	
	}
}
