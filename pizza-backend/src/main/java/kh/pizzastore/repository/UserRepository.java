package kh.pizzastore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kh.pizzastore.entity.PizzaUser;

public interface UserRepository extends JpaRepository<PizzaUser, Long> {
	PizzaUser findByUsername(String username);

	PizzaUser findByUsernameAndPassword(String username, String password);
}