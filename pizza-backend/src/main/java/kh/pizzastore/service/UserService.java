package kh.pizzastore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.pizzastore.entity.PizzaUser;
import kh.pizzastore.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public PizzaUser registerUser(PizzaUser user) {
		return userRepository.save(user);
	}

	public PizzaUser loginUser(String username, String password) {
		return userRepository.findByUsernameAndPassword(username, password);
	}

	public Optional<PizzaUser> getUserById(Long id) {
		return userRepository.findById(id);
	}
}