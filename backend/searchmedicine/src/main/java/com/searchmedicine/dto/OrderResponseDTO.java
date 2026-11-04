package com.searchmedicine.dto;

import java.util.List;

import com.searchmedicine.entity.UserOrderEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponseDTO {

 private List<UserOrderEntity> orders;
	
 private UserOrderEntity order;
}
