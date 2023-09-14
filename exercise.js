const user = {
  id: 1,
  name: "John",
  age: 25,
};

function storeObj(obj){
  localStorage.setItem(obj.name, JSON.stringify(obj));
  const userData = JSON.parse(localStorage.getItem(obj.name));
  console.log(userData);
}

storeObj(user);