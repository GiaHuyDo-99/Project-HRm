package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employeeLeave")
public class EmployeeLeave {

	private long id;
	private String fullName;
	private String content;
	private String time;
	
	public EmployeeLeave() {
		
	}
	

	public EmployeeLeave(long id, String fullName, String content, String time) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.content = content;
		this.time = time;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "fullName", nullable = false)
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	
	@Column(name = "content", nullable = false)
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	@Column(name = "time", nullable = false)
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}


	
}