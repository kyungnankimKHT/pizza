package kh.pizzastore.service;

import kh.pizzastore.entity.PizzaProduct;
import kh.pizzastore.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public Optional<PizzaProduct> getProductById(Long id) {
		return productRepository.findById(id);
	}

	public List<PizzaProduct> getAllProducts() {
		return productRepository.findAll();
	}
}
