import logo from './logo.svg';
import './App.css';

function App() {
  // let a=8
  // console.log(a)
  // a=3
  // console.log(a)

  // const b=8
  // console.log(b)

  // function sayHello()
  // { console.log("hello khuSHI")}
  // sayHello();
  
  // const sayHello = ()=> console.log("ES5 functiona - Hello world")
  // sayHello()

  // var sayHello = ()=> console.log("rajesh") 
  // setTimeout(sayHello,2000)

  // var sayHello = (name)=> console.log("jsksjsj" +name )
  // sayHello(sayHello("shikha"),2000)

  // var sayHello=(firstname,lastname) => console.log("mhow " +firstname +lastname )
  // sayHello(sayHello("khushi ","bansal ", 2000))
  // let promiseArgument = (resolve, reject) =>
  // {
  // setTimeout(()=>
  // {
  // let currTime = new Date().getTime();
  // if(currTime %2 === 0)
  // {
  // resolve("Success!!")
  // }
  // else
  // {
  // reject("Failed!!")
  // }
  // }, 2000)
  // };
  // let myPromise = new Promise(promiseArgument);
  // console.log("result:"+myPromise);

  
//   let myPromise = new Promise( (resolve, reject)=>
// {
// setTimeout(()=>
// {
// let currTime = new Date().getTime();
// if(currTime %2 === 0)
// {
// console.log("success------")
// resolve("Success!!")
// }
// else
// {
// console.log("fails------")
// reject("Failed!!")
// }
// }, 1000)
// });
// console.log("result:"+myPromise);

// class Student{
//   Name
//   Age
//   RollNo
//   Email
//   constructor( Name,Age,RollNo,Email)
//   {
//   this.Name = Name
//   this.Age = Age;
//   this.RollNo = RollNo;
//   this.Email = Email;
//   }
//   //Student()
//   // {
//   // console.log("Name: "+this.Name)
//   // console.log("Age: "+this.Age)
//   // console.log("RollNo: "+this.RollNo)
//   // console.log("Email: "+this.Email)
//   // }
// }

// let student = new Student()
// student.Age = 11
// student.Name = "Aditya"
// student.RollNo = 111
// student.Email = "abc@student.com"
// //let aditya = new Student("Gupta", 22, 101, "email@gmail.com")
// //aditya.printStudent()
// //console.log(aditya)
// console.log("student :"+student.Age)

let promiseArgument = (Resolve, reject) =>
{
  setTimeout(() =>
  {
    let currTime= new Date().getTime();
    if (currTime%2 === 0)
    {
      Resolve("success")
    }
    else
    {
      reject("failed")
    }
  }, 1000);
};
let myPromise= new Promise(promiseArgument);
console.log("result" + myPromise);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
