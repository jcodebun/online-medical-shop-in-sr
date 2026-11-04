package com.searchmedicine.ctl;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

	@GetMapping("/welcome")
	public String WelcomeMsg() {
		return "Welcome To Search Medicine";
	}

}
