

async function getDados() {

    try{
        let nome = document.querySelector("#nome").value
        let cidade = document.querySelector("#cidade").value
        let estado = document.querySelector("#estado").value

        const info = {
            nome,
            cidade,
            estado,
        }

        const responseData = await axios.post('http://localhost:3000/',info)

        const dados = responseData.data;
        console.log(dados.nome + " " + dados.local)

        document.querySelector("#saida").innerHTML = `Hola! ${dados.nome} de ${dados.local}`;


    }catch (error){
        console.log(error);
    }
}

//getDados();

document.querySelector("#enviar").addEventListener('click', getDados)

document.querySelector("#send").addEventListener("key-up", (c) => {
    if (c == 13) {
      getDados();
    }
  });