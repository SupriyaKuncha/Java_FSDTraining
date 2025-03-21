package com.ems.EMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ems.EMS.model.Employee;
import com.ems.EMS.model.EmsAppConfig;
import com.ems.EMS.model.HR;
import com.ems.EMS.model.Payroll;
import com.ems.EMS.model.Performance;
import com.ems.EMS.service.EmployeeService;
import com.ems.EMS.service.HRService;
import com.ems.EMS.service.PayrollService;
import com.ems.EMS.service.PerformanceService;

@SpringBootApplication
public class EmsApplication {

	public static void main(String[] args) {
		
		
////		ApplicationContext context = new ClassPathXmlApplicationContext("emsConfiguration.xml");
//		ApplicationContext context = new AnnotationConfigApplicationContext(EmsAppConfig.class);
//		Employee emp = context.getBean("employee", Employee.class);
//		Employee emp2 = context.getBean("employee", Employee.class);
//		Payroll payroll = context.getBean("payroll", Payroll.class);
//		Performance performance = context.getBean("performance", Performance.class);
//		HR hr = context.getBean("hr",HR.class);
//		
//
////		System.out.println(emp);
//
//		System.out.println();
//		System.out.println("Calculated salary: " + payroll.calculateSalary());
//		System.out.println(performance);
//		System.out.println();
//		System.out.println("**** HR employee details *****");
//		hr.displayEmployees();
		
	ApplicationContext context = new AnnotationConfigApplicationContext(EmsAppConfig.class);
	
	// ------------ employee service ------------------------
	System.out.println("-------------- EmployeeService details ------------------");
	System.out.println();
	EmployeeService empService = context.getBean(EmployeeService.class);
	System.out.println("Annual salary: "+empService.calAnnualSalary());
	empService.printEmpDetails();
	System.out.println();
	
	// -------------- HR details ------------------
	
	System.out.println("-------------- HR Service details ------------------");
	System.out.println();
	HRService hrService = context.getBean(HRService.class);
	System.out.println(hrService.getEmpById(2));
	System.out.println();
// -------------- PayRoll details ------------------
	System.out.println("-------------- Payroll Service details ------------------");
	System.out.println();
	PayrollService payrollService = context.getBean(PayrollService.class);
	System.out.println(payrollService.calAnnualbonus());
	System.out.println(payrollService.calAnnualdeduction());
	System.out.println(payrollService.printPayrollDetails());
	System.out.println("-------------- performance Service details ------------------");
	System.out.println();
	PerformanceService performanceService = context.getBean(PerformanceService.class);
	System.out.println(performanceService.IsEligibleForProject());
	System.out.println(performanceService.displayProjectList());
	System.out.println("--------------------------------------------");
	
	
		
		
	}	

}
