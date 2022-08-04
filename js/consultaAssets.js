    //Filtro de busqueda Consulta Assers
    $('document').ready(function(){
        $('#select-ca-be').change(function(){
            var valor = $('#select-ca-be').val();

            $('#input-ca').val('').css('background','#e9ecef');
            $('#btn-ca-be').prop('disabled', true).css('background', '#e9ecef');

            if(valor == '1'){
                $('#input-ca').attr({type:'text', onkeypress:'return soloNumeros(event)', placeholder:'Numero Label'});
                $('#input-ca').prop('disabled', false).css('background', 'transparent');
            }
            if(valor == '2'){
                $('#input-ca').attr({type:'text', onkeypress:'return letrasNum(event)', placeholder:'Numero Serial'});
                $('#input-ca').prop('disabled', false).css('background', 'transparent');
            }
            if(valor == '3'){
                $('#input-ca').attr({type:'text', onkeypress:'return soloLetras(event)', placeholder:'Nombre Equipo'});
                $('#input-ca').prop('disabled', false).css('background', 'transparent');
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

    //Letras y Numeros
    /*  function soloLetrasYNum(campo) {
        var validos = "abcdefghijklmnopqrstuvwxyz0123456789";
        var letra;
        var bien = true;
        for (var i=0; i<campo.value.length; i++) {
         letra=campo.value.charAt(i).toLowerCase()
         if (validos.indexOf(letra) == -1){bien=false;};
         }
         if (!bien) {
         alert("Error. Caracteres no aceptados");
        campo.focus();
       }
       }*/

       /*Validacion de letras */
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


    //Colores, Validacion Input y Habilitacion del boton Search
    $('document').ready(function(){

        //Colores Disabled
        $('#input-ca').attr('disabled', true).css('background', '#e9ecef');
        $('#btn-ca-be').attr('disabled', true).css('background','#e9ecef');

        $('#btn-ca-be').hover(function(){
            $('#btn-ca-be').css('background','#6ebbe799');
        }, function(){
            $('#btn-ca-be').css('background', 'transparent');
        });

        //Validacion Input
        $('.busqueda-equipos-ca input').keyup(function(){
            var env = $(this).parents('.busqueda-equipos-ca');
            var check = checkCampos(env);

            if(check){
                $('#btn-ca-be').prop('disabled', false).css('background', 'transparent');
            }

            else{
                $('#btn-ca-be').prop('disabled', true).css('background','#e9ecef');
            }
        });
   });


   //Funcion para esconder Tabs de tablas
   function openInfo(equiposName) {
    var i;
    var x = document.getElementsByClassName("equipos");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(equiposName).style.display = "block";
  }


  //Cambio de Color Tab al hacer click en el Nav
  $('document').ready(function(){
    $('#btn-info-ca').css('background','#6ebbe794 ');

    $('#btn-info-ca').click(function(){
        $('#btn-info-ca').css('background','#6ebbe794 ');
        $('#btn-historial-ca').css('background','transparent');
    });

    $('#btn-historial-ca').click(function(){
        $('#btn-historial-ca').css('background','#6ebbe794');
        $('#btn-info-ca').css('background','transparent');
    });
  });


