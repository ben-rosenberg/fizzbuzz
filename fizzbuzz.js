for (var i = 1; i <= 100; i++)
{
    var multOf3 = (i % 3 === 0);
    var multOf5 = (i % 5 === 0);

    if (multOf3 && !multOf5)
    {
        console.log("Fizz");
        continue;
    }

    else if (!multOf3 && multOf5)
    {
        console.log("Buzz");
        continue;
    }

    else if (multOf3 && multOf5)
    {
        console.log("FizzBuzz");
        continue;
    }

    else
        console.log(i);
}