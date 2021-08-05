package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "salaryEmployee")
public class Salary {

	private long id;
	private String firstName;
	private String lastName;
	private String email;
	private int basicSalary;
	private int bonusSalary;
	private int totalSalary;
	public Salary() {
		
	}
	

	
	public Salary(long id, String firstName, String lastName, String email, int basicSalary, int bonusSalary,
			int totalSalary) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.basicSalary = basicSalary;
		this.bonusSalary = bonusSalary;
		this.totalSalary = totalSalary;
	}



	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "first_name", nullable = false)
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	@Column(name = "last_name", nullable = false)
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	@Column(name = "email", nullable = false)
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "basicSalary", nullable = false)
	public int getBasicSalary() {
		return basicSalary;
	}
	public void setBasicSalary(int basicSalary) {
		this.basicSalary = basicSalary;
	}
	@Column(name = "bonusSalary", nullable = false)
	public int getBonusSalary() {
		return bonusSalary;
	}
	public void setBonusSalary(int bonusSalary) {
		this.bonusSalary = bonusSalary;
	}
	@Column(name = "totalSalary", nullable = false)
	public int getTotalSalary() {
		return totalSalary;
	}
	public void setTotalSalary(int totalSalary) {
		this.totalSalary = totalSalary;
	}
	
}
