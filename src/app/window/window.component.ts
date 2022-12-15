import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  public result: Result = new Result([], "");
  public receivedNumbers : number[] = [];
  public numbersToSort : number[] = [];
  public orderSort : string = "";
checkoutForm: any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.numbersToSort);
    this.result = new Result(this.numbersToSort, this.orderSort);
    console.log(this.result);
    this.http.post<Result>('http://localhost:8080/numbers/sort-command',
    this.result)
    .subscribe(data => {
        // console.log(data);
        this.receivedNumbers = data.numbers;
        console.log("Received numbers: " + this.receivedNumbers)
    })
  }

}

class Result{
  constructor (public numbers : number[],
    public order : string) {

  }
}