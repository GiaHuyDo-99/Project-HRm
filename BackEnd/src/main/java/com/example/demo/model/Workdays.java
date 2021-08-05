package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "workdays")
public class Workdays {

	private long id;
	private String fullName;
	private String employeeID;
	private String basicWorkday;
	private String actualWorkday;
	private String leaveDay;
	private String unpaidLeaveDay;
	private String restWorkday;
	private String earlyLate;
	private String workdayOT;
	private String restLeave;
	
	
	public Workdays() {
		
	}
	

	
	public Workdays(long id, String fullName, String employeeID, String basicWorkday, String actualWorkday,
			String leaveDay, String unpaidLeaveDay, String restWorkday, String earlyLate, String workdayOT,
			String restLeave) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.employeeID = employeeID;
		this.basicWorkday = basicWorkday;
		this.actualWorkday = actualWorkday;
		this.leaveDay = leaveDay;
		this.unpaidLeaveDay = unpaidLeaveDay;
		this.restWorkday = restWorkday;
		this.earlyLate = earlyLate;
		this.workdayOT = workdayOT;
		this.restLeave = restLeave;
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
	
	@Column(name = "employeeID", nullable = false)
	public String getEmployeeID() {
		return employeeID;
	}
	public void setEmployeeID(String employeeID) {
		this.employeeID = employeeID;
	}
	
	@Column(name = "basicWorkday", nullable = false)
	public String getBasicWorkday() {
		return basicWorkday;
	}
	public void setBasicWorkday(String basicWorkday) {
		this.basicWorkday = basicWorkday;
	}

	@Column(name = "actualWorkday", nullable = false)
	public String getActualWorkday() {
		return actualWorkday;
	}
	public void setActualWorkday(String actualWorkday) {
		this.actualWorkday = actualWorkday;
	}
	
	@Column(name = "leaveDay", nullable = false)
	public String getLeaveDay() {
		return leaveDay;
	}
	public void setLeaveDay(String leaveDay) {
		this.leaveDay = leaveDay;
	}
	
	@Column(name = "unpaidLeaveDay", nullable = false)
	public String getUnpaidLeaveDay() {
		return unpaidLeaveDay;
	}
	public void setUnpaidLeaveDay(String unpaidLeaveDay) {
		this.unpaidLeaveDay = unpaidLeaveDay;
	}
	
	@Column(name = "restWorkday", nullable = false)
	public String getRestWorkday() {
		return restWorkday;
	}
	public void setRestWorkday(String restWorkday) {
		this.restWorkday = restWorkday;
	}
	
	@Column(name = "earlyLate", nullable = false)
	public String getEarlyLate() {
		return earlyLate;
	}
	public void setEarlyLate(String earlyLate) {
		this.earlyLate = earlyLate;
	}
	
	@Column(name = "workdayOT", nullable = false)
	public String getWorkdayOT() {
		return workdayOT;
	}
	public void setWorkdayOT(String workdayOT) {
		this.workdayOT = workdayOT;
	}

	@Column(name = "restLeave", nullable = false)
	public String getRestLeave() {
		return restLeave;
	}
	public void setRestLeave(String restLeave) {
		this.restLeave = restLeave;
	}
	
}
