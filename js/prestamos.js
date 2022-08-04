    /*Script para filtro de busqueda*/

    $('document').ready(function(){
        $('#select-gpn').change(function(){
            var valor = $('#select-gpn').val();

            $('#input-gpn').val('').css('background','#e9ecef');
            $('#btn-search-gpn').prop('disabled', true).css('background','#e9ecef');

            if(valor == '0'){
                $('#input-gpn').attr({type:'text', onkeypress:'return soloNumeros(event)', maxlength:'9', placeholder: ' N. Empleado'});
                $('#input-gpn').prop('disabled', false).css('background','transparent');

            }

            if(valor == '1'){
                $('#input-gpn').attr({type:'text', onkeypress:'return soloLetras(event)' , maxlength:'50', placeholder:'Nombre(s), Apellidos'});
                $('#input-gpn').prop('disabled', false).css('background','transparent');
                
            }
        });
        
        });


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

    /*Validacion de LETRAS Y NUMEROS*/
    function letrasNum(e) {

        key = e.keyCode || e.which; 
        teclado = String.fromCharCode(key).toLowerCase();
        letras = " abcdefghijklmnñopqrstuvwxyz1234567890";
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

    /* colores Disabled y Backgrounds de botones*/
    $('document').ready(function(){

        $('#btn-search-gpn').attr("disabled", true).css('background', '#e9ecef');
        $("#btn-search-gpn").hover(function(){
            $("#btn-search-gpn").css("background-color", "#6ebbe799", "border", "1px solid #241f1fbf");
            }, function(){
                $("#btn-search-gpn").css("background-color", "transparent", "border", "1px solid #241f1fbf");
        });

        $('#input-gpn').attr("disabled", true).css('background', '#e9ecef');

        $('#btn-gpn-be').attr("disabled", true).css('background', '#e9ecef');
        $("#btn-gpn-be").hover(function(){
            $("#btn-gpn-be").css("background-color", "#6ebbe799");
            }, function(){
                $("#btn-gpn-be").css("background-color", "transparent");
        });

        $('#input-gpn-be').attr("disabled", true).css('background', '#e9ecef');

        $('#inicio-gpn-pu').attr("disabled", true).css('background', '#e9ecef');
        $('#final-gpn-pu').attr("disabled", true).css('background', '#e9ecef');

        $('#btn-agregar-gpn').attr("disabled", true).css('background', '#e9ecef');
        $("#btn-agregar-gpn").hover(function(){
            $("#btn-agregar-gpn").css("background-color", "#6ebbe799");
            }, function(){
                $("#btn-agregar-gpn").css("background-color", "transparent");
        }); 
        
        $('.btn-acces').attr('disabled', true).css('background','#e9ecef');
        
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

    //validacion de Input Buscar
    $('document').ready(function(){

        $('.search-gpn input').keyup(function(){

        var form = $(this).parents('.search-gpn');
        var check = checkCampos(form);

        if(check) {
            $('#btn-search-gpn').prop('disabled', false).css('background','transparent', 'border', '1px solid #241f1fbf'); 
        }
        
        else {
            $("#btn-search-gpn").prop('disabled', true).css('background','#e9ecef', 'border','1px solid #ccc');
        }
          
    });

    //Disabled:false del input buscar equipo
    $('#btn-search-gpn').click(function(event){
        event.preventDefault();
        $('#input-gpn-be').prop('disabled', false).css('background','transparent');
        
    });

    //Validacion del Input Buscar Equipo
    $('.search-gpn-be input').keyup(function(){

        var send = $(this).parents('.search-gpn-be');
        var ver = checkCampos(send);

        if(ver){
            $('#btn-gpn-be').prop('disabled', false).css('background','transparent','border');
        }

        else {
            $('#btn-gpn-be').prop('disabled', true).css('background','#e9ecef', 'border', '1px solid #ccc')
        }
    });

    //Disabled:false boton agregar accesorios
        $('#btn-gpn-be').click(function(){
            $('#add-gpn-1').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf');
        });

    });


    /*Remover una fila de la tabla de equipos*/
    $('#btn-gpn-quitar').click(function(){
        $('#fil-gpn-be').remove();
    });

    //Agregar Accesorios
    function agregarAcc(valor){
        var numero =valor.id.substring(8, 10);

        switch(  $('#'+ valor.id).text())
            {
                case "+":
                
                $("#td-col-1-"+ numero).append('<input type="text" class="inp-add-acc" id="valor-'+numero+'" onkeypress="return letrasNum(event)" maxlength="50" required placeholder="Escribe un accesorio" style="border-radius:10px; outline:none; padding:4px 18px; border:1px solid #b5b0b0;">');
                $('#'+ valor.id).text('s');
                $('#'+ valor.id).prop('disabled', true).css('background','#e9ecef');
                
                break;

                case "s":

                $('#'+ valor.id).text('–')
                var nuevo= 
                    `<tr id="tr-gpn-${(parseInt(numero)+1)}">
                        <td id="td-col-1-${(parseInt(numero)+1)}"></td>
                        <td id="td-col-2-${(parseInt(numero)+1)}"><button class="btn-acces" id="add-gpn-${(parseInt(numero)+1)}" onclick="agregarAcc(this)">+</button></td>
                    </tr>`

                $('#tbody-acc').append(nuevo)

                $('#' + valor.id).text('–');
                break;

                case "–":

                $('#tr-gpn-'+ numero).remove()
                break;
            } 
   
        //validacion agregar accesorios
        $('document').ready(function(){
                
            $('#tbody-acc tr td input').keyup(function(){
                var enviar = $(this).parents('#tbody-acc ');
                var anls = checkCampos(enviar);
                
                if(anls){
                    $('#'+ valor.id).prop('disabled', false).css('background', 'transparent', 'border','1px solid #b5b0b0');
                    
                }
                else{ 
                    $('#'+ valor.id).prop('disabled', true).css('background','#e9ecef');
                }
            });

            //Disabled:False de Inputs Periodos de Uso
            $('#'+ valor.id).click(function(){
                $('#inicio-gpn-pu').prop('disabled', false).css('background','transparent');
                $('.inp-add-acc').prop('disabled', true);

            
                $('#inicio-gpn-pu').click(function(){
                    $('#final-gpn-pu').prop('disabled', false).css('background', 'transparent');
                });
                $('#final-gpn-pu').click(function(){
                    $('#btn-agregar-gpn').prop('disabled', false).css('background', 'transparent', 'border','1px solid #241f1fbf');
                });
            });
        });
    }

    //Validacion de Inputs para fechas
    $('document').ready(function(){
        $('#inicio-gpn-pu').datetimepicker({
        
            format:'m-d-Y H:i',
            formatDate:'m-d-Y', 
            formatTime:'H:i',
            showButtonPanel: true,      
            showMonthAfterYear: true,
            showWeek: true,
            showAnim: "drop",
            step:30,
            constrainInput: true,
            minDate: new Date((new Date().getFullYear()), new Date().getMonth(), new Date().getDate()), //10 dias despues es la fecha minima
            maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 100), //100 dias despues es la fecha minima
            defaultDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), //la fecha por defecto, la fecha mínima
            defaultTime:true,


        });
        $('#final-gpn-pu').datetimepicker({
        
            format:'m-d-Y H:i',
            formatDate:'m-d-Y', 
            formatTime:'H:i',
            showButtonPanel: true,      
            showMonthAfterYear: true,
            showWeek: true,
            showAnim: "drop",
            step:30,
            constrainInput: true,
            minDate: new Date((new Date().getFullYear()), new Date().getMonth(), new Date().getDate()), //10 dias despues es la fecha minima
            maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 100), //100 dias despues es la fecha minima
            defaultDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), //la fecha por defecto, la fecha mínima
            defaultTime:true,


        });
        });


    /*var dateTime = document.getElementById("inicio-gpn-pu").value;
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("inicio-gpn-pu").setAttribute('min', today);*/
    
    /*Tabla Accesorios, agregar y eliminar */
    /*$('document').ready(function(){
        var maxField = 10;
        var addButton = $('#btn-add-acc');
        var wrapper = $('#tbody-acc');
        var fieldHTML = 
        '<tr><td><input id="input-acc" type="text" required  placeholder="Escribe un Accesorio" style="border-radius:10px; outline:none; border: 1px solid #b5b0b0; padding: 4px 10px; font-size:15px; " > <button class="remove_btn" id="remove-acc" title="Eliminar" ><img src ="img/icons/dash.svg" /></button> <button class="save_btn" id="save-acc" title="Guardar" ><img src="img/icons/check-lg.svg" /></button> </td></tr>';
        var x = 1;
        
        $(addButton).click(function(){
            if(x < maxField){
                x++;
                $(wrapper).append(fieldHTML);
                $(addButton).hide();
                $('.remove_btn').hide();
                
            }

            $('.save_btn').click(function(){
                $('.remove_btn').show();
                $('.save_btn').hide();
                $(addButton).show();
            });

        });

        $(wrapper).on('click','.remove_btn', function(e){
            e.preventDefault();
            $(this).parent('td').remove();
            x--;
        });
    });
    */

        
    