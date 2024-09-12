package kh.pizzastore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kh.pizzastore.entity.PizzaProduct;

public interface ProductRepository extends JpaRepository<PizzaProduct, Long> {
}
