import { Component, OnInit } from '@angular/core';
import { SupremeService } from 'src/app/services/alo/supreme/supreme.service'

@Component({
  selector: 'app-supreme-logs',
  templateUrl: './supreme-logs.component.html',
  styleUrls: ['./supreme-logs.component.css']
})
export class SupremeLogsComponent implements OnInit {

  constructor(
    private http: SupremeService,
  ) { }

  async ngOnInit() {
    // await this.http.getItems()
    //   .then( w => {
    //     console.log(w);
    //   })
    //   .catch( e => {
    //     console.log(e);
    //   })
    console.log(await this.http.getItems())
  }


}
