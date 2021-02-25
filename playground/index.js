function leapYear(year){
    let condOne = year % 4 == 0 && year % 100 != 0;
    let condTwo = year % 400 == 0;

    if(condOne || condTwo){
        return 'Yes';
    }

    return 'No';
}

module.exports = { leapYear };