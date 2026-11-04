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
@Table(name = "userorder")
public class UserOrderEntity {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "medicineid", columnDefinition = "BIGINT default 0")
	private long medicineid;
	
	@Column(name = "userid", columnDefinition = "BIGINT default 0")
	private long userid;
	
	@Column(name = "quantity", columnDefinition = "BIGINT default 0")
	private long quantity;
	
	@Column(name = "totalPrice", columnDefinition = "BIGINT default 0")
	private long totalPrice;

	@Column(name = "medicineName", length = 755)
	private String medicineName;
	
	@Column(name = "paymentStatus", length = 755)
	private String paymentStatus;

	@Override
	public String toString() {
		return "UserOrderEntity [id=" + id + ", medicineid=" + medicineid + ", userid=" + userid + ", quantity="
				+ quantity + ", medicineName=" + medicineName + "]";
	}
	
	
	
	
}
