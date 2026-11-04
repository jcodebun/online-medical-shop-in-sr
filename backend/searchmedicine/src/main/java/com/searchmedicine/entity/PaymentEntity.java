package com.searchmedicine.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "payment")
public class PaymentEntity {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "orderid", columnDefinition = "BIGINT default 0")
	private long orderid;
	
	@Column(name = "userid", columnDefinition = "BIGINT default 0")
	private long userid;
	
	
	@Column(name = "cardNumber", length = 755)
	private String cardNumber;
	
	@Column(name = "cardName", length = 755)
	private String cardName;
	
	@Column(name = "expiry", length = 755)
	private String expiry;
	
	@Column(name = "cvv", length = 755)
	private String cvv;
		
	@Column(name = "totalPrice", columnDefinition = "BIGINT default 0")
	long totalPrice;

	
}
