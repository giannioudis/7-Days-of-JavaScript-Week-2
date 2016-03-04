// complete the function
function vowelsAndConsonants(s) {
    
    var Arr = s.toLowerCase().split( '' ),
    c = '',
    vArr = ['a','e','i','o','u'],
    vowelsResult = "",
    consonantsResult = "";

    for ( c of Arr ){        
        if( vArr.indexOf( c )!==-1 ){
            vowelsResult += c + "\n";
        }
        else {
            consonantsResult += c + "\n";
        }
    }
   
    console.log(vowelsResult+consonantsResult);
}