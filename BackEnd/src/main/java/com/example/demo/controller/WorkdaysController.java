package com.example.demo.controller;


import java.util.HashMap;

import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Workdays;
import com.example.demo.repository.WorkdaysRepository;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v4")
public class WorkdaysController {
	@Autowired
	private WorkdaysRepository workdaysRepository;

	@GetMapping("/workdays")
	public List<Workdays> getAllWorkdays() {
		return workdaysRepository.findAll();
	}



	@PostMapping("/workdays")
	public Workdays createWorkdays(@Validated @RequestBody Workdays workdays) {
		return workdaysRepository.save(workdays);
	}



	@DeleteMapping("/workdays/{id}")
	public Map<String, Boolean> deleteWorkdays(@PathVariable(value = "id") Long workdaysId)
			throws ResourceNotFoundException {
		Workdays workdays = workdaysRepository.findById(workdaysId)
				.orElseThrow(() -> new ResourceNotFoundException("Workday not found for this id :: " + workdaysId));

		workdaysRepository.delete(workdays);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
