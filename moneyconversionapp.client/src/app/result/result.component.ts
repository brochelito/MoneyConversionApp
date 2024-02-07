import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit { 
  result: string = '';
  result$: Observable<string> = new Observable<string>();
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const amount = this.route.snapshot.paramMap.get('amount');
    this.apiService.getResult(Number(amount)).subscribe(
      (resultValue: string) => {     
        this.result = resultValue;      
      },
      (error) => {      
        console.error('Error fetching result:', error);
      }
    );
  }  
}
