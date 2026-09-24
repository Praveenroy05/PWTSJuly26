// Objects - Collection of key-value pair inside the {key : value}

// {name: "Rahul", age : 30}

// Key inside the object internally will get converted into string

// import datas from '../testdata/a.json'

// console.log(datas);


const human = {name : "Rahul", age : 25}

// objName.key
console.log(human.name)

// objName[key]

console.log(human["age"])


// this - It refers to the current class object


const obj = {
    name : "Priya",
    age : 24,
    city: "New Delhi",
    isEmployed: true,
    skills : ["TS", "JS", "AI", "AI Agent"],
    fun: function(){
        console.log(this.name, this.age, this.city, this.isEmployed, this.skills)
    }
}


console.log(obj.name);
obj.fun()




// class Emp{

//     empid:number

//     constructor(id:number){
//         this.empid = id
//     }

//     access(){
//         console.log(this.empid);
        
//     }

// }


// let e = new Emp(10)
// e.access()

// let emp = new Emp(15)
// emp.access()

// let obj1 = new Emp(20)
// obj1.access()












