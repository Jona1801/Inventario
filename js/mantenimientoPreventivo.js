
    //Filtro Mantenimiento Preventivo
    $('document').ready(function(){
        $('#select-mp-be').change(function(){
            var valor = $('#select-mp-be').val();

            $('#input-mp').val('');
            $('#btn-mp-search').prop('disabled', true).css('background', '#e9ecef');
            $('#textarea-mp-mod').prop('disabled', true).css('background','#e9ecef');
            $('#btn-save-mp').prop('disabled', true).css('background', '#e9ecef');

            if(valor == '1'){
                $('#input-mp').attr({placeholder:'Numero Label', onkeypress:'return soloNumeros(event)'});
                $('#input-mp').prop('disabled', false).css('background', 'transparent');
                $('#textarea-mp-mod').val('');
            }
            if(valor == '2'){
                $('#input-mp').attr({placeholder:'Numero Serial', onkeypress:'return letrasNum(event)'});
                $('#input-mp').prop('disabled', false).css('background', 'transparent');
                $('#textarea-mp-mod').val('');
            }
            if(valor == '3'){
                $('#input-mp').attr({placeholder:'Nombre Equipo', onkeypress:'return soloLetras(event)'});
                $('#input-mp').prop('disabled', false).css('background', 'transparent');
                $('#textarea-mp-mod').val('');
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


    /*Validacion de letra y Numero */
    function letrasNum(e) {

        key = e.keyCode || e.which; 
        teclado = String.fromCharCode(key).toLowerCase();
        letras = "abcdefghijklmnopqrstuvwxyz0123456789";
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


    /*Validacion de letras */
    function soloLetras(e) {

        key = e.keyCode || e.which; 
        teclado = String.fromCharCode(key).toLowerCase();
        letras = "abcdefghijklmnñopqrstuvwxyz0123456789-";
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


    //Colores Disabled y Hovers
    $('#input-mp').attr('disabled', true).css('background','#e9ecef');
    $('#btn-mp-search').attr('disabled', true).css('background','#e9ecef');
    $('#textarea-mp-mod').attr('disabled', true).css('background', '#e9ecef');
    $('#btn-save-mp').attr('disabled', true).css('background', '#e9ecef');

    //Colores Hovers
    $('#btn-mp-search').hover(function(){
        $('#btn-mp-search').css('background', '#6ebbe799');
    }, function(){
        $('#btn-mp-search').css('background','transparent');
    });

    $('#btn-save-mp').hover(function(){
        $('#btn-save-mp').css('background', '#6ebbe799');
    }, function(){
        $('#btn-save-mp').css('background', 'transparent');
    });


     //Validacion del Input 
     $('.busqueda-filtro-mp input').keyup(function(){
        var env = $(this).parents('.busqueda-filtro-mp');
        var check = checkCampos(env);

        if(check){
            $('#btn-mp-search').prop('disabled', false).css('background','transparent');
        }
        else{
            $('#btn-mp-search').prop('disabled', true).css('background', '#e9ecef');
        }
    });

    //Validacion textarea 
    $('.ta-mp textarea').keyup(function(){
        var env = $(this).parents('.ta-mp');
        var check = checkCamposTA(env);

        if(check){
            $('#btn-save-mp').prop('disabled', false).css('background','transparent');
        }
        else{
            $('#btn-save-mp').prop('disabled', true).css('background', '#e9ecef');
        }
    });

    //Funcion Click
    $('#btn-mp-search').click(function(){
        $('#textarea-mp-mod').prop('disabled', false).css('background', 'transparent');
        $('#textarea-mp-mod').val('');
        $('#btn-save-mp').prop('disabled', true).css('background','#e9ecef');

    });



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

    //validacion Input vacio
    function checkCamposTA(obj) {
        var camposRellenados = true;
        obj.find("textarea").each(function() {
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