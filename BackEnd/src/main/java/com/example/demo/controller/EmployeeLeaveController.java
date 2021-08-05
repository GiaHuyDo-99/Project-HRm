package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.EmployeeLeave;
import com.example.demo.repository.EmployeeLeaveRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3")
public class EmployeeLeaveController {
	@Autowired
	private EmployeeLeaveRepository employeeLeaveRepository;

	@GetMapping("/employeeApplication")
	public List<EmployeeLeave> getAllEmployeeLeave() {
		return employeeLeaveRepository.findAll();
	}

	@PostMapping("/employeeApplication")
	public EmployeeLeave createEmployeeLeave(@Validated @RequestBody EmployeeLeave employeeleave) {
		return employeeLeaveRepository.save(employeeleave);
	}

}