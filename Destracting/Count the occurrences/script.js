
let input = "the string says that a quick brown fox jumps over the lazy dog";
let map = {};


for(let i=0;i<input.length;i++){
    let output = input[i];
    if(!map[output]){
        map[output] = 0;
    }
    map[output]++;
}

console.log(map);
