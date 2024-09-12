package kh.pizzastore.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PostLoad;
import jakarta.persistence.Transient;
import lombok.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PizzaProduct {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	private String image;

	private String description;

	private int priceM;

	private int priceL;

	private String ingredients;

	private String details;

	@PostLoad
	private void convertStringToIngredients() {
		if (this.ingredients != null && !this.ingredients.isEmpty()) {
			this.ingredientsList = Arrays.stream(this.ingredients.split(",")).map(String::trim)
					.collect(Collectors.toList());
		}
	}

	@Transient
	private List<String> ingredientsList;

	public List<String> getIngredientsList() {
		return ingredientsList;
	}
}
