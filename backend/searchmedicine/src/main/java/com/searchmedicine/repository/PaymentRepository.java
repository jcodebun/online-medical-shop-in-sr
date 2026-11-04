package com.searchmedicine.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.searchmedicine.entity.PaymentEntity;

public interface PaymentRepository extends JpaRepository<PaymentEntity, Long> {
	
	public List<PaymentEntity> findByUserid(long id); 

}
