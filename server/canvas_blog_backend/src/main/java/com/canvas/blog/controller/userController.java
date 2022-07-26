package com.canvas.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.canvas.blog.models.User;
import com.canvas.blog.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class userController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return this.userService.save(user);
	}
}
