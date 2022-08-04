    /*Filtros de busqueda */

    $('document').ready(function(){

        $('#select-dp-us').change(function(){
            var valor = $('#select-dp-us').val();

            $('#input-dp-us').val('').css('background', '#e9ecef');
            $('#btn-dp-us').prop('disabled',true).css('background','#e9ecef');
            
            if(valor == '1'){
                $('#input-dp-us').attr({type:'text', onkeypress:'return soloNumeros(event)', maxlength:'9', placeholder:' N. Empleado'});
                $('#input-dp-us').prop('disabled', false).css('background', 'transparent');
            }
            if(valor == '2'){
                $('#input-dp-us').attr({type:'text', onkeypress:'return soloLetras(event)', maxlength:'50', placeholder:' Nombre(s), Apellidos'});
                $('#input-dp-us').prop('disabled', false).css('background', 'transparent');
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

    /*Eliminacion de botones para la tabla devolucion de prestamos */
    $('#btn1-quitar-dp').click(function(){
        $('#f1-table-dp').remove();
    });

    $('#btn2-quitar-dp').click(function(){
        $('#f2-table-dp').remove();
    });
    
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


    /*Colores Disabled */
    $('document').ready(function(){
        $('#input-dp-us').attr('disabled', true).css('background', '#e9ecef');
        
        $('#btn-dp-us').attr('disabled', true).css('background', '#e9ecef');
        $('#textarea-dp-mb').attr('disabled', true).css('background','#e9ecef');
        $('#btn-dp-mb').attr('disabled', true).css('background', '#e9ecef');

        $("#btn-dp-us").hover(function(){
            $("#btn-dp-us").css("background-color", "#6ebbe799");
            }, function(){
                $("#btn-dp-us").css("background-color", "transparent");
        });

        $("#btn-dp-mb").hover(function(){
            $("#btn-dp-mb").css("background-color", "#6ebbe799");
            }, function(){
                $("#btn-dp-mb").css("background-color", "transparent");
        });

    });

    $('document').ready(function(){
        $('.dp-user-search input').keyup(function(){
            var form = $(this).parents('.dp-user-search');
            var check = checkCampos(form);

            if(check){
                $('#btn-dp-us').prop('disabled', false).css('background','transparent');
            }
            else{
                $('#btn-dp-us').prop('disabled', true).css('background', '#e9ecef')
            }
        });

       
    });


    //FUNCION PARA MOSTRAR MENSAJE DE FOLIOS AL HACER CLICK EN LA TR DE LA TABLA
    var folio = document.getElementById('folio');
    var content = document.getElementById('tr-bp-1');

    //Funcion que oculta y muestra

    function showHide(e){
        e.preventDefault();
        e.stopPropagation();
        if(folio.style.display == "none"){
            folio.style.display = "block";
        }
        else if (folio.style.display == "block"){
            folio.style.display = "none";
        }
    }

    //Click en el TR
    content.addEventListener("click", showHide, false);

    //Funcion para Cualquier click en el documento
    document.addEventListener("click", function(e){

        //obtiendo informacion del DOM para  
        var clic = e.target;
        
        if(folio.style.display == "block" && clic != folio){
         folio.style.display = "none";
        }
        }, false);