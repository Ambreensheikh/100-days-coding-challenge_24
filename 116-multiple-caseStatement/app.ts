//let reason : string = "Weather";
let reason : string = "getting late";
switch (reason){
    case "Weather":
    case "Traffic":
    case "Emergency":
        console.log(`Its heavy rain fall !`);
        break;
    case "getting late": 
        console.log(`You are over Slept !`);
        break;
    default :
    console.log(`No any reason !`);            
}