function countWords(sentence)
{
    let array = sentence.split(" ");
    let count = 0;
    console.log(array);
    for(let i = 0; i < array.length; ++i)
    {
        if(array[i] != "")
        {
            ++count;
        }
    }
    return count;
}

console.log(countWords("   I am andrii  aaa  "));