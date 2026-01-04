let i = 0;

while (i < 10) {
    i++; 

    switch (i) {
        case 1:
            console.log("Médaille d'or");
            break; 
        
        case 2:
            console.log("Médaille d'argent");
            break;

        case 3:
            console.log("Médaille de bronze"); 
            break;

        default:
            
            console.log(i);
    }
}