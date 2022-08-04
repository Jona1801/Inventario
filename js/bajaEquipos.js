
    //Select Baja Equipos
    $('#select-be-be').change(function(){
        var valor = $('#select-be-be').val();

        $('#input-be').val('');
        $('#btn-be-search').prop('disabled', true).css('background','#e9ecef');
        $('#textarea-be').val('').prop('disabled', true).css('background', '#e9ecef');
        $('#btn-be-save').prop('disabled', true).css('background','#e9ecef');


        if(valor == '1'){
            $('#input-be').attr({placeholder: 'Numero Label', onkeypress:' return soloNumeros(event)' });
            $('#input-be').prop('disabled', false).css('background', 'transparent');
            $('.labels-be-2').hide();
        }
        if(valor == '2'){
            $('#input-be').attr({placeholder: 'Numero Serial', onkeypress:' return letrasNum(event)' });
            $('#input-be').prop('disabled', false).css('background', 'transparent');
            $('.labels-be-2').hide();
        }
        if(valor == '3'){
            $('#input-be').attr({placeholder: 'Nombre Equipo', onkeypress:' return soloLetras(event)' });
            $('#input-be').prop('disabled', false).css('background', 'transparent');
            $('.labels-be-2').hide();
        }
    });

    $('.labels-be-2').hide();

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

    
    //Validacion Input
    $('.busqueda-filtro-be #input-be').keyup(function(){
        var env = $(this).parents('.busqueda-filtro-be');
        var check = checkCampos(env);

        if(check){
            $('#btn-be-search').prop('disabled', false).css('background', 'transparent');
        }

        else{
            $('#btn-be-search').prop('disabled', true).css('background', '#e9ecef');
        }
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


    //Colores Disabled
    $('#input-be').attr('disabled', true).css('background','#e9ecef');
    $('#textarea-be').attr('disabled', true).css('background','#e9ecef');
    $('#btn-be-search').attr('disabled', true).css('background', '#e9ecef');
    $('#btn-be-save').attr('disabled', true).css('background','#e9ecef');

    //Colores Hovers
    $('#btn-be-search').hover(function(){
        $('#btn-be-search').css('background', '#6ebbe799');
    }, function(){
        $('#btn-be-search').css('background','transparent');
    });

    $('#btn-be-save').hover(function(){
        $('#btn-be-save').css('background', '#6ebbe799');
    }, function(){
        $('#btn-be-save').css('background','transparent');
    });


    //Click al Boton Buscar
    $('#btn-be-search').click(function(){
        $('.labels-be-2').show();
        $('#textarea-be').val('').prop('disabled', false).css('background', 'transparent');
        $('#btn-be-save').prop('disabled', true).css('background', '#e9ecef');
        
    });


    //Validacion Text Area
    $('.content-be-ta #textarea-be').keyup(function(){
        var env = $(this).parents('.content-be-ta');
        var check = checkCamposTA(env);

        if( check){
          $('#btn-be-save').prop('disabled', false).css('background', 'transparent');
        }

        else{
          $('#btn-be-save').prop('disabled', true).css('background', '#e9ecef');

        }
    });



    //validacion textarea vacio
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