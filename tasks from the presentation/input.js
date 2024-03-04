let num = prompt("Enter a number");

function func(num)
{
    if(num % 2 != 0)
    {
        console.log("This number is odd:", num);
    }
    else
    {
        console.log("This number is not odd:", num)
    }
    return num;
}

func(num);