
const users = [
    {
      name: "Bruno",
      age: 31,
      address: "Rua Juripiranga",
      nomeDoConjuge: "Ly",
      id: null,
    },
    {
      name: "Ly",
      age: 28,
      address: "Rua Juripiranga",
      nomeDoConjuge: "Bruno",
      id: null,
    },
  ];
  
  const input = document.querySelector("#main-input")
  
  function digiteiNoInput(){
     console.log(input.value)
   }
  
  
  function cliqueiNoBotao(){
    console.log("Botão CLicado com Sucesso!")
  }
  
  
  console.log(users[0]);
  