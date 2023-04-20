
let input = [5,0,4,1,8,7,7,8,8,5,4,1,5,0,4,1,8,5];
let newset = {};

for(let i=0;i<input.length;i++){
    let output = input[i];
    if(!newset[output]){
        newset[output] = 0;
    }
    newset[output]=1;
};
console.log(newset);
