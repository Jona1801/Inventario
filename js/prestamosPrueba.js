$('#selectGPN').change(function(){
    var valor = $('#selectGPN').val();

    $('#input-gpn').val();

    if( valor == '1'){
        $('#input-gpn').attr({placeholder:'Num. Empleado', onkeypress:'return soloNum(event)'});
        $('#input-gpn').prop('disabled', false).css('background', 'transparent');
    }

    if( valor == '2'){
        $('#input-gpn').attr({placeholder:'Nombre(s), Apellidos', onkeypress:'return soloLetras(event)'});
        $('#input-gpn').prop('disabled', false).css('background', 'transparent');
    }

});


//Colores Disabled

$('#input-gpn, #input-gpn-be').attr('disabled', true).css('background','#e9ecef');
$('#btn-search-gpn').attr('disabled', true).css('background','#e9ecef');
$('#btn-gpn-be').attr('disabled', true).css('background', '#e9ecef');
$('#btn-agregar-gpn').attr('disabled', true).css('background', '#e9ecef');