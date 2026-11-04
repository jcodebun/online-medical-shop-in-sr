package com.searchmedicine.ctl;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.searchmedicine.dto.OrderResponseDTO;
import com.searchmedicine.entity.UserOrderEntity;
import com.searchmedicine.model.Role;
import com.searchmedicine.service.UserOrderService;

@RestController
public class UserOrderController {
	
	@Autowired
	UserOrderService userOrderService;
	
	//@PreAuthorize("hasAnyAuthority('User')")
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/user/createorder")
	public UserOrderEntity createOrder(@RequestBody UserOrderEntity entity) {
		entity.setPaymentStatus("Pending");
		UserOrderEntity orderEntity =  userOrderService.createOrder(entity);
		
		return orderEntity;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/orderlist")
	public OrderResponseDTO list() {
		
		List<UserOrderEntity> list =  userOrderService.list();
		
		return new OrderResponseDTO(list, null);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/orderbyuser")
	public OrderResponseDTO list(@RequestParam long id) {
		
		List<UserOrderEntity> list =  userOrderService.list(id);
		
		return new OrderResponseDTO(list, null);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/order")
	public OrderResponseDTO findById(@RequestParam long id) {
		
		UserOrderEntity order =  userOrderService.findById(id);
		
		return new OrderResponseDTO(null, order);
	}

}
