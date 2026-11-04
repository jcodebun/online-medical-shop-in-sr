package com.searchmedicine.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.searchmedicine.entity.UserOrderEntity;

public interface UserOrderRepository extends JpaRepository<UserOrderEntity, Long> {
	
   public UserOrderEntity findById(long id); 
   
   public List<UserOrderEntity> findByUserid(long id);

}
