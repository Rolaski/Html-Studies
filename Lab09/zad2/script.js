function matrix()
{
    var div = document.getElementById('matrix');
    var matrix =[[1,2,3],[4,5,6],[7,8,9]];
    console.log(matrix);

    for(var i = 0; i < matrix.length; i++)
    {
        for(var j = 0; j < matrix[i].length; j++)
        {
            div.innerText += matrix[i][j] + "\xa0\xa0";
        }
        div.innerText += "\n";
    }
}

matrix();