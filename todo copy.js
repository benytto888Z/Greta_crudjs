
//let pays = ["France","Paris",105000,67000000,"FR"];


let pays = new Array();

pays["nom"]="France";
pays["capitale"]="Paris";
pays["surperficie"]=105000;
pays["population"]=67000000;
pays["sigle"]="FR";

console.log(pays);
console.log(pays["capitale"]);
console.log(pays.surperficie);


/*
let pays = {
 "nom":"France",
 "capitale":"Paris",
 "superficie":105000,
 "population":67000000,
 "sigle":"FR"
}

console.log(pays);

console.log(pays.capitale);

*/

// parcourir un tableau associatif

for(var key in pays)
{
  var value = pays[key];
  document.write(key + " = " + value + '<br>');
}

// nombre d elements

Object.size = function(arr) 
{
    var size = 0;
    for (var key in arr) 
    {
        if (arr.hasOwnProperty(key)) size++;
    }
    return size;
};

console.log(Object.size(pays));