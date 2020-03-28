function getRM(weight, reps) {
    if (reps > 10) {
        window.alert("Valores mayores a 10 conducen a resultados inexactos.");
    }
    var methods = {
        'Brzycki': function() {
            return Math.floor(weight * (36 / (37 - reps)));
        },
        'Epley': function() {
            return Math.floor(weight * (1 + 0.0333 * reps));
        },
        'Lander': function() {
            return Math.floor((100 * weight) / (101.3 - 2.67123 * reps));
        },
        'Lombardi': function() {
            return Math.floor(weight * Math.pow(reps, 1e-1));
        },
        'O\'Conner': function() {
            return Math.floor(weight * (1 + 0.025 * reps));
        },

    };
    var arr = Object.keys(methods),
        values = [];
    arr.forEach((cur, i) => {
        let temp = methods[cur]();
        values.push(temp);
        console.log("Método " + cur + ": " + temp + "Kg de RM");
        if (i === arr.length - 1) {
            var average = values.reduce((a, b) => {
                return a + b
            });
            console.log("Entre los distintos métodos, en promedio tu RM es: " + Math.round(average / arr.length) + "Kg");
        }
    });
}

// getRM(100, 10) Primer ejemplo de mi sentadilla 19/03/20