package com.searchmedicine.model;

import com.searchmedicine.entity.User;

public class JwtResponse {
    String token;
    
    User userInfo;

    public JwtResponse(String token, User userInfo) {
	
		this.token = token;
		this.userInfo = userInfo;
	}

	public User getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(User userInfo) {
		this.userInfo = userInfo;
	}

	public JwtResponse() {
    }

    public JwtResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
