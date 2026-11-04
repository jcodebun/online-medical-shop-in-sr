package com.searchmedicine.dto;

import java.util.List;

import com.searchmedicine.entity.PaymentEntity;
import com.searchmedicine.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResponseDTO {

	private List<PaymentEntity> payments;	
	private PaymentEntity payment;
}
