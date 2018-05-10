function masterDataNewsletter(){
    var jsonSaveDadosUser = {
        "nome": $("#cl_firstName").val(),
        "email": $("#cl_email").val()
    };

    var urlSaveDadosUser = 'http://api.vtexcrm.com.br/newskull/dataentities/NL/documents/';

    $.ajax({
        headers: {
            'Accept': 'application/vnd.vtex.ds.v10+json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(jsonSaveDadosUser),
        type: 'PATCH',
        url: urlSaveDadosUser,
        success: function (data) {
          console.log(data);
          $("div#messageSuccess").removeClass("hide");
          $("#cl_firstName").val("");
          $("#cl_email").val("");
          alert("E-mail cadastrado com sucesso!");
        },
        error: function (data) {
          console.log(data);
          alert("Houve um erro ao cadastrar seu e-mail. Tente novamente mais tarde");
        }
    });
}