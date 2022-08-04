    //Filtros de Catalogos
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

            if(valor == '1'){
                $('#field-ram').show();
                $('#field-os').hide();
                $('#field-category').hide();
                $('#field-pro').hide();
                $('#field-gra').hide();
                $('#field-hardDrive').hide();
                $('.fondo-cat').css('border','none');
                $('#field-cmm').hide();
            }

            if(valor == '2'){
                $('#field-os').show();
                $('#field-ram').hide();
                $('#field-category').hide();
                $('#field-pro').hide();
                $('#field-gra').hide();
                $('#field-hardDrive').hide();
                $('.fondo-cat').css('border','none');
                $('#field-cmm').hide();
            }

            if(valor == '3'){
                
                $('#field-category').show();
                var legend=$("#legend-cat");
                legend.text("Categoria");
                $('#input-cbm').attr('placeholder',' Categoria');
                $('#field-ram').hide();
                $('#field-os').hide();
                $('#field-pro').hide();
                $('#field-gra').hide();
                $('#field-hardDrive').hide();
                $('.fondo-cat').css('border','none');
                $('#field-cmm').hide();
            }

            if(valor == '4'){
                var legend=$("#legend-cat");
                legend.text("Marca");
                $('#input-cbm').attr('placeholder',' Brand');
                $('#field-category').show();
                $('#field-ram').hide();
                $('#field-os').hide();
                $('#field-pro').hide();
                $('#field-gra').hide();
                $('#field-hardDrive').hide();
                $('.fondo-cat').css('border','none');
                $('#field-cmm').hide();
               
            }

            if(valor == '5'){
                $('#field-category').show();
                var legend=$("#legend-cat");
                legend.text("Modelo");
                $('#input-cbm').attr('placeholder',' Modelo');
                $('#field-ram').hide();
                $('#field-os').hide();
                $('#field-pro').hide();
                $('#field-gra').hide();
                $('#field-hardDrive').hide();
                $('.fondo-cat').css('border','none');
                $('#field-cmm').hide();
            }

            if(valor == '6'){
                $('#field-pro').show();
                $('#field-ram').hide();
                $('#field-os').hide();
                $('#field-category').hide();
                $('#field-gra').hide();
                $('#field-hardDrive').hide();
                $('#field-cmm').hide();
                $('.fondo-cat').css('border','none');
                
            }

            if(valor == '7'){
                $('#field-gra').show();
                $('#field-ram').hide();
                $('#field-os').hide();
                $('#field-category').hide();
                $('#field-pro').hide();
                $('#field-hardDrive').hide();
                $('#field-cmm').hide();
                $('.fondo-cat').css('border','none');
            }

            if(valor == '8'){
                $('#field-hardDrive').show();
                $('#field-ram').hide();
                $('#field-os').hide();
                $('#field-category').hide();
                $('#field-pro').hide();
                $('#field-gra').hide();
                $('#field-cmm').hide();
                $('.fondo-cat').css('border','none');
            }
            if(valor == '9'){
                $('#field-cmm').show();
                $('#field-hardDrive').hide();
                $('#field-ram').hide();
                $('#field-os').hide();
                $('#field-category').hide();
                $('#field-pro').hide();
                $('#field-gra').hide();
                $('.fondo-cat').css('border','none');
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
    $('#field-cmm').hide();

    //Letras Mayusculas
    function mayus(e) {
        e.value = e.value.toUpperCase();
    }

    //Colores Disabled
    $('#btn-cat-save').attr('disabled', true).css('background','#e9ecef');
    $('#btn-cat-save').hover(function(){
        $('#btn-cat-save').css('background','#6ebbe799');
    }, function(){
        $('#btn-cat-save').css('background','transparent');
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
                $('#select-bits').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf');
            }

            else{
                $('#select-bits').prop('disabled', true);
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef','border','1px solid #241f1fbf');
            }
        });

        $('#select-bits').change(function(){
            var valid = $('#select-bits').val();

            if(valid == '0'){
                $('#btn-cat-save').prop('disabled', true).css('background','transparent','border','1px solid #241f1fbf'); 
            }
            if(valid == '1'){
                $('#btn-cat-save').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
            }
            if(valid == '2'){
                $('#btn-cat-save').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
            }
            if(valid == '3'){
                $('#btn-cat-save').prop('disabled', false).css('background','transparent','border','1px solid #241f1fbf'); 
            }
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
                $('#btn-cat-save').prop('disabled', true).css('background','#e9ecef','border','1px solid #ccc'); 
            }
        });

        //validacion categoria-marca-modelo
        $('#select-cmm-1').change(function(){
            var valid = $('#select-cmm-1').val();
            
            if(parseInt(valid) >0){
                $('#select-cmm-2').prop('disabled', false).css('background','transparent'); 
            }
        });

        $('#select-cmm-2').change(function(){
            var valid = $('#select-cmm-2').val();
            
            if(parseInt(valid) >0){
                $('#select-cmm-3').prop('disabled', false).css('background','transparent'); 
            }
        });

        $('#select-cmm-3').change(function(){
            var valid = $('#select-cmm-3').val();
            
            if(parseInt(valid) >0){
                $('#btn-cat-save').prop('disabled', false).css('background','transparent'); 
            }
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