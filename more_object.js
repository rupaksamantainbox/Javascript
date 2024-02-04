const person1 = {
    firstname : 'John',
    lastname : 'Doe'
}
const person2 = {
    fullname : function (city,country){
        console.log(this.firstname+' '+this.lastname+' lives in '+city+','+country);
    }
}

const bound = person2.fullname.bind(person1)
bound('Howrah','India')
bound('Tokyo','Japan')