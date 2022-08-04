    /*Filtro User search de Baja asignaciones */

    $('document').ready(function(){
        $('#ba-user-select').change(function(){
            var valor = $('#ba-user-select').val();

            $('#ba-user-input').val('').css('background','#b5b0b054');
            $('#ba-user-search').prop('disabled', true).css('background','#e9ecef');

            if(valor == '0'){
                $('#ba-user-input').attr({type:'text', onkeypress:'return soloNumeros(event)', maxlength:'9', placeholder:' N. Empleado'});
                $('#ba-user-input').prop('disabled', false).css('background','transparent');
            }
            if(valor == '1'){
                $('#ba-user-input').attr({type:'text', onkeypress:'return soloLetras(event)', maxlength:'50', placeholder:'Nombre(s), Apellidos'});
                $('#ba-user-input').prop('disabled', false).css('background','transparent');
                
            }

        });
    });

    /*
    funcion para aparecer mensaje
    $('#btn-ba-us').click(function(){
        var numE = $('#inputnum-ba-us').val();
        var nomE = $('#inputtext-ba-us').val();

        if(numE == ""){
            $('#mensaje1').fadeIn();
            return false;
        }else{
            $('#mensaje1').fadeOut();
            if(nomE == ""){
                $('#mensaje2').fadeIn();
                return false;
            }
        }
    });
    */


    function soloNumeros(evt){

        // code is the decimal ASCII representation of the pressed key.
        var code = (evt.which) ? evt.which : evt.keyCode;
        
        if(code==8) { // backspace.
            return true;
        } else if(code>=48 && code<=57) { // is a number.
            return true;
        } else{ // other keys.
            return false;
        }
    }

    /*Validacion de Numeros*/
    $(function(){
        $('.validaNum').keypress(function(e){
        if(isNaN(this.value + String.fromCharCode(e.charCode)))
        return false;
        })

        .on("cut copy paste",function(e){
            e.preventDefault();
        });
    });


    /*Validacion de Letras*/
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

    /*textarea Vacio */
    //Función para comprobar los campos de texto
    function checkCamposta(obj) {
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

    /*Habilitacion de Disabled*/     
    $('document').ready(function(){
        $('#ba-user-input').attr('disabled', true).css('background', '#e9ecef');
        $('#ba-user-search').attr('disabled', true).css('background', '#e9ecef');
        $('#textarea-ba-notes').attr('disabled', true).css('background','#e9ecef');
        $('#ba-btn-save').attr('disabled', true).css('background', '#e9ecef');

        $("#ba-user-search").hover(function(){
            $("#ba-user-search").css("background-color", "#6ebbe799");
            }, function(){
                $("#ba-user-search").css("background-color", "transparent");
        });
        $("#ba-btn-save").hover(function(){
            $("#ba-btn-save").css("background-color", "#6ebbe799");
            }, function(){
                $("#ba-btn-save").css("background-color", "transparent");
        });
    });
    

    $('document').ready(function(){

        $('.ba-user-search input').keyup(function(){
            var form = $(this).parents('.ba-user-search');
            var check = checkCampos(form);

            if(check){
                $('#ba-user-search').prop('disabled', false).css('background', 'transparent', 'border', '1px solid #241f1fbf');
            }
            else{
                $('#ba-user-search').prop('disabled', true).css('background', '#e9ecef', 'border','1px solid #ccc');

            }

        });

        $('.ba-text-area textarea').keyup(function(){
            var send = $(this).parents('.ba-text-area');
            var vali = checkCamposta(send);

            if(vali){
                $('#ba-btn-save').prop('disabled', false).css('background', 'transparent');
            }

            else{
                $('#ba-btn-save').prop('disabled', true).css('background', '#e9ecef');
            }
        });

        //Habilitacion del disabled
     /*   $('#ba-user-search').click(function(){
            $('#checkbox-ba-assigned').prop('disabled',false);
            $('#textarea-ba-notes').prop('disabled',false).css('background','transparent');

        }); */

    });
        


