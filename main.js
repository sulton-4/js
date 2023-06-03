let son = +prompt("son kiriting")
while (isNaN (son)){
    son = +prompt("son kiritmadingiz qaytadan son kiriting")
}
let daraja = +prompt("Daraja kiriting")
while (isNaN(daraja)){
    daraja = +prompt("Daraja son korinishida bo'lishi shart")
}
let box = 1 

for (let i = 0; i < daraja; i++) {
    box=box*son
}
console.log(box);