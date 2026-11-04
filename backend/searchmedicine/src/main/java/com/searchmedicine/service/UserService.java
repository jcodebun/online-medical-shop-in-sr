package com.searchmedicine.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.searchmedicine.entity.User;
import com.searchmedicine.exception.RecordNotFoundException;
import com.searchmedicine.repository.UserRepository;

@Service
public class UserService  {
	
	@Autowired
	public UserRepository userRepository;

	
	public ResponseEntity<?> CreateUser(User entity) {
		User userEntity = null;
		try {
			User user = userRepository.findByUsername(entity.getUsername());
			if(user == null) {
				userEntity = userRepository.save(entity);
			}else {
				return new ResponseEntity<>(userEntity,HttpStatus.BAD_REQUEST);
			}
		}catch (Exception e) {
			
			throw new RecordNotFoundException("User name is already available");
			
		}
		return new ResponseEntity<>(userEntity,HttpStatus.OK);
	}
	
	public List<User> list(){
	return	userRepository.findAll();
	}

	public User findUserById(long id) {
		return userRepository.findById(id);
	}
	
	public User update(User user) {
		return userRepository.saveAndFlush(user);
	}
	
	public void delete(long id) {
		 userRepository.deleteById(id);
	}
	
}
