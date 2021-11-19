//IIFE(Immediately Invoked Function Expression)
/*Uma função anônima entre parênteses, seguida por oturo par de parênteses, que representa sua chamada.*/

(
    function() {
        let name = "Digital Innovation One";
        return console.log(name);
    }
)();

(
    function(a, b) {
        return console.log(a+b);
    }
)(1,2); //3


