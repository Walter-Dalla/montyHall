
found = 0;
times = 90000000;

function game(found){
    const prizeDoor = Math.floor(Math.random() * 3) + 1;
    const selectedDoor = Math.floor(Math.random() * 3) + 1;
    
    if(prizeDoor == selectedDoor)
        found++;

    return found;
}   


for(index = 0; index < times; index++){
    found = game(found)
}


console.log("Acerto\t",found , found/times * 100);
console.log("Errou\t\t",times - found, (times - found)/times*100);
console.log("Trocar a porta é a mesma coisa que trocar o erro pelo acerto\nPortanto se tivesse trocado a porta estaria com acerto de ",times - found, (times - found)/times*100)
