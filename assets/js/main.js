/**
 * Created by Djerson on 02/06/2018.
 */

$(document).ready(function () {

    $('.departure-choose').click(function () {

       var subject = $(this)[0];
        $('.departure-choose').removeClass("btn-primary");
        $('.departure-choose').addClass("btn-default");
        $('#'+subject.id).addClass("btn-primary");

       if(subject.id == "departure-adresse")
       {
           $('#departure-in').html('<input type="text" class="form-control input-sm no-rad" placeholder="Adresse de depart">');
       }else if(subject.id == "departure-aero")
       {
           $('#departure-in').html('<select class="form-control input-sm no-rad"><option>Paris SG</option><option>Marseil</option><option>Nantes</option></select>');
       }else if(subject.id == "departure-gare")
       {
           $('#departure-in').html('<select class="form-control input-sm no-rad"><option>Gare 1</option><option>Gare 2</option><option>Gare 3</option></select>');
       }else if(subject.id == "departure-autres")
       {
           $('#departure-in').html('<input type="text" class="form-control input-sm no-rad" placeholder="Autres depart">');
       }

    });


    $('.arrival-choose').click(function () {

        var subject = $(this)[0];
        $('.arrival-choose').removeClass("btn-primary");
        $('.arrival-choose').addClass("btn-default");
        $('#'+subject.id).addClass("btn-primary");

        if(subject.id == "arrival-adresse")
        {
            $('#arrival-in').html('<input type="text" class="form-control input-sm no-rad" placeholder="Adresse de destination">');
        }else if(subject.id == "arrival-aero")
        {
            $('#arrival-in').html('<select class="form-control input-sm no-rad"><option>Paris SG</option><option>Marseil</option><option>Nantes</option></select>');
        }else if(subject.id == "arrival-gare")
        {
            $('#arrival-in').html('<select class="form-control input-sm no-rad"><option>Gare 1</option><option>Gare 2</option><option>Gare 3</option></select>');
        }else if(subject.id == "arrival-autres")
        {
            $('#arrival-in').html('<input type="text" class="form-control input-sm no-rad" placeholder="Autres destination">');
        }

    });

});