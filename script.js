//1 If-else Condition
console.log("1. If-else Condition:");

let number = -5;
if (number > 0)
{
    console.log(" 'number' is a positive number");
}

else if (number<0)
{
    console.log("'number' is a negative number");
}

else 
{
    console.log("'number' is zero");
}

console.log("\n");


//2 Switch Statemant
console.log("2.Switch Statement:");

let day = 5
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
    break
    case 7:
        console.log("Today is Sunday");
    break
    default:
        console.log("Invalid day");
        break;
}
console.log("\n");

//3 Loops(for, while, do while)
//3.1 for loop
console.log("3.1 For Loop:");

for (let i=1;i<=5; i++)
{
    console.log(`for loop result: ${i}`);
}
console.log('\n');

//3.2 while loop
console.log("3.2 While Loop:");

let j=1;
while(j<=5)
{
    console.log(`while loop result: ${j}`);
    j++
}
console.log("\n");

//3.3 do while loop
console.log("3.3 Do While Loop:");
var k = 1;
do
{
    console.log(`do while loop result: ${k}`);
    k++;
} 
while (k<=5) {
    
}
console.log("\n");


//4 control flow with break and continue
//4.1 break
console.log("4.1 Break:");
for (let i=1;i<=5; i++)
    {
        console.log(`for loop result: ${i}`);
        if(i===3)
        {
            console.log(`for loop breaked at ${i}`);
            break;
        }
    }
    console.log("\n");
    
//4.2 continue
console.log("4.2 Continue:");
for (let i=1;i<=5; i++)
    {
        if(i===3)
        {
            console.log(`for loop skipped at ${i}`);
            continue;
            
        }
        console.log(`for loop result: ${i}`);
    }
    console.log('\n');

//5 scope and context
console.log("5 Scope and Context:");
let globalvar = "I'm Mr.Worldwide aka global";

function scopeExample()
{
    let localvar = "I'm not Mr.Worldwide aka just a local";
    console.log(`globalvar: ${globalvar}`);
    console.log(`localvar: ${localvar}`);
}
scopeExample();