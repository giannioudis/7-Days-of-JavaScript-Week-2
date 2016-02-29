// complete the function
function vowelsAndConsonants(s) {
    
    var Arr = s.toLowerCase().split( '' ),
    c = '',
    vArr = ['a','e','i','o','u'];

    for ( c of Arr ){        
        if( vArr.indexOf( c )!==-1 ){
            console.log( c );
        }
    }
    for ( c of Arr ){        
        if( vArr.indexOf( c )===-1 ){
            console.log( c );
        }
    }
}