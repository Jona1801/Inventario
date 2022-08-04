
    //Filtro Mantenimiento correctivo
    $('document').ready(function(){
        $('#select-mc-be').change(function(){
            var valor = $('#select-mc-be').val();

            $('#input-mc').val('');
            $('#btn-mc-search').prop('disabled', true).css('background', '#e9ecef');
            $('#btn-mc-mod').prop('disabled', true).css('background', '#e9ecef');
            $('#textarea-mc-mod').prop('disabled', true).css('background', '#e9ecef');
            $('#btn-save-mc').prop('disabled', true).css('background', '#e9ecef');
            $('#select-mc-marca').val('0').prop('disabled', true);
            $('#select-mc-modelo').val('0').prop('disabled', true);
            $('#input-mc-slc').val('').prop('disabled', true);

            if(valor == '1'){
                $('#input-mc').attr({placeholder:'Numero Label', onkeypress:'return soloNumeros(event)'});
                $('#input-mc').prop('disabled', false).css('background','transparent');
                $('#textarea-mc-mod').val('');
            }
            if(valor == '2'){
                $('#input-mc').attr({placeholder:'Numero Serial', onkeypress:'return letrasNum(event)'});
                $('#input-mc').prop('disabled', false).css('background','transparent');
                $('#textarea-mc-mod').val('');

            }
            if(valor == '3'){
                $('#input-mc').attr({placeholder:'Nombre Equipo', onkeypress:'return soloLetras(event)'});
                $('#input-mc').prop('disabled', false).css('background','transparent');
                $('#textarea-mc-mod').val('');

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
    $('#input-mc').attr('disabled', true).css('background','#e9ecef');
    $('#btn-mc-search').attr('disabled', true).css('background', '#e9ecef');
    $('#btn-mc-mod').attr('disabled', true).css('background', '#e9ecef');
    $('#textarea-mc-mod').attr('disabled', true).css('background', '#e9ecef');
    $('#btn-save-mc').attr('disabled', true).css('background', '#e9ecef');

    //Hovers
    $('#btn-mc-search').hover(function(){
        $('#btn-mc-search').css('background','#6ebbe799');
    }, function(){
        $('#btn-mc-search').css('background','transparent');
    });

    $('#btn-save-mc').hover(function(){
        $('#btn-save-mc').css('background','#6ebbe799');
    }, function(){
        $('#btn-save-mc').css('background','transparent');
    });

    $('#btn-mc-mod').hover(function(){
        $('#btn-mc-mod').css('background','#6ebbe799');
    }, function(){
        $('#btn-mc-mod').css('background','transparent');
    });


    //Validacion Input
    $('.busqueda-filtro-mc input').keyup(function(){
        var env = $(this).parents('.busqueda-filtro-mc');
        var check = checkCampos(env);


        if(check){
            $('#btn-mc-search').prop('disabled', false).css('background', 'transparent');
        }

        else{
            $('#btn-mc-search').prop('disabled', true).css('background', '#e9ecef');
        }
    });


    //Funciones Click
    $('#btn-mc-search').click(function(){
        $('#btn-mc-mod').prop('disabled', false).css('background','transparent');
        $('#select-mc-marca').val('0').prop('disabled', true);
        $('#select-mc-modelo').val('0').prop('disabled', true);
        $('#input-mc-slc').val('').prop('disabled', true);
        $('#textarea-mc-mod').val('').prop('disabled', true).css('background','#e9ecef');
        $('#btn-save-mc').prop('disabled', true).css('background', '#e9ecef');
    });

    $('#btn-mc-mod').click(function(){
        $('#select-mc-marca').prop('disabled', false);
        $('#select-mc-marca').val('0');
        $('#select-mc-modelo').val('0').prop('disabled', true);
        $('#input-mc-slc').val('').prop('disabled', true);
        $('#textarea-mc-mod').val('').prop('disabled', true).css('background','#e9ecef');
        $('#btn-save-mc').prop('disabled', true).css('background', '#e9ecef');
    });

    //Validacion Select
    $('#select-mc-marca').change(function(){
        var valid = $('#select-mc-marca').val();

        if(parseInt(valid)>0){
            $('#select-mc-modelo').prop('disabled', false);
        }
    });

    $('#select-mc-modelo').change(function(){
        var valid = $('#select-mc-modelo').val();

        if(parseInt(valid)>0){
            $('#input-mc-slc').prop('disabled', false);
        }
    });

    //input Modificar
    $('.content-slc input').keyup(function(){
        var ana = $(this).parents('.content-slc');
        var check = checkCampos(ana);

        if(check){
            $('#textarea-mc-mod').prop('disabled', false).css('background','transparent');
        }
        else{
            $('#textarea-mc-mod').prop('disabled', true).css('background', '#e9ecef');
        }
    });

    //Validacion TextArea
    $('.mc-ta textarea').keyup(function(){
        var anls = $(this).parents('.mc-ta');
        var check = checkCamposTA(anls);

        if(check){
            $('#btn-save-mc').prop('disabled', false).css('background', 'transparent');
        }

        else{
            $('#btn-save-mc').prop('disabled', true).css('background', '#e9ecef');
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