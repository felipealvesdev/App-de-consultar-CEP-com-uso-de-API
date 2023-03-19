function consultaEndereco(){
    const cep = document.querySelector(".cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if(cep.length !== 8){
        alert("Digite um cep de 8 dígitos");
        return;
    }else{
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                mostrarEndereco(data);
            })
        })
    }

    function mostrarEndereco(dados){
        const resultado = document.querySelector(".resultado");

        resultado.innerHTML =  `<p>O seu CEP É ${dados.cep}.</p>
                                <p>Logradouro: ${dados.logradouro}.</p>
                                <p>Localizado no bairro: ${dados.bairro}.</p>
                                <p>No Estado: ${dados.localidade} ${dados.uf}.</p>
                                <p>DDD deste CEP: (${dados.ddd}).</p>`
    }
}