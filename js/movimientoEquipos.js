
    //Filtro Movimiento Equipos
    $('document').ready(function(){
        $('#select-me-be').change(function(){
            var valor = $('#select-me-be').val();

            $('#input-me').val('');
            $('#btn-me-search').prop('disabled', true).css('background','#e9ecef');
            $('#select-me-loc').prop('disabled', true).css('background', '#e9ecef');
            $('#select-me-pla').prop('disabled', true).css('background', '#e9ecef');
            $('#select-me-edi').prop('disabled', true).css('background', '#e9ecef');
            $('#select-me-are').prop('disabled', true).css('background', '#e9ecef');
            $('#textarea-me').val('').prop('disabled', true).css('background','#e9ecef');
            $('#btn-me-save').prop('disabled', true).css('background','#e9ecef');
            

            if(valor == '1'){
                $('#input-me').attr({onkeypress: 'return soloNumeros(event)', placeholder:' Numero Label'});
                $('#input-me').prop('disabled', false).css('background','transparent');
                $('#select-me-loc').val('0');
                $('#select-me-pla').val('0');
                $('#select-me-edi').val('0');
                $('#select-me-are').val('0');
                $('.labels-me-2').hide();
            }

            if(valor == '2'){
                $('#input-me').attr({onkeypress: 'return letrasNum(event)', placeholder:' Numero Serial'});
                $('#input-me').prop('disabled', false).css('background','transparent');
                $('#select-me-loc').val('0');
                $('#select-me-pla').val('0');
                $('#select-me-edi').val('0');
                $('#select-me-are').val('0');
                $('.labels-me-2').hide();
                
            }

            if(valor == '3'){
                $('#input-me').attr({onkeypress: 'return soloLetras(event)', placeholder:' Nombre Equipo'});
                $('#input-me').prop('disabled', false).css('background','transparent');
                $('#select-me-loc').val('0');
                $('#select-me-pla').val('0');
                $('#select-me-edi').val('0');
                $('#select-me-are').val('0');
                $('.labels-me-2').hide();

            }
        });
    });

    $('.labels-me-2').hide();


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

    
    //Colores, Validacion Input y Habilitacion del boton Search
    $('document').ready(function(){

        //Colores Disabled
        $('#input-me').attr('disabled', true).css('background','#e9ecef');
        $('#btn-me-search').attr('disabled', true).css('background','#e9ecef');
        $('#textarea-me').attr('disabled', true).css('background','#e9ecef');
        $('#btn-me-save').attr('disabled', true).css('background', '#e9ecef');
        $('#select-me-loc').attr('disabled', true).css('background', '#e9ecef');
        $('#select-me-pla').attr('disabled', true).css('background', '#e9ecef');
        $('#select-me-edi').attr('disabled', true).css('background', '#e9ecef');
        $('#select-me-are').attr('disabled', true).css('background', '#e9ecef');

        //Colores Hovers
        $('#btn-me-search').hover(function(){
            $('#btn-me-search').css('background', '#6ebbe799');
        }, function(){
            $('#btn-me-search').css('background','transparent');
        });

        $('#btn-me-save').hover(function(){
            $('#btn-me-save').css('background','#6ebbe799');
        }, function(){
            $('#btn-me-save').css('background','transparent');
        });


        //Validacion del Input 
        $('.busqueda-filtro-me input').keyup(function(){
            var env = $(this).parents('.busqueda-filtro-me');
            var check = checkCampos(env);

            if(check){
                $('#btn-me-search').prop('disabled', false).css('background','transparent');
            }
            else{
                $('#btn-me-search').prop('disabled', true).css('background', '#e9ecef');
            }
        });

        //Habilitacion Selects
        $('#btn-me-search').click(function(){
            $('.labels-me-2').show();
            $('#select-me-loc').val('0');
            $('#select-me-loc').prop('disabled', false).css('background', 'transparent');
            $('#select-me-pla').val('0');
            $('#select-me-pla').prop('disabled', true).css('background','#e9ecef');
            $('#select-me-edi').val('0');
            $('#select-me-edi').prop('disabled', true).css('background','#e9ecef');
            $('#select-me-are').val('0');
            $('#select-me-are').prop('disabled', true).css('background', '#e9ecef');
            $('#textarea-me').val('');
            $('#textarea-me').prop('disabled', true).css('background', '#e9ecef');
            $('#btn-me-save').prop('disabled', true).css('background', '#e9ecef');


        });

        //Validacion Selects
        $('#select-me-loc').change(function(){
            var valor = $('#select-me-loc').val();

            if(parseInt(valor)>0){
                $('#select-me-pla').prop('disabled', false).css('background','transparent');
            }

            $('#select-me-pla').change(function(){
                var valor = $('#select-me-pla').val();

                if(parseInt(valor)>0){
                    $('#select-me-edi').prop('disabled', false).css('background', 'transparent');
                }
            });

            $('#select-me-edi').change(function(){
                var valor = $('#select-me-edi').val();

                if(parseInt(valor)>0){
                    $('#select-me-are').prop('disabled', false).css('background', 'transparent');
                }
            });
            $('#select-me-are').change(function(){
                var valor = $('#select-me-are').val();

                if(parseInt(valor)>0){
                    $('#textarea-me').prop('disabled', false).css('background', 'transparent');
                }
            });
        });

        
    });


    //Validacion text area y boton Guardar
    $('.content-ta #textarea-me').keyup(function(){
        var env = $(this).parents('.content-ta');
        var check = checkCamposTA(env);

        if(check){
            $('#btn-me-save').prop('disabled', false).css('background','transparent');
        }

        else{
            $('#btn-me-save').prop('disabled', true).css('background', '#e9ecef');
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