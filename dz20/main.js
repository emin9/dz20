let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]
let newArr = arr.filter(item =>{
    if(item % 2 == 1){
        return true
    }
    
}

    
)
console.log(newArr);


let arrs = [ 'lorem ipsim','javascript','php','css','react','git','html','mysql']
let arrs2 = arrs.filter(item =>{
    if(item.length <= 4){
        return true
        
    }
})
console.log(arrs2)

let mass = [1,-3,5,6,-7,8,9,-11]

let mass2 = mass.filter(item =>{
    if(item <= 0){
        return true

    }
})
console.log(mass2)

let massive = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]
let massive2 = massive.filter(item =>{
    if(item % 2 !== 1){
        return(true)
    }
})
console.log(massive2)


let string = [ 'lorem ipsim','javascript','php','css','react','git','html','mysql']

let string2 = string.filter(item =>{
    if(item.length !== 3){
        return true
    }
})
console.log(string2)

let kvadrat = [5, 6, 7, 8, 9]
let kvadrat2 = kvadrat.map(item =>{
    return item * item
})

console.log(kvadrat2)

let objs=[
    {a : 10,b : 5},
    {a : 20,b : 22},
    {a : 131,b : 55}
]
let objs2 = objs.map(item =>{
    
    return  item.a + item.b
    
})
console.log(objs2)
let filred = [-13, 0, 12, 1662, -0.32, -102, -2]
let filred2 = filred.filter(item => {
    if(item < 0){
        return true
    }
})
let filred3 = filred2.reduce((prev,item) =>{
    return prev + item
},0);
  
  console.log(filred3);

  let redu = [
    {x : 10,y : 'lorem'},
    {x : -17 ,y : 'lorem'},
    {x : 156,y : 'lorem'},
]
let redu2 = redu.reduce((prev,item) =>{
   return prev + item.x
},0)
console.log(redu2)