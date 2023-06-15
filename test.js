import { expect } from 'chai';

function categorizePeople(peopleList) {
  let childrenCount = 0;
  let teenagerCount = 0;
  let adultCount = 0;

  peopleList.forEach(person => {
    let age = person.age;
    let category = "";

    if (age < 12) {
      category = "crianças";
      childrenCount++;
    } else if (age >= 12 && age <= 17) {
      category = "adolescentes";
      teenagerCount++;
    } else {
      category = "adultos";
      adultCount++;
    }

    console.log(`Nome: ${person.name}, Idade: ${person.age}, Email: ${person.email}, Categoria: ${category}`);
  });

  return peopleList.length;
}


describe("categorizePeople", () => {
  it("Deve retornar o número correto de pessoas na lista", () => {
    const peopleList = [
      { name: "Gustavo", age: 10, email: "gustavo@example.com" },
      { name: "Joana", age: 15, email: "joana@example.com" },
      { name: "Tati", age: 20, email: "tati@example.com" },
      { name: "Dijalma", age: 45, email: "dijalma@example.com" },
      { name: "Luciana", age: 35, email: "luciana@example.com" },
    ];
    const result = categorizePeople(peopleList);
    expect(result).equal(5);
  });

  it("Deve retornar um erro de pessoas na lista", () => {
    const peopleList = [
      { name: "Gustavo", age: 10, email: "gustavo@example.com" },
      { name: "Joana", age: 15, email: "joana@example.com" },
      { name: "Tati", age: 20, email: "tati@example.com" },
      { name: "Dijalma", age: 45, email: "dijalma@example.com" },
      { name: "Luciana", age: 35, email: "luciana@example.com" },
    ];
    const result = categorizePeople(peopleList);
    expect(result).to.not.equal(3);
  });
});