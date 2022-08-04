    //Filtros de Busqueda Consulta Prestamos
    $('document').ready(function(){
        $('#cp-search-select').change(function(){
            var valor = $('#cp-search-select').val();
            
            $('#cp-search-input').val('').css('background', '#e9ecef');
            $('#cp-btn-search').prop('disabled', true).css('background','#e9ecef');

            if(valor == '1'){
                $('#cp-search-input').attr({type:'text', onkeypress:'return soloNumeros(event)', maxlength:'9', placeholder:'N. Empleado'});
                $('#cp-search-input').prop('disabled', false).css('background','transparent');
            }

            if(valor == '2'){
                $('#cp-search-input').attr({type:'text', onkeypress:'return soloLetras(event)', maxlength:'50', placeholder:'Nombre(s), Apellidos'});
                $('#cp-search-input').prop('disabled', false).css('background', 'transparent');
            }

        });
    });

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

    /*Validacion de letras */
    function soloLetras(e) {

        key = e.keyCode || e.which; 
        teclado = String.fromCharCode(key).toLowerCase();
        letras = " abcdefghijklmnñopqrstuvwxyz";
        especiales = "8-37-38-46-164";
        teclado_especial= false;

        for(var i in especiales){
            if(key==especiales[i]){
                teclado_especial=true;break;
            }
        }

        if (letras.indexOf(teclado)==-1 && !teclado_especial){
            return false;

        }
    };

    //Colores Disabled
    $('#cp-search-input').attr('disabled', true).css('background','#e9ecef');
    $('#cp-btn-search').attr('disabled', true).css('background', '#e9ecef');
    $('#cp-btn-pdf').attr('disabled', true).css('background','#e9ecef');
    $('#cp-btn-signature').attr('disabled', true).css('background', '#e9ecef');

    $('#cp-btn-search').hover(function(){
        $('#cp-btn-search').css('background','#6ebbe799');
    }, function(){
        $('#cp-btn-search').css('background', 'transparent');
    });

    $('#cp-btn-pdf').hover(function(){
        $('#cp-btn-pdf').css('background', '#dee2e675');
    }, function(){
        $('#cp-btn-pdf').css('background', 'transparent');
    });

    $('#cp-btn-signature').hover(function(){
        $('#cp-btn-signature').css('background','#dee2e675');
    },function(){
        $('#cp-btn-signature').css('background', 'transparent');
    });




    /*Input Vacio */
    //Función para comprobar los campos de texto
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

    $('document').ready(function(){
        $('.search-consultaPres input').keyup(function(){
            var env = $(this).parents('.search-consultaPres');
            var check = checkCampos(env);

            if(check){
                $('#cp-btn-search').prop('disabled', false).css('background','transparent');
            }
            else{
                $('#cp-btn-search').prop('disabled', true).css('background','#e9ecef');
            }
        });

        //Habilitacion de los botones
       /* $('#cp-btn-search').click(function(){
            $('#cp-btn-pdf').prop('disabled', false).css('background','transparent');
            $('#cp-btn-signature').prop('disabled', false).css('background','transparent');
        });*/
    });
