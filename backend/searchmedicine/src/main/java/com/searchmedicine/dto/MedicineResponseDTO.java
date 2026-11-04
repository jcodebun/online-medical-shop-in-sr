package com.searchmedicine.dto;

import java.util.List;

import com.searchmedicine.entity.MedicineEntity;
import com.searchmedicine.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicineResponseDTO {

private List<MedicineEntity> medicines;
	
	private MedicineEntity medicineDto;
}
