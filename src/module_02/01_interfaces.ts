// * ¿Qué es una interfaz?
// Puede usar interfaces para describir un objeto, asignar nombres a los tipos del objeto y parametrizarlos,
// y componer tipos de objetos con nombre existentes en otros nuevos.

function interface_example() {
  interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
  }

  let employee: Employee = {
    firstName: 'Eduardo',
    lastName: 'Vera',
    fullName(): string {
      return this.firstName + ' ' + this.lastName;
    },
  };

  // employee.firstName = 10; //❌

  console.log(employee.fullName());
}

export default interface_example;
