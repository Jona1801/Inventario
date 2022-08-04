
    //Filtro catalogos 2
    $('document').ready(function(){
        $('#select-catalogos').change(function(){
            var valor = $('#select-catalogos').val();

                $('#input-cbm').val('');
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef');
                $('.field-input-ram input').val('');
                $('.field-input-os input').val('');
                $('.field-input-pg input').val('');
                $('.field-graficas input').val('');
                $('.field-input-hd input').val('');
                $('#input-vendor').val('');
                $('#select-bits').prop('disabled', true);

                if(valor == '1'){
                    $('#field-ram').show();
                    $('#field-os').hide();
                    $('#field-category').hide();
                    $('#field-pro').hide();
                    $('#field-gra').hide();
                    $('#field-hardDrive').hide();
                    $('.fondo-cat').css('border','none');
                    $('#field-vendor').hide();
                    //Values
                    $('#select-bits').val('0');
                    $('.field-selects select').val('0');
                    //procesador
                    $('.field-input-pg select').val('0');
                    $('#select-modelo-pro, #input-pg-1, #input-pg-2').prop('disabled', true);
                    $('.field-graficas select').val('0');
                    //Tarjetas Graficas
                    $('.field-graficas select').val('0');
                    $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
                }

                if( valor == '2'){
                    $('#field-os').show();
                    $('#field-ram').hide();
                    $('#field-category').hide();
                    $('#field-pro').hide();
                    $('#field-gra').hide();
                    $('#field-hardDrive').hide();
                    $('.fondo-cat').css('border','none');
                    $('#field-vendor').hide();
                    //Values
                    $('.field-selects select').val('0');
                    //procesador
                    $('.field-input-pg select').val('0');
                    $('#select-modelo-pro, #input-pg-1, #input-pg-2').prop('disabled', true);
                    $('.field-graficas select').val('0');
                    //Tarjetas Graficas
                    $('.field-graficas select').val('0');
                    $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
                }

                if( valor == '3'){
                    $('#field-category').show();
                    var legend = $('#legend-cat');
                    legend.text('Categoría');
                    $('#input-cbm').attr('placeholder', 'Categoría');
                    $('#field-ram').hide();
                    $('#field-os').hide();
                    $('#field-pro').hide();
                    $('#field-gra').hide();
                    $('#field-hardDrive').hide();
                    $('#field-vendor').hide();
                    $('.fondo-cat').css('border','none');
                    //Values
                    $('#select-bits').val('0');
                    $('.field-selects select').val('0');
                    //procesador
                    $('.field-input-pg select').val('0');
                    $('#select-modelo-pro, #input-pg-1, #input-pg-2').prop('disabled', true);
                    $('.field-graficas select').val('0');
                    //Tarjetas Graficas
                    $('.field-graficas select').val('0');
                    $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
                    
                }

                if( valor == '4'){
                    $('#field-category').show();
                    var legend = $('#legend-cat');
                    legend.text('Marca');
                    $('#input-cbm').attr('placeholder', 'Marca');
                    $('#field-ram').hide();
                    $('#field-os').hide();
                    $('#field-pro').hide();
                    $('#field-gra').hide();
                    $('#field-hardDrive').hide();
                    $('#field-vendor').hide();
                    $('.fondo-cat').css('border','none');
                    //Values
                    $('#select-bits').val('0');
                    $('.field-input-pg select').val('0');
                    $('#select-modelo-pro, #input-pg-1, #input-pg-2').prop('disabled', true);
                    //Tarjetas Graficas
                    $('.field-graficas select').val('0');
                    $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);

                }

                if( valor == '5'){
                    $('#field-category').show();
                    var legend = $('#legend-cat');
                    legend.text('Modelo');
                    $('#input-cbm').attr('placeholder', 'Modelo');
                    $('#field-ram').hide();
                    $('#field-os').hide();
                    $('#field-pro').hide();
                    $('#field-gra').hide();
                    $('#field-hardDrive').hide();
                    $('#field-vendor').hide();
                    $('.fondo-cat').css('border','none');
                    //Values
                    $('#select-bits').val('0');
                    $('.field-input-pg select').val('0');
                    $('#select-modelo-pro, #input-pg-1, #input-pg-2').prop('disabled', true);
                    //Tarjetas Graficas
                    $('.field-graficas select').val('0');
                    $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
                    

                }

                if(valor == '6'){
                    $('#field-pro').show();
                    $('#field-ram').hide();
                    $('#field-os').hide();
                    $('#field-category').hide();
                    $('#field-gra').hide();
                    $('#field-hardDrive').hide();
                    $('#field-vendor').hide();
                    $('.fondo-cat').css('border','none');
                    //Values
                    $('#select-bits').val('0');
                    //Tarjetas Graficas
                    $('.field-graficas select').val('0');
                    $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
                    
                }

                if(valor == '7'){
                    $('#field-gra').show();
                    $('#field-ram').hide();
                    $('#field-os').hide();
                    $('#field-category').hide();
                    $('#field-pro').hide();
                    $('#field-hardDrive').hide();
                    $('#field-vendor').hide();
                    $('.fondo-cat').css('border','none');
                    //Values
                    $('#select-bits').val('0');
                    //procesador
                    $('.field-input-pg select').val('0');
                    $('#select-modelo-pro, #input-pg-1, #input-pg-2').prop('disabled', true);

                }

                if(valor == '8'){
                    $('#field-hardDrive').show();
                    $('#field-ram').hide();
                    $('#field-os').hide();
                    $('#field-category').hide();
                    $('#field-pro').hide();
                    $('#field-gra').hide();
                    $('#field-vendor').hide();
                    $('.fondo-cat').css('border','none');
                    //Values
                    $('#select-bits').val('0');
                    //procesador
                    $('.field-input-pg select').val('0');
                    $('#select-modelo-pro, #input-pg-1, #input-pg-2').prop('disabled', true);
                    //Tarjetas Graficas
                    $('.field-graficas select').val('0');
                    $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
                }

                if(valor == '9'){
                    $('#field-vendor').show();
                    $('#field-ram').hide();
                    $('#field-os').hide();
                    $('#field-category').hide();
                    $('#field-pro').hide();
                    $('#field-gra').hide();
                    $('#field-hardDrive').hide();
                    $('.fondo-cat').css('border','none');
                    //Values
                    $('#select-bits').val('0');
                    //Values Procesador
                    $('.field-input-pg select').val('0');
                    $('#select-modelo-pro, #input-pg-1, #input-pg-2').prop('disabled', true);
                    //Values Tarjeta Grafica
                    $('.field-graficas select').val('0');
                    $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);

                }
        });
        
    });

        
    //Fieldsets Ocultos
    $('#field-ram').hide();
    $('#field-os').hide();
    $('#field-category').hide();
    $('#field-pro').hide();
    $('#field-hardDrive').hide();
    $('#field-gra').hide();
    $('#field-vendor').hide();

    //Letras Mayusculas
    function mayus(e) {
        e.value = e.value.toUpperCase();
    }

    //Colores disabled
    $('#lbl-cat').css('background','#6ebbe780');  
    $('#btn-cat-save').attr('disabled', true).css('background','#e9ecef');
    $('#btn-relacion-save').attr('disabled', true).css('background','#e9ecef');     
    $('#btn-spects-save').attr('disabled', true).css('background','#e9ecef');   
    $('#btn-guardar-plantas').attr('disabled', true).css('background', '#e9ecef');
    $('#btn-rel-plant-save').attr('disabled', true).css('background', '#e9ecef');
        //Color Hover Boton guardar catalogos               
        $('#btn-cat-save').hover(function(){
            $('#btn-cat-save').css('background','#6ebbe799');
        }, function(){
            $('#btn-cat-save').css('background','transparent');
        });

        //Color Hover Boton guardar relacion               
        $('#btn-relacion-save').hover(function(){
            $('#btn-relacion-save').css('background','#6ebbe799');
        }, function(){
            $('#btn-relacion-save').css('background','transparent');
        });

        //color Hover Boton guardar Spects
        $('#btn-spects-save').hover(function(){
            $('#btn-spects-save').css('background','#6ebbe799');
        }, function(){
            $('#btn-spects-save').css('background','transparent');
        });

        //color Hover Boton guardar Spects
        $('#btn-guardar-plantas').hover(function(){
            $('#btn-guardar-plantas').css('background','#6ebbe799');
        }, function(){
            $('#btn-guardar-plantas').css('background','transparent');
        });

        //color Hover Boton guardar Spects
        $('#btn-rel-plant-save').hover(function(){
            $('#btn-rel-plant-save').css('background','#6ebbe799');
        }, function(){
            $('#btn-rel-plant-save').css('background','transparent');
        });



    //Cambio de Color Tab y Tamaños al hacer Click Menu
    $('document').ready(function(){
        $('#btn-cat-cn').css('background','#6ebbe780');  
        $('#btn-spects-save').attr('disabled', true).css('background','#e9ecef');
        $('#btn-relacion-save').attr('disabled', true).css('background','#e9ecef');
       

        //MENU CATALOGOS
        $('#btn-cat-cn').click(function(){
            $('#btn-cat-cn').css('background','#6ebbe780');
            $('#btn-relacion-cn').css('background','transparent');
            $('#btn-spects-cn').css('background','transparent');
            $('#btn-plantas-cn').css('background', 'transparent');
            $('#btn-rel-plantas-cn').css('background', 'transparent');

            //Width para contenedor Catalogos
            $('.section-cn').css('width','42%'); 
            //Catalogos
            $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef');
            //selects categoria,marca,modelo
            $('.field-selects select').val('0');
            $('#select-cmm-2, #select-cmm-3').attr('disabled', true);
            $('#btn-relacion-save').prop('disabled', true).css('background','#e9ecef');
            //Selects Spects
            $('.content-selects-spects select').val('0');
            $('#select-model-cn, #select-gp-cn, #select-ram-cn, #select-os-cn, #select-cpu-cn, #select-hdd-cn').val('0').prop('disabled', true);
            $('#btn-spects-save').attr('disabled', true).css('background','#e9ecef');
            //Radios
            $('.radios-spects input').prop('checked', false);
            //Values Plantas
            $('#input-area, #input-planta, #input-edificio, #input-locacion').val('');
            $('#btn-guardar-plantas').prop('disabled', true).css('background', '#e9ecef');
            //Selects Relacion Plantas
            $('.field-selects-rp select').val('0');
            $('#select-rp-2, #select-rp-3, #select-rp-4').attr('disabled', true);
            $('#btn-rel-plant-save').prop('disabled', true).css('background', '#e9ecef');
        });

        //MENU RELACION CATALOGO, MARCA, MODELO 
        $('#btn-relacion-cn').click(function(){
            $('#btn-relacion-cn').css('background','#6ebbe780');
            $('#btn-cat-cn').css('background','transparent');
            $('#btn-spects-cn').css('background','transparent');
            $('#relacion-cn').css( 'flex-direction','column','justify-content','center');
            $('#btn-rel-plantas-cn').css('background', 'transparent');

            $('#btn-plantas-cn').css('background', 'transparent');
            //Width para contenedor C.M.M
            $('.section-cn').css('width','42%');
            //Valores Vacios
            $('.field-input-ram input').val('');
            $('.field-input-os input').val('');
            $('.field-input-pg input').val('');
            $('.field-graficas input').val('');
            $('.field-input-hd input').val('');
            $('#input-vendor').val('');
            //catalogos
            $('#select-bits').val('0').prop('disabled', true);
            $('#input-cbm').val('');
            //Procesador
            $('.field-input-pg select').val('0');
            $('#select-modelo-pro, #input-pg-1, #input-pg-2 ').prop('disabled', true);
            //Tarjeta Graficas
            $('.field-graficas select').val('0');
            $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
            //Selects spects
            $('.content-selects-spects select').val('0');
            $('#select-model-cn, #select-gp-cn, #select-ram-cn, #select-os-cn, #select-cpu-cn, #select-hdd-cn').val('0').prop('disabled', true);
            $('#btn-spects-save').attr('disabled', true).css('background','#e9ecef');
            //Radios
            $('.radios-spectsinput').prop('checked', false);
            //Values Plantas
            $('#input-area, #input-planta, #input-edificio, #input-locacion').val('');
            $('#btn-guardar-plantas').prop('disabled', true).css('background', '#e9ecef');
            //Selects Relacion Plantas
            $('.field-selects-rp select').val('0');
            $('#select-rp-2, #select-rp-3, #select-rp-4').attr('disabled', true);
            $('#btn-rel-plant-save').prop('disabled', true).css('background', '#e9ecef');
            
        });

        //MENU SPECTS
        $('#btn-spects-cn').click(function(){
            $('#btn-spects-cn').css('background','#6ebbe780');
            $('#btn-cat-cn').css('background','transparent');
            $('#btn-relacion-cn').css('background','transparent');
            $('#btn-plantas-cn').css('background', 'transparent');
            $('#btn-rel-plantas-cn').css('background', 'transparent');

            //Width para contenedor Spects
            $('.section-cn').css('width','auto');
            //Valores Vacios
            $('.field-input-ram input').val('');
            $('.field-input-os input').val('');
            $('.field-input-pg input').val('');
            $('.field-graficas input').val('');
            $('.field-input-hd input').val('');  
            $('#input-vendor').val('');
            //catalogos
            $('#select-bits').val('0').prop('disabled', true);
            $('#input-cbm').val('');
            //Procesador
            $('.field-input-pg select').val('0');
            $('#select-modelo-pro, #input-pg-1, #input-pg-2 ').prop('disabled', true);
            //Tarjeta Graficas
            $('.field-graficas select').val('0');
            $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
            //selects categoria,marca,modelo
            $('.field-selects select').val('0');
            $('#select-cmm-2, #select-cmm-3').attr('disabled', true);
            $('#btn-relacion-save').prop('disabled', true).css('background','#e9ecef');
            //selects categoria,marca,modelo
            $('.field-selects select').val('0');
            //Radios
            $('.radios-spects input').prop('checked', false);
            $('#select-brand-cn').prop('disabled', true);
            //Values Plantas
            $('#input-area, #input-planta, #input-edificio, #input-locacion').val('');
            $('#btn-guardar-plantas').prop('disabled', true).css('background', '#e9ecef');
            //Selects Relacion Plantas
            $('.field-selects-rp select').val('0');
            $('#select-rp-2, #select-rp-3, #select-rp-4').attr('disabled', true);
            $('#btn-rel-plant-save').prop('disabled', true).css('background', '#e9ecef');

        });

        //MENU PLANTAS
        $('#btn-plantas-cn').click(function(){
            $('#btn-plantas-cn').css('background', '#6ebbe780');
            $('#btn-spects-cn').css('background', 'transparent');
            $('#btn-relacion-cn').css('background', 'transparent');
            $('#btn-cat-cn').css('background','transparent');
            $('#btn-rel-plantas-cn').css('background', 'transparent');

            //Width para contenedor Catalogos
            $('.section-cn').css('width','42%');
            //Valores Vacios
            $('.field-input-ram input').val('');
            $('.field-input-os input').val('');
            $('.field-input-pg input').val('');
            $('.field-graficas input').val('');
            $('.field-input-hd input').val('');
            $('#input-cbm').val('');
            $('#input-vendor').val('');
            //Select OS
            $('#select-bits').val('0').prop('disabled', true);
            //Procesador
            $('.field-input-pg select').val('0');
            $('#select-modelo-pro, #input-pg-1, #input-pg-2 ').prop('disabled', true);
            //Tarjeta Grafica
            $('.field-graficas select').val('0');
            $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
            //categoria, marca, modelo
            $('.field-selects select').val('0');
            $('#select-cmm-2, #select-cmm-3').attr('disabled', true);
            $('#btn-relacion-save').prop('disabled', true).css('background','#e9ecef');
             //Selects spects
             $('.content-selects-spects select').val('0');
             $('#select-model-cn, #select-gp-cn, #select-ram-cn, #select-os-cn, #select-cpu-cn, #select-hdd-cn').val('0').prop('disabled', true);
             $('#btn-spects-save').attr('disabled', true).css('background','#e9ecef');
             //Selects Relacion Plantas
            $('.field-selects-rp select').val('0');
            $('#select-rp-2, #select-rp-3, #select-rp-4').attr('disabled', true);
            $('#btn-rel-plant-save').prop('disabled', true).css('background', '#e9ecef');
            //Values Plantas
            $('#input-area, #input-planta, #input-edificio, #input-locacion').val('');
            $('#btn-guardar-plantas').prop('disabled', true).css('background', '#e9ecef');

        });

        //Ocultar Fieldsets Plantas
        $('#field-planta, #field-edificio, #field-area').hide();
        //Radios Plantas
        $('#radio-locacion').prop('checked', true);
        $('#radio-locacion').click(function(){
            $('#field-locacion').show();
            $('#field-planta').hide();
            $('#field-edificio').hide();
            $('#field-area').hide();
            $('#input-planta, #input-edificio, #input-area').val('');
            $('#btn-guardar-plantas').prop('disabled',true).css('background','#e9ecef');

        });

        $('#radio-planta').click(function(){
            $('#field-planta').show();
            $('#field-locacion').hide();
            $('#field-edificio').hide();
            $('#field-area').hide();
            $('#input-locacion, #input-edificio, #input-area').val('');
            $('#btn-guardar-plantas').prop('disabled',true).css('background','#e9ecef');
        });

        $('#radio-edificio').click(function(){
            $('#field-edificio').show();
            $('#field-locacion').hide();
            $('#field-planta').hide();
            $('#field-area').hide();
            $('#input-locacion, #input-planta, #input-area').val('');
            $('#btn-guardar-plantas').prop('disabled',true).css('background','#e9ecef');

        });

        $('#radio-area').click(function(){
            $('#field-area').show();
            $('#field-locacion').hide();
            $('#field-edificio').hide();
            $('#field-planta').hide();
            $('#input-locacion, #input-planta, #input-edificio').val('');
            $('#btn-guardar-plantas').prop('disabled',true).css('background','#e9ecef');

        });

        //MENU RELACION PLANTAS
        $('#btn-rel-plantas-cn').click(function(){
            $('#btn-rel-plantas-cn').css('background', '#6ebbe780');
            $('#btn-plantas-cn').css('background', 'transparent');
            $('#btn-spects-cn').css('background', 'transparent');
            $('#btn-relacion-cn').css('background', 'transparent');
            $('#btn-cat-cn').css('background','transparent');
            //Width para contenedor relacion plantas
            $('.section-cn').css('width','42%');
            //Valores Vacios catalogos
            $('.field-input-ram input').val('');
            $('.field-input-os input').val('');
            $('.field-input-pg input').val('');
            $('.field-graficas input').val('');
            $('.field-input-hd input').val('');
            $('#input-vendor').val('');
            //catalogos
            $('#select-bits').val('0').prop('disabled', true);
            $('#input-cbm').val('');
            //Procesador
            $('.field-input-pg select').val('0');
            $('#select-modelo-pro, #input-pg-1, #input-pg-2 ').prop('disabled', true);
            //Tarjeta Graficas
            $('.field-graficas select').val('0');
            $('#select-modelo-ta, #input-gra-1, #input-gra-2').prop('disabled', true);
             //categoria, marca, modelo
             $('.field-selects select').val('0');
             $('#select-cmm-2, #select-cmm-3').attr('disabled', true);
             $('#btn-relacion-save').prop('disabled', true).css('background','#e9ecef');
            //Selects spects
            $('.content-selects-spects select').val('0');
            $('#select-model-cn, #select-gp-cn, #select-ram-cn, #select-os-cn, #select-cpu-cn, #select-hdd-cn').val('0').prop('disabled', true);
            $('#btn-spects-save').attr('disabled', true).css('background','#e9ecef');
        });
    });


    //Validaciones
    $('document').ready(function(){

        //Validacion Ram
        $('.field-input-ram input').keyup(function(){
            var form = $(this).parents('.field-input-ram');
            var check = checkCampos(form);
            
            if(check){
                
                $('#btn-cat-save').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
            }

            else{
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef', 'border','1px solid #ccc');
            }
           
        });



        //validacion OS
        $('.field-input-os input').keyup(function(){

            var env = $(this).parents('.field-input-os');
            var ana = checkCampos(env);

            if(ana){
                $('#select-bits').val('0').prop('disabled', false).css('background','transparent');
            }

            else
            {
                $('#select-bits').val('0').prop('disabled', true);
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef');
            }

            $('#select-bits').change(function(){
                var valid = $('#select-bits').val();

                if(parseInt(valid)>0){
                    $('#btn-cat-save').prop('disabled', false).css('background','transparent', 'border','1px solid #241f1fbf'); 
                }

                else{
                    $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef', 'border','1px solid #241f1fbf');     
                }

            });
    
                
        });


        //validacion Categoria, Marca, modelo
        $('.field-input-cat #input-cbm').keyup(function(){
            var send = $(this).parents('.field-input-cat');
            var anals = checkCampos(send);

            if(anals){
                $('#btn-cat-save').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
            }

            else{
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef','border','1px solid #ccc'); 
            }
        });


        //Validacion procesador
        $('#select-marca-pro').change(function(){
            var valid = $('#select-marca-pro').val();

            if(parseInt(valid)>0){
                $('#select-modelo-pro').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
            }
        });
        $('#select-modelo-pro').change(function(){
            var valid = $('#select-modelo-pro').val();
        
            if(parseInt(valid)>0){
                $('#input-pg-1').prop('disabled', false);
                $('#input-pg-1').keyup(function(){
                    var send = $(this).parents('#input-pg-1');
                    var anals = checkCampos(send);
        
                    if(anals){
                        
                        $('#input-pg-2').prop('disabled', false).css('background','transparent');
                    }
        
                    else{
                        $('#input-pg-2').prop('disabled', true);
                        $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef','border','1px solid #ccc'); 
                    }
                });
            }
        });

        $('.field-input-pg input').keyup(function(){
            var send = $(this).parents('.field-input-pg');
            var anals = checkCampos(send);

            if(anals){
                $('#btn-cat-save').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
            }

            else{
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef','border','1px solid #ccc'); 
            }
        });


        //Validacion Tarjetas graficas
        $('#select-marca-ta').change(function(){
            var valid = $('#select-marca-ta').val();
            
            if(parseInt(valid)>0){
                $('#select-modelo-ta').prop('disabled', false).css('background','transparent'); 
            }
        });

        $('#select-modelo-ta').change(function(){
            var valid = $('#select-modelo-ta').val();
            
            if(parseInt(valid)>0){
                $('#input-gra-1').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
                $('#input-gra-1').keyup(function(){
                    var send = $(this).parents('#input-gra-1');
                    var anals = checkCampos(send);
        
                    if(anals){
                        $('#input-gra-2').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
                    }
        
                    else{
                        $('#input-gra-2').prop('disabled', true);
                        $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef','border','1px solid #ccc'); 
                    }
                });
            }
        });

        $('.field-graficas input').keyup(function(){
            var send = $(this).parents('.field-graficas');
            var anals = checkCampos(send);

            if(anals){
                $('#btn-cat-save').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
            }

            else{
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef','border','1px solid #ccc'); 
            }
        });


        //Validacion Disco
        $('.field-input-hd input').keyup(function(){
            var send = $(this).parents('.field-input-hd');
            var anals = checkCampos(send);

            if(anals){
                $('#btn-cat-save').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
            }

            else{
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef'); 
            }
        });

        //Validacion Vendedor
        $('.field-input-vendor input').keyup(function(){
            var env = $(this).parents('.field-input-vendor');
            var check = checkCampos(env);

            if(check){
                $('#btn-cat-save').prop('disabled', false).css('background','transparent');
            }
            else{
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef');
            }
        });


        //validacion categoria-marca-modelo
        $('#select-cmm-1').change(function(){
            var valid = $('#select-cmm-1').val();
            
            $('#btn-cat-save').attr('disabled', true).css('background','#e9ecef');
    
            if(parseInt(valid)>0){
                $('#select-cmm-2').prop('disabled', false).css('background','transparent'); 
            }
        });

        $('#select-cmm-2').change(function(){
            var valid = $('#select-cmm-2').val();
            
            if(parseInt(valid)>0){
                $('#select-cmm-3').prop('disabled', false).css('background','transparent'); 
            }
        });

        $('#select-cmm-3').change(function(){
            var valid = $('#select-cmm-3').val();
            
            if(parseInt(valid)>0){
                $('#btn-relacion-save').prop('disabled', false).css('background','transparent'); 
            }
        });


        //Validacion Spects
        $('#select-brand-cn').change(function(){
            var valida = $('#select-brand-cn').val();

            if(parseInt(valida)>0){
                $('#select-model-cn').prop('disabled', false);
            }
        });
            $('#select-model-cn').change(function(){
                var valid = $('#select-model-cn').val();

                if(parseInt(valid)>0){
                    $('#select-gp-cn').prop('disabled', false);
                }
            });

            $('#select-gp-cn').change(function(){
                var valid = $('#select-gp-cn').val();

                if(parseInt(valid)>0){
                    $('#select-ram-cn').prop('disabled',false);
                }
            });

            $('#select-ram-cn').change(function(){
                var valid = $('#select-ram-cn').val();

                if(parseInt(valid)>0){
                    $('#select-os-cn').prop('disabled', false);
                }
            });

            $('#select-os-cn').change(function(){
                var valid = $('#select-os-cn').val();

                if(parseInt(valid)>0){
                    $('#select-cpu-cn').prop('disabled',false);
                }
            });

            $('#select-cpu-cn').change(function(){
                var valid = $('#select-cpu-cn').val();

                if(parseInt(valid)>0){
                    $('#select-hdd-cn').prop('disabled', false);
                }
            });

            $('#select-hdd-cn').change(function(){
                var valid = $('#select-hdd-cn').val();

                if(parseInt(valid)>0){
                    $('#btn-spects-save').prop('disabled', false).css('background','transparent');
                }
            });
        
    });

    //Validacion Relacion Plantas
    $('#select-rp-1').change(function(){
        var valid = $('#select-rp-1').val();
        

        if(parseInt(valid)>0){
            $('#select-rp-2').prop('disabled', false).css('background','transparent'); 
        }
    });

    $('#select-rp-2').change(function(){
        var valid = $('#select-rp-2').val();
        
        if(parseInt(valid)>0){
            $('#select-rp-3').prop('disabled', false).css('background','transparent'); 
        }
    });

    $('#select-rp-3').change(function(){
        var valid = $('#select-rp-3').val();
        
        if(parseInt(valid)>0){
            $('#select-rp-4').prop('disabled', false).css('background','transparent'); 
        }
    });

    $('#select-rp-4').change(function(){
        var valid = $('#select-rp-4').val();
        
        if(parseInt(valid)>0){
            $('#btn-rel-plant-save').prop('disabled', false).css('background','transparent'); 
        }
    });


    //Condicion para RadioButtons Spects
    $('#radio-compu').click(function(){
        
        $('.content-selects-spects select').val('0').prop('disabled', true);
        $('#select-model-cn').prop('disabled', false);
        $('#btn-spects-save').prop('disabled', true).css('background', '#e9ecef');
    });

    $('#radio-terminal').click(function(){
       
        $('.content-selects-spects select').val('0').prop('disabled', true);
        $('#select-brand-cn').prop('disabled', false);
        $('#btn-spects-save').prop('disabled', true).css('background','#e9ecef');
    });


    //Validacion Locacion
    $('.field-input-locacion input').keyup(function(){
        var envi = $(this).parents('.field-input-locacion');
        var anls = checkCampos(envi);

        if(anls){
            $('#btn-guardar-plantas').prop('disabled', false).css('background','transparent');
        }

        else{
            $('#btn-guardar-plantas').prop('disabled', true).css('background', '#e9ecef');
        }
    });

    //Validacion Plantas
    $('.field-input-planta input').keyup(function(){
        var envi = $(this).parents('.field-input-planta');
        var anls = checkCampos(envi);

        if(anls){
            $('#btn-guardar-plantas').prop('disabled', false).css('background','transparent');
        }

        else{
            $('#btn-guardar-plantas').prop('disabled', true).css('background', '#e9ecef');
        }
    });

    //Edificios
    $('.field-input-planta input').keyup(function(){
        var env = $(this).parents('.field-input-planta');
        var anl = checkCampos(envi);

        if(anl){
            $('#btn-guardar-plantas').prop('disabled', false).css('background','transparent');

        }
        else{
            $('#btn-guardar-plantas').prop('disabled', true).css('background','#e9ecef');

        }
    });
    //Areas
    $('.field-input-area input').keyup(function(){
        var env = $(this).parents('.field-input-area');
        var ana = checkCampos(env);

        if(ana){
            $('#btn-guardar-plantas').prop('disabled', false).css('background','transparent');
        }

        else{
            $('#btn-guardar-plantas').prop('disabled', true).css('background', '#e9ecef');
        }
    });


    //Agregar GB a Input Ram
    $('#input-ram-1').keyup(function(e){

        //Tecla Eliminar
        if(e.keyCode == 8 || e.keyCode == 46){
            var numero = $('#input-ram-1').val();
            numero = numero.substring(0, numero.value.length - 1);
        }

        if ($('#input-ram-1').val().length>0) { 
            var numero = $('#input-ram-1').val();

            
                $('#input-ram-1').val('');  
                numero = numero.replace(' GB','') +' GB';
                $('#input-ram-1').val(numero); 
                
        }

        else
        {
            $('#input-ram-1').val('');
        }
        
    });


    //Agregar GB a Input Tarjeta Grafica
    $('#input-gra-1').keyup(function(e){
       
        //Tecla Eliminar
        if(e.keyCode == 8 || e.keyCode == 46){
            var numero = $('#input-gra-1').val();
            numero = numero.substring(0, numero.value.length - 1);
        }

        if($('#input-gra-1').val().length>0) {
            var numero = $('#input-gra-1').val();

                $('#input-gra-1').val('');
                numero = numero.replace(' GB', '') + ' GB';
                $('#input-gra-1').val(numero);
           
            
        }

        else{
            $('#input-gra-1').val('');
        }

    });


    //Agregar GB a Input Disco
    $('#input-hd-1').keyup(function(e){

        //Tecla Eliminar
        if(e.keyCode == 8 || e.keyCode == 46){
            var numero = $('#input-hd-1').val();
            numero = numero.substring(0, numero.value.length - 1);

        }

        if ($('#input-hd-1').val().length>0) { 
            var numero = $('#input-hd-1').val();

                
                $('#input-hd-1').val('');
                numero = numero.replace(' GB','') + ' GB';
                $('#input-hd-1').val(numero); 
           
        }

        else
        {
            $('#input-hd-1').val('');
        }
  
    });

    /*
    //Agregar GB a Input Tarjeta Grafica
    $('#input-gra-1').keyup(function(e){
       
        //Tecla Eliminar
        if(e.keyCode == 8 || e.keyCode == 46){
            var numero = $('#input-gra-1').val();
            numero = numero.substring(0, numero.value.length - 1);
        }

        if($('#input-gra-1').val().length>0) {
            var numero = $('#input-gra-1').val();

            if(numero.indexOf('G') == -1){
                $('#input-gra-1').val('');
                numero = numero.replace(' GB', '') + ' GB';
                $('#input-gra-1').val(numero);
            }
            
        }

        else{
            $('#input-gra-1').val('');
        }

    }); */
    

    //Funcion para esconder Tabs de tablas
    function openInfo(tabs) {
        var i;
        var x = document.getElementsByClassName("content-tabs");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        }
        document.getElementById(tabs).style.display = "block";
           
    }

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

    function soloNum(e) {

        key = e.keyCode || e.which; 
        teclado = String.fromCharCode(key).toLowerCase();
        letras = "0123456789";
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

    function soloVersion(e) {

        key = e.keyCode || e.which; 
        teclado = String.fromCharCode(key).toLowerCase();
        letras = " abcdefghijklmnñopqrstuvwxyz1234567890.";
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

    function letrasNumGuion(e) {

        key = e.keyCode || e.which; 
        teclado = String.fromCharCode(key).toLowerCase();
        letras = " abcdefghijklmnñopqrstuvwxyz1234567890-";
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