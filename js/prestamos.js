
        /*Script para filtro de busqueda*/
        $('#inputnum-gpn').hide();
        $('#inputtext-gpn').hide();

        $('document').ready(function(){
            $('#select_gpn').change(function(){
                var valor = $('#select_gpn').val();

                if(valor == 'numEmpleGpn'){
                    $('#inputnum-gpn').show();
                    $('#inputdis-gpn').hide();
                    $('#inputtex-gpn').hide();
                }
                if(valor == 'nomEmpleGpn'){
                    $('#inputtext-gpn').show();
                    $('#inputdis-gpn').hide();
                    $('#inputnum-gpn').hide();
                    
                }
                if(valor == 'selectOptionGpn'){
                    $('#inputdis-gpn').show();
                    $('#inputnum-gpn').hide();
                    $('#inputtext-gpn').hide();
                }
            });
            });


        /*
        $('#btn-remove-acc').click(function(){
            $('.table-acc tbody tr:last').remove();
        });
        */

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

  

    

        /*Remover una fila de la tabla de equipos*/
        $('#btn-gpn-quitar').click(function(){
            $('#fil-gpn-be').remove();
        });

        $('document').ready(function(){
            var maxField = 10;
            var addButton = $('#btn-add-acc');
            var wrapper = $('#tbody-acc');
            var fieldHTML = 
            '<tr><td><input type="text" required name="field_name[]" placeholder="Escribe un Accesorio" style="border-radius:10px; outline:none; border: 1px solid #b5b0b0; padding: 5px 10px;" > <button class="remove_btn" id="remove-acc" title="Eliminar" ><img src ="img/icons/dash.svg" /></button> <button class="save_btn" id="save-acc" title="Guardar" ><img src="img/icons/check-lg.svg" /></button> </td></tr>';
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
