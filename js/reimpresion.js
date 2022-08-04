    $('document').ready(function(){

        //Validacion de input search
        $('.input-btn-ie input').keyup(function(){
            var send = $(this).parents('.input-btn-ie');
            var check = checkCampos(send);

            if(check){
                $('#btn-search-ie').prop('disabled', false).css('background', 'transparent');
            }

            else{
                $('#btn-search-ie').prop('disabled', true).css('background', '#e9ecef');
            }
        });

        //Colores Disabled
        $('#btn-search-ie').attr('disabled',true).css('background','#e9ecef');
        $('#btn-imprimir').attr('disabled',true).css('background','#e9ecef');

        $('#btn-search-ie').hover(function(){
            $('#btn-search-ie').css('background','#6ebbe799');
        },function(){
            $('#btn-search-ie').css('background', 'transparent');
        });

        $('#btn-imprimir').hover(function(){
            $('#btn-imprimir').css('background','#6ebbe799');
        },function(){
            $('#btn-imprimir').css('background', 'transparent');
        });
    });

    
    //Esconder Info y boton imprimir
    $('.cont-info-ie').hide();


    /*Validacion Numeros */
    function soloNumeros(evt){
        var code = (evt.which) ? evt.which : evt.keyCode;

        if(code==8){
            return true;
        } else if(code>=48 && code <=57){
            return true;
        } else{
            return false;
        }
    }

    //validacion Input vacio
    function checkCampos(obj) {
        var camposRellenados = true;
        obj.find("input").each(function() {
        var $this = $(this);
            if( $this.val().length <= 0 ) {
                camposRellenados = false;
                return false;
            }
        });
        
        if(camposRellenados == false) {
            return false;
        }
        else {
            return true;
        }
    }


    //Funcion para verificar valor del input

    $('#btn-search-ie').click(function(){
        $('.cont-info-ie').show();

        var inp = $('#input-ie').val();

        if(inp == true){
            $('#btn-imprimir').prop('disabled', false).css('background','transparent');
        }

        else{
            $('#btn-imprimir').prop('disabled', true).css('background','#e9ecef');
        }
    });
