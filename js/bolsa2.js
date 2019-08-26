var bolsa = {
    render: function () {
        var faculdade = document.getElementById("mensagem");
        
        $.getJSON("js/db.json", function (data) {

            var saida = "";
       
            saida += "<div class='row justify-content-md-center'>";
            saida += "<div class='form-group col-md-3'>";
            saida +="<label for='cidade'>SELECIONE SUA CIDADE</label><br />"
            saida += "<select id='cidade'>";

            for (var c = 0; c < data.length; c++){
                    var cidade = data[c].campus.city;
                    
                saida += `"<option>${cidade}</option>"`;
                }
                saida += "</select><br /><br />";
                saida += "<div></div>";
                saida += "</div>"

                saida += "<div class='form-group col-md-3'>";
                saida +="<label for='cidade'>SELECIONE O CURSO DE SUA PREFERENCIA</label><br />"
                saida += "<select id='area'>";

            for (var c = 0; c < data.length; c++){
                    var area = data[c].course.name;
                    
                saida += `<option>${area}</option>`;
                    }
                saida += "</select><br /><br />";
                saida += "<div></div>";
                saida += "</div>";
                saida += "</div>";
                saida += "</div>";
                saida += "<br />";

                saida += "<div class='row justify-content-md-center'>";
                saida += "<div class='form-group col-md-3'>";
                saida +="<label for='modalidade'>COMO VOCÊ QUER ESTUDAR</label><br /><br />";
                saida += "<div class='form-check form-check-inline'>";
                saida += "<input type='checkbox' class='form-check-input' id='modalidade'>";
                saida += "<label class='form-check-label'>Presencial</label>";
                saida += "</div>";
                
                saida += "<div class='form-check form-check-inline'>";
                saida += "<input type='checkbox' class='form-check-input' id='modalidade'>";
                saida += "<label class='form-check-label'>Distância</label> ";
                saida += "</div>";
                saida += "</div>";

                saida += "<div class='form-group col-md-3'>";
                saida += "<label for='valor'>Até QUANTO VOCÊ PODE PAGAR</label><br />";

                saida += "<label>R$</label> <label id='value'>0</label>"

                saida += "<input type='range' min='0' max='10000' value='0' class='form-control-range' id='slider' />";
                saida += "</div>";
                saida += "</div>";
                saida += "<hr />";
                
                $.each(data, function(index, result){

                    console.log(result.indice); // ta ai seus valores
                    
                    });
                    
                     
                    
                    });
            for (var i = 0; i < data.length; i++) {

                var cursos = data[i];
                
                saida += "<div class='row justify-content-md-center'>";
                saida += "<div class='form-group col-md-auto'>";
                saida += "<input type='checkbox' />";
                saida += "</div>";
                saida += "<div class='form-group col-md-3'>";
                saida += "<img src='" + cursos.university.logo_url + "' class='rounded mx-auto d-block' />";
                saida += "</div>";
                saida += "<div class='form-group col-md-3'>";
                saida += `<label>${cursos.course.name}</label>`;
                saida += `<h6>${cursos.course.level}</h6>`;
                saida += "</div>";
                saida += "<div class='form-group col-md-3'>";
                saida += `<label>Bolsa de ${cursos.discount_percentage}%</label>`;
                saida += `<h6>R$ ${cursos.price_with_discount}/mês</h6>`;
                saida += "</div>";
                saida += "</div>";
                saida += "</div>";
                saida +="<hr>"
                
            }
            saida += "<div class='row float-right'>";
            saida += "<div class='form-group col-md-6'>";
            saida += "<button type='button' class='btn btn-outline-primary'>Cancelar</button>"
            saida += "</div>"
            saida += "<div class='form-group col-md-6'>";
            saida += "<button type='button' class='btn btn-outline-secondary' disabled>Adionar Bolsa(s)</button>"
            saida += "</div>"
            saida += "</div>"

            faculdade.innerHTML = saida;
            
            
            
            var slider = document.getElementById("slider");
            var val = document.getElementById("value");
            val.innerHTML = 0;
            slider.oninput = function(){
            val.innerHTML = this.value;
        }
            $( "#cidade" )
            .change(function() {
                var cidade = "";
            $( "#cidade option:selected" ).each(function() {
                cidade += $( this ).text() + " ";
                });
            $( "#local" ).text( cidade );
                })
            .trigger( "change" );


            $( "#area" )
            .change(function() {
                var area = "";
            $( "#area option:selected" ).each(function() {
                area += $( this ).text() + " ";
                });
            $( "#course" ).text( area );
                })
            .trigger( "change" );
            

          
            
           
            
        });


    }
};
bolsa.render();
