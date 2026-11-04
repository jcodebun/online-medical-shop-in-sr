package com.searchmedicine.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.searchmedicine.dto.UserResponseDTO;
import com.searchmedicine.entity.User;
import com.searchmedicine.service.UserService;

@RestController
public class UserController {

	@Autowired
	public UserService userService;

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/registration")
	public ResponseEntity<?> createUser(@RequestBody User entity) {

		System.out.println(entity.toString());

		ResponseEntity<?> userEntity = userService.CreateUser(entity);
		System.out.println("userEntity:" + userEntity);

		return userEntity;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/users")
	public UserResponseDTO list() {
		List<User> list = userService.list();
		return new UserResponseDTO(list, null);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/user")
	public UserResponseDTO findUserById(@RequestParam long id) {
		User user = userService.findUserById(id);
		return new UserResponseDTO(null, user);
	}
	
	 @CrossOrigin(origins = "http://localhost:3000")
	 @PatchMapping("/editUser")
	 public User UpdateUser(@RequestBody User event) {
		 User entity =  userService.update(event);
	  
	  return entity;
	 }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @DeleteMapping("/deleteUser")
	 public String deleteUser(@RequestParam long id) {
	   try {
		   userService.delete(id);
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	 return "Deleted";
	 }
	
}
