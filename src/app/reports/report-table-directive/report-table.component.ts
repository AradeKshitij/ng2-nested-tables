import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ae-report',
  templateUrl: './report-table.component.html'
})
export class ReportTableComponent implements OnInit {

  @Input() reportObj;
  @Output() closeReportView: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeReport(){
    this.closeReportView.emit(false);
  }

  rowClicked(row) {
    row.expanded = !row.expanded;
    if(row.expanded){
      return this.getReport(row.uid);
    } else {
      return null;
    }
    
  }

  getReport(id) {
    let obj = {
        "metadata" : {
          "user" : id,
          "size": 10,
          "totalRecords": 2,
          "collection": true,
          "columns" : [
            {
              "headerText" : "Workflow",
              "dataType":"string",
              "width": 6
            },
            {
              "headerText" : "Successful",
              "dataType":"number",
              "width": 2
            },
            {
              "headerText" : "Failed",
              "dataType":"number",
              "width": 2
            },
            {
              "headerText" : "Total",
              "dataType":"number",
              "width": 2
            }
          ],
          "outputRow" : ["Total",	"20",	"26",	"46"]
        },

        "dataSource" : [
                        ["Work Flow 1",	"10",	"12",	"22"],
                        ["Work Flow 2",	"10",	"14",	"24"]
                     ]
      }
      //console.log(obj);
      return obj;
  }

}
