// map = recorre un arreglo, entrega un arreglo y lo hace a trabes de un callback

const callback = (element,index,pr) => {
    console.log(element,index,pr)
    return element 
} 
const arr=[1,5,6,8].map(callback)
console.log(arr)

//

const mayorA5 = (element) => {
    if(element >5){
    return element     
    }else{
        return 0
    }
    
} 
const mas= [3,5,9,7].map(mayorA5)
console.log(mas)


//

const arry=[1,5,6,8].filter((arry) =>{
    return arry >5
}) 
console.log(arry)







