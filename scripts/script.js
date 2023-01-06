const legs = prompt ('Введіть через пробіл довжини катетів');

if ((legs === ('') || legs === ('0') || legs === null || !legs.includes(' '))){
    alert ('Помилка')
}
else {
    const legsSeparation = legs.split(' ');
    const legFirst = Number(legsSeparation[0]);
    const legSecond = Number(legsSeparation[1]);
    const hypotenuse = (((legFirst**2) + (legSecond**2)) ** (0.5)).toFixed(0);
    const hypotenuseMath = Math.round(Math.sqrt((legFirst**2) + (legSecond**2)));
    if (legsSeparation[0].length === 0 || legsSeparation[1].length === 0 || Number.isNaN(legFirst) || Number.isNaN(legSecond) || legFirst <= 0 || legSecond <= 0){
        alert ('Помилка')
    }
    if (legsSeparation.length === 2 && legFirst > 0 && legSecond > 0){
        alert (`Результат обчислення гіпотенузи: способом Math: ${hypotenuseMath}; Cпособом без Math: ${hypotenuse}`)
    }
}