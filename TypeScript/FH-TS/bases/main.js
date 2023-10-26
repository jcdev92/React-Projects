"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Hola'));
console.log(Validations.validateDate(new Date()));
//# sourceMappingURL=main.js.map