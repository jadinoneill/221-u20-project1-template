function metsItem(firstName, lastName, number, position){
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
    this.position = position;
    
}

exports.createmetsItem = function(firstName, lastName, number, position) {
    return new metsItem(firstName, lastName, number, position);
};

console.log("model running");

