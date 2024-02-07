import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-money-entry',
  templateUrl: './money-entry.component.html',
  styleUrls: ['./money-entry.component.css']
})
export class MoneyEntryComponent implements OnInit {
  moneyForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.moneyForm = this.fb.group({
      amount: [null, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const amountControl = this.moneyForm!.get('amount');
    if (amountControl) {
      const amountValue = amountControl.value;
      this.router.navigate(['/result', amountValue]);
    }
  }
}
