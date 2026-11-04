package com.searchmedicine.dto;

import java.util.List;

import com.searchmedicine.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDTO {

	private List<User> users;
	
	private User eDto;
}
