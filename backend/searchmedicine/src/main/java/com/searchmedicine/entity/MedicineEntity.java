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
@Table(name = "medicine")
public class MedicineEntity {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "medicineName", length = 755)
	private String medicineName;
	
	@Column(name = "companyName", length = 755)
	private String companyName;
	
	@Column(name = "quantity" ,columnDefinition = "BIGINT default 0")
	private long quantity;
	
	@Column(name = "price" ,columnDefinition = "BIGINT default 0")
	private long price;

	@Override
	public String toString() {
		return "MedicineEntity [id=" + id + ", medicineName=" + medicineName + ", companyName=" + companyName
				+ ", quantity=" + quantity + "]";
	}
	
	
	

}
