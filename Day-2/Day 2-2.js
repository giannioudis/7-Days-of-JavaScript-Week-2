function processData(my_height) {
    try{
        if (isNaN(my_height)) {
            throw new Error('notANumberError');
        } else if (my_height > 10) { throw new Error( 'hugeHeightError');
        } else if (my_height < 4) { 
            throw new Error( 'tinyHeightError');
        } else console.log(my_height);
    } catch (err) { console.log(err.message); }
}

