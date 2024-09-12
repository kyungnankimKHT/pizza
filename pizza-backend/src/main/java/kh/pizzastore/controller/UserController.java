package kh.pizzastore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import kh.pizzastore.entity.PizzaUser;
import kh.pizzastore.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<PizzaUser> registerUser(@RequestBody PizzaUser user) {
		try {
			PizzaUser registeredUser = userService.registerUser(user);
			return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/login")
	public ResponseEntity<PizzaUser> loginUser(@RequestBody PizzaUser user) {
		PizzaUser loggedInUser = userService.loginUser(user.getUsername(), user.getPassword());
		if (loggedInUser != null) {
			return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<PizzaUser> getUserById(@PathVariable("id") Long id) {
		return userService.getUserById(id).map(user -> new ResponseEntity<>(user, HttpStatus.OK))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
}