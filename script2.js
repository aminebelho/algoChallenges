let array = [12, 54,25,48,47,36,29,10,87]
let array2 = [41, 54, 12, 10, 87]

function same(x1, x2){
    let x =[]
    for( i = 0 ; i < x1.length ; i++){
        for ( j = 0 ; j < x2.length ; j++){
            if (x1[i] == x2[j]) {
                x.push(x1[i])
            }
        }
    }
    console.log("same: ",x)
}

same(array, array2)

function even(x) {
    let newArray = []
    for(i = 0 ; i < x.length ; i++){
        if (x[i] % 2 == 0){
            newArray.push(x[i])
        }
    }
    console.log(newArray)
}

even(array)


let persons = [{name: "person 1", age: 24, email:"email1"}, {name: "person 2", age: 57, email:"email2"}, {name: "person 3", age: 34, email:"email3"}]

function old(x){
    let old = []
    for(i = 0; i < x.length; i++){
        if(x[i].age >= 30){
            old.push(x[i])
        }
    }
    console.log(old)
}

old(persons)

const vowels = ["a", "e", "y", "u", "i", "o"]
function removeVow(x) {
    for(i = 0 ; i < x.length ; i++){
        for(j = 0 ; j < vowels.length; j++){
            if(x[i] == vowels[j]){
                console.log("vow", x[i])
                x = x.slice(0, i) + x.slice(i + 1);
            }
        }
    }
    console.log(x)
}

let ex = "example"
removeVow(ex)