$(document).ready(function() {
    
    $.get("daftar.json", function(data){
    var planetData = '';
    console.log('ok');
    
    $.each(data.comment, function(key, value){
     planetData += `<tr>`
     planetData += '<td>'+value.nama+'</td>'; 
     planetData += '<td>'+value.tanggal+'</td>';
     planetData += '<td>'+value.komentar+'</td>';
     planetData += '<td>'+value.peminat+'</td>';
     
     planetData += `</tr>`;
    });
    
    $('#name').append(planetData);
    });
    
      });


     