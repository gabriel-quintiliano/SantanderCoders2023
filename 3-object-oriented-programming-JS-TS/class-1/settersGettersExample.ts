// interface IQuote {

//     qty: number,
//     rate: number | string,
//     total ? : number | string
// }

// abstract class AQuote implements IQuote {
//   abstract set qty(x: number);
//   abstract get qty(): number;
//   abstract set rate(x: number | string);
//   abstract get rate(): number | string;
//   abstract set total(x: number | string);
//   abstract get total(): number | string


//   protected abstract updateTotal(): void
//   abstract getTotalNum(): number


// }

class quote {

  constructor(qty: number, rate: number) {

    this.qty = qty
    this.rate = rate
  }

  set qty(v: number) {
    this._qty = v;
  }

  get qty() {
    return this._qty;
  }

  set rate(v: number | string) {
    this._rate = Number(v);
    this.updateTotal()
  }

  get rate() {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(Number(this._rate))
  }

  set total(v: number | string) {
    this._total = Number(v);
  }

  get total(): number | string {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(Number(this._total))
  }

  getTotalNum() {
    return Number(this._total)
  }

  protected updateTotal() {
    this.total = Number(this._rate) * Number(this._qty)
  }

  private _qty: number = 1;
  private _rate: number | string = 1;
  private _total ? : number | string = (Number(this._rate) * this._qty);

}


let quote1 = new quote(10, 1)
console.log(quote1)
console.log(quote1.qty)
console.log(quote1.rate)

quote1.qty = 20;
quote1.rate = 2;
console.log(quote1.qty)
console.log(quote1.rate)








// class QuoteArray extends Array < quote > {

//   getTotals(): number {
//     let totalFigure: number = 0
//     this.forEach(o => {
//       totalFigure = totalFigure + o.getTotalNum()
//     });
//     return totalFigure
//   }

// }

// let arry: QuoteArray = new QuoteArray();

// arry.push(new quote({
//   qty: 2,
//   rate: 5
// }))

// arry.push(new quote({
//   qty: 3,
//   rate: 5
// }))
// arry.push(new quote({
//   qty: 3,
//   rate: 5
// }))
// arry.push(new quote({
//   qty: 3,
//   rate: 5
// }))
// arry.push(new quote({
//   qty: 3,
//   rate: 5
// }))




// console.log(arry);


// console.log(arry.getTotals())