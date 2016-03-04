// complete the function
function vowelsAndConsonants(s) {
    
    var Arr = s.toLowerCase().split( '' ),
    c = '',
    vArr = ['a','e','i','o','u'],
    vowelsResult = "",
    constantResult = "";

    for ( c of Arr ){        
        if( vArr.indexOf( c )!==-1 ){
            vowelsResult += c + "\n";
        }
        else {
            constantResult += c + "\n";
        }
    }
   
    console.log(vowelsResult+constantResult);
}