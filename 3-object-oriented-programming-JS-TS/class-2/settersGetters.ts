interface IMyClass {
    myProperty: number;
}

abstract class AMyClass implements IMyClass{
    abstract set myProperty(value: number);
    abstract get myProperty(): number;
}

class MyClass {
    
    private _myProperty: number = 0;

    constructor(num: number) {
        this.myProperty = num;
    }
  
    get myProperty(): number {
        console.log(`myProperty = ${this._myProperty}`)
      return this._myProperty + 10;
    }

    set myProperty(value: number) {
        this._myProperty = value;
    }

  }

class MyOtherClass extends Myclass{

    constructor(num: number){
      super(num)
      this.someProp = (() => {this._myProperty})
    }
}

//   class MyClassHeir extends MyClass {

//     constructor(num: number){
//         super(num)
//     }
//   }
  
  const instance = new MyClass(32);
//   const instance2 = new MyClassHeir(44);
  
  // Access the property without parentheses
  console.log(instance); // Outputs: 42
  console.log(instance.myProperty); // Outputs: 42
//   console.log(instance2); // Outputs: 42
//   console.log(instance2.myProperty); // Outputs: 42