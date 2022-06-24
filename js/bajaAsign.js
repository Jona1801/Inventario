
/*Filtro User search de Baja asignaciones */
$('#inputnum-ba-us').hide();
$('#inputtext-ba-us').hide();

$('document').ready(function(){
    $('#select_ba_us').change(function(){
        var valor = $('#select_ba_us').val();

        $('#inputnum-ba-us').val('');
        $('#inputtext-ba-us').val('');

        if(valor == 'numEmple'){
            $('#inputnum-ba-us').show();
            $('#inputdis-ba-us').hide();
            $('#inputtext-ba-us').hide();
            
        }
        if(valor == 'nomEmple'){
            $('#inputtext-ba-us').show();
            $('#inputdis-ba-us').hide();
            $('#inputnum-ba-us').hide();
            
        }

        if(valor == 'selectOption'){
            $('#inputdis-ba-us').show();
            $('#inputnum-ba-us').hide();
            $('#inputtext-ba-us').hide();
        }

    });

    /*
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
});

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

/*Habilitacion de Disabled*/               
$('document').ready(function(){

    $('#inputnum-ba-us').keypress(function(){
        $('#btn-ba-us').prop('disabled', false);
    });

    $('#btn-ba-us').click(function(){
        $('#textarea-ba-notes').prop('disabled',false);
        $('#checkbox-ba-assigned').prop('disabled',false);
        $('#btn-ba-save').prop('disabled',false);
        
    });

});
      


