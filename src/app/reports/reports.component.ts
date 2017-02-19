import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector:'reports',
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {
  reportForm: FormGroup;
  reportObj: any;
  inReportView: boolean = true;
  reportTypes: string[];
  reportRequestObj: any;

  constructor(private _formBuilder: FormBuilder) { 
    this.reportTypes = ['ABC', 
                        'DEF', 
                        'GHI',
                        'JKL', 
                        'MNO', 
                        'PQR',
                        'STU',
                        'VWX',
                        'YZ'];
    this.reportRequestObj = {
        "category": null,
        "fromDate": null,
        "toDate":  null
    };

  }

  ngOnInit() {
    this.reportForm = this._formBuilder.group({
      reportType : ['', Validators.required],
      fromDate : ['', Validators.required],
      toDate : ['', Validators.required]
    });

    this.reportObj = {
      "metadata" : {
        "title" : 'User wise workflow execution',
        "size": 10,
        "totalRecords": 3,
        "collection": true,
        "columns" : [
          {
            "key": "username",
            "headerText" : "Username",
            "dataType":"string",
            "width": 3
          },
          {
            "key": "firstName",
            "headerText" : "First Name",
            "dataType":"string",
            "width": 3
          },
          {
            "key": "lastName",
            "headerText" : "Last Name",
            "dataType":"string",
            "width": 3
          },
          {
            "key": "email",
            "headerText" : "Email",
            "dataType":"string",
            "width": 3
          }
        ],
        "outputRow" : ["Total",	"20",	"26",	"46"]
      },

      "dataSource" : [
        {
          "uid" : "1",
          "data" : ["uttam", "Uttam", "Arade","uttam@abc.com"],
          "expanded" : false,
          "containerDataSource" : null
        },
        {
          "uid" : "2",
          "data" : ["kshitij", "Kshitij", "Arade","kshitij@abc.com"],
          "expanded" : false,
          "containerDataSource" : null
        },
        {
          "uid" : "3",
          "data" : ["shivaji", "Shivaji", "Arade","shivaji@abc.com"],
          "expanded" : false,
          "containerDataSource" : null
        }
      ]
    };

  }

  generateReport() {
    this.inReportView = true;
  }

  closeReport(value) {
    this.reportForm.reset;
    this.reportRequestObj.category =  null;
    this.reportRequestObj.fromDate =  null;
    this.reportRequestObj.toDate =  null;

    this.inReportView = value;
  }

}
