

async function getDados() {

    try{

        const responseData = await axios.get('http://localhost:3000/')

        const dados = responseData.data;

        document.querySelector('#dados').innerHTML = dados;


    }catch (error){
        console.log(error);
    }
}

getDados();