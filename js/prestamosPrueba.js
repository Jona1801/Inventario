$('#selectGPN').change(function(){
    var valor = $('#selectGPN').val();

    $('#input-gpn').val('');
    $('#btn-search-gpn').prop('disabled', true).css('background','#e9ecef');

    if( valor == '1'){
        $('#input-gpn').attr({placeholder:'Num. Empleado', onkeypress:'return soloNumeros(event)'});
        $('#input-gpn').prop('disabled', false).css('background', 'transparent');
    }

    if( valor == '2'){
        $('#input-gpn').attr({placeholder:'Nombre(s), Apellidos', onkeypress:'return soloLetras(event)'});
        $('#input-gpn').prop('disabled', false).css('background', 'transparent');
    }

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

//Colores Disabled

$('#input-gpn, #input-gpn-be').attr('disabled', true).css('background','#e9ecef');
$('#btn-search-gpn').attr('disabled', true).css('background','#e9ecef');
$('#btn-gpn-be').attr('disabled', true).css('background', '#e9ecef');
$('#btn-agregar-gpn').attr('disabled', true).css('background', '#e9ecef');
$('#inicio-gpn-pu, #final-gpn-pu').attr('disabled', true).css('background', '#e9ecef');

//Hovers


//Validacion de Boton Buscar Usuario
$('.search-gpn input').keyup(function(){

    var env = $(this).parents('.search-gpn');
    var check = checkCampos(env);

    if(check){
        $('#btn-search-gpn').prop('disabled', false).css('background', 'transparent', 'border','1px solid #b5b0b0');
    }
    
    else{
        $('#btn-search-gpn').prop('disabled', true).css('background','#e9ecef');
    }
});

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

//Click en el boton buscar
$('#btn-search-gpn').click(function(){
    $('#input-gpn-be').prop('disabled', false).css('background', 'transparent');
});

//Validacion para input Buscar Equipo por LABEL
$('.search-gpn-be input').keyup(function(){
    var form = $(this).parents('.search-gpn-be');
    var check = checkCampos(form);

    if(check){
        $('#btn-gpn-be').prop('disabled', false).css('background','transparent');
    }
    else{
        $('#btn-gpn-be').prop('disabled', true).css('background', '#e9ecef');
    }
});

//Script para Accesorios
//Agregar Accesorios
function agregarAcc(valor){
    var numero =valor.id.substring(8, 10);

    switch(  $('#'+ valor.id).text())
        {
            case "+":
            //VALIDACION PARA INPUT ACCESORIOS ---SE AGREGA LA FUNCION onkeypress="return letrasNum(event)" maxlength="50"
            $("#td-col-1-"+ numero).append('<input type="text" class="inp-add-acc" id="valor-'+numero+'" onkeypress="return letrasNum(event)" maxlength="50" required placeholder="Escribe un accesorio" style="border-radius:10px; outline:none; padding:4px 15px; border:1px solid #b5b0b0;">');
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

    });
}

//Validacion Inputs para fechas
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