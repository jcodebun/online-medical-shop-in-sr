package com.searchmedicine.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.searchmedicine.dto.PaymentResponseDTO;
import com.searchmedicine.entity.PaymentEntity;
import com.searchmedicine.entity.UserOrderEntity;
import com.searchmedicine.service.PaymentService;
import com.searchmedicine.service.UserOrderService;

@RestController
public class PaymentController {
	
	@Autowired
	PaymentService paymentService;
	
	@Autowired
	UserOrderService userOrderService;
	
	//@PreAuthorize("hasAnyAuthority('User')")
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/user/createpayment")
	public String createPayment(@RequestBody PaymentEntity entity) {
		System.out.println("Order ID: "+entity.getOrderid());
		long orderId = entity.getOrderid();
		UserOrderEntity userOrderEntity =   userOrderService.findById(orderId);
		
	    String msg = paymentService.createPayment(entity);
	    userOrderEntity.setPaymentStatus("Paid");
	    userOrderService.update(userOrderEntity);
		return msg;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/payments")
	public PaymentResponseDTO list() {
		
	    List<PaymentEntity> list = paymentService.list();
		
		return new PaymentResponseDTO(list, null);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/paymentsbyuser")
	public PaymentResponseDTO list(@RequestParam long id) {
		
	    List<PaymentEntity> list = paymentService.list(id);
		
		return new PaymentResponseDTO(list, null);
	}

}
