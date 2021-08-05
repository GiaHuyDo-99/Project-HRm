import { Component, OnInit, ViewChild,ChangeDetectorRef ,ElementRef} from '@angular/core';
import { Chart } from "chart.js";
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { EmployeeService ,SalaryService, WorkdayService ,HomeService} from 'src/app/common/service/index';
import { Employee,SalaryModel,WorkdaysModel ,EmployeeApplicationModel} from "src/app/common/model/index";

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {
  constructor(private elementRef: ElementRef,private _cdref:ChangeDetectorRef,
              private employeeSevice: EmployeeService,
              private salarySevice: SalaryService,
              private workdayService:WorkdayService,
              private homeService: HomeService
    ) { }
  employees: Employee[];
  salary: SalaryModel[];
  workdays: WorkdaysModel[]
  employeeLeave:EmployeeApplicationModel[]
  public chart: Chart;
  // data: [{ x: '2016-12-25', y: 20 }, { x: '2016-12-26', y: 10 }]
  @ViewChild('barChart', { static: false }) private chartRef: ElementRef;
  @ViewChild('pdfTable') pdfTable: ElementRef;
  ngAfterViewInit() {
      // console.log(this.chartRef.nativeElement);
      // this._cdref.detectChanges();
      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          label: "Salary (millions)",
          backgroundColor: [ "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#8e5ea2","#3cba9f","#e8c3b9","#c45850",],
          data:[100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Total salary (millions) in year',
        fontSize: 20
      },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            
            ticks: {
              beginAtZero: true,
              fontSize: 20
            }
          }
        ],
        xAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 20,
            }
          }]
      }
    }
      })
  }
  ngOnInit() {
    this.getEmployees();
    this.getSalaryList();
    this.getWorkdayList();
    this.getListEmployeeApplication();
  }


  private getEmployees(){
    this.employeeSevice.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(this.employees)
    });
  }
  private getSalaryList(){
    this.salarySevice.getSalaryList().subscribe(data => {
      this.salary = data;
    });
  }
  private getWorkdayList(){
    this.workdayService.getWordayList().subscribe(data => {
      this.workdays = data;
    });
  }
  private getListEmployeeApplication(){
    this.homeService.getListEmployeeApplication().subscribe(data => {
      this.employeeLeave = data;
      // console.log(this.employeeLeave)
    });
  }

  public downloadAsPDF() {
    const doc = new jsPDF();
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
     
  }
}
