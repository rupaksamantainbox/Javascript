function emp(id,name,salary){
    this.id = id,
    this.name = name,
    this.salary = salary
}
const emp_obj = new emp(1,'Rupak',10000)
console.log(emp_obj)