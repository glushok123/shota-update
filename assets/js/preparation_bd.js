$(document).ready(function() {
    toastr.options.timeOut = 5000; // 3s
    var kol = 0
    var schet = 0
    var size_f = []
    var testsize = 0



    $(document).on('click', '#dir-name', function() {
        var dateId = {
            "dir": $(this).attr('data-v')
        };

        $('#n_dela_db').val($(this).attr('data-number').replace(/[^0-9]/gi, ''))
        $('#z_ed_x_db').val($(this).attr('data-number').replace(/[^0-9]/gi, ''))
        $('#l_dela_db').val($(this).attr('data-number').replace(/\d+/g, ''))
        $('#abbr_arh_db').val($(this).attr('data-arh'))
        $('#n_fonda_db').val($(this).attr('data-fond').replace(/[^0-9]/gi, ''))
        $('#n_opisi_db').val($(this).attr('data-opis').replace(/[^0-9]/gi, ''))
        $('#l_fonda_db').val($(this).attr('data-fond').replace(/\d+/g, ''))
        $('#l_opisi_db').val($(this).attr('data-opis').replace(/\d+/g, ''))

        $.post("get_foto2.php", dateId, function(data) {
            var obj = JSON.parse(data);
            var a = obj.foto;

            $("#example5").html('');

            a.forEach(function(entry) {
                let arr = (entry.name).split('/');
                var name = arr[arr.length - 1];
                name = name.replace(/^0+/, '');
                list = name.slice(0, -4)

                if(name.length > 4) {
                    $("#example5").append('	<tr role="row" class="odd img_replace item" data-prov="false" data-namedir="'+entry.name+'"><td><input value="'+name+'" class="form-control name_file" disabled></td></tr>');
                    kol = kol + 1
                }
            })

            toastr.success('Дело загружено !');
        })
    });



    $(document).on('click', '.img_replace', function() {
        imgS = '<img src="' + $(this).attr('data-namedir') + '" class="img_size minimized" id="image_id"/>'
        $(".img_show").html(imgS)
    })

    function getKolScan() {
        var kolScan = 0;
        $("tr.item").each(function() {
            kolScan = kolScan + 1;
        })

        return kolScan;
    }

    function saveBD_bd(nameFilePhp) {
        let text2 = ''
        let prov_s = 0
        let kolScan = getKolScan();
        let mainUrl = $("#abbr_arh_db").val() + "/" + $("#n_fonda_db").val() + $("#l_fonda_db").val() + "/" + $("#n_opisi_db").val() + $("#l_opisi_db").val() + "/" + $("#n_dela_db").val() + $("#l_dela_db").val();
        let text_main = '{';
        text_main = text_main + '"abbr_arh": "' + $("#abbr_arh_db").val() + '", ';
        text_main = text_main + '"l_fonda": "' + $("#l_fonda_db").val() + '", ';
        text_main = text_main + '"n_fonda": ' + $("#n_fonda_db").val() + ',';
        text_main = text_main + '"n_opisi": ' + $("#n_opisi_db").val() + ',  ';
        text_main = text_main + '"l_opisi": "' + $("#l_opisi_db").val() + '",';
        text_main = text_main + '"tom": "' + $("#tom_db").val() + '",   ';
        text_main = text_main + '"name_opis": "' + $("#name_opis_db").val() + '",'
        text_main = text_main + '"r1": "' + $("#r1_db option:selected").val() + '",  ';
        text_main = text_main + '"r2": "' + $("#r2_db option:selected").val() + '",';
        text_main = text_main + '"r3": "' + $("#r3_db option:selected").val() + '", ';
        text_main = text_main + '"r4": "' + $("#r4_db option:selected").val() + '",';
        text_main = text_main + '"n_dela": ' + $("#n_dela_db").val() + ', ';
        text_main = text_main + '"l_dela": "' + $("#l_dela_db").val() + '",';
        text_main = text_main + '"z_ed_x": "' + $("#z_ed_x_db").val() + '", ';
        text_main = text_main + '"end_data_dela": "' + $("#end_data_dela_db").val() + '",';
        text_main = text_main + '"data_n":"' + $("#data_n_db").val() + '",   ';
        text_main = text_main + '"data_k": "' + $("#data_k_db").val() + '",';
        text_main = text_main + '"kol_listov": ' + $("#kol_listov_db").val() + ', ';
        text_main = text_main + '"kol_f1": ' + kolScan + ', ';
        text_main = text_main + '"kol_f2": ' + kolScan + ', ';
        text_main = text_main + '"prim": "' + $("#prim_db").val() + '",';

        $("tr.item").each(function() {
            prov_s = prov_s + 1
            let obr = ($(this).find(".name_file").val()).replace("JPG", "tif")
            obr = obr.replace("JPEG", "tif")
            obr = obr.replace("jpg", "tif")
            obr = obr.replace("jpeg", "tif")
            let url1 = ""
            let url2 = ""
            url1 = mainUrl + "/jpg/" + $(this).find(".name_file").val()
            url2 = mainUrl + "/tiff/" + obr
            url1 = url1.replace("#", "")
            url2 = url2.replace("#", "")
            if(prov_s == kolScan) {
                text2 = text2 + '{"f1": "' + url1 + '#' + url1 + '", "f2": "' + url2 + '#' + url2 + '"}'
            } else {
                text2 = text2 + '{"f1": "' + url1 + '#' + url1 + '", "f2": "' + url2 + '#' + url2 + '"},'
            }
        })
        text_main = text_main + '"files": [' + text2 + "]}";

        var dateid = {
            "text_main": text_main
        };

        $.post(nameFilePhp, dateid, function(data) {
            data = JSON.parse(data)

            if(data['success'] == "true") {
                toastr.success(data['text']);
            }else{
                toastr.error(data['text']);
            }
        })
    }

    function removeIsInvalid(){
        $("#abbr_arh_db").removeClass('is-invalid');
        $("#l_fonda_db").removeClass('is-invalid');
        $("#n_fonda_db").removeClass('is-invalid');
        $("#n_opisi_db").removeClass('is-invalid');
        $("#l_opisi_db").removeClass('is-invalid');
        $("#tom_db").removeClass('is-invalid');
        $("#name_opis_db").removeClass('is-invalid');
        $("#r1_db").removeClass('is-invalid');
        $("#r2_db").removeClass('is-invalid');
        $("#r3_db").removeClass('is-invalid');
        $("#r4_db").removeClass('is-invalid');
        $("#n_dela_db").removeClass('is-invalid');
        $("#l_dela_db").removeClass('is-invalid');
        $("#z_ed_x_db").removeClass('is-invalid');
        $("#kol_listov_db").removeClass('is-invalid');
        $("#prim_db").removeClass('is-invalid');
        $("#data_n_db").removeClass('is-invalid');
        $("#data_k_db").removeClass('is-invalid');
    }

    function validation(){
        removeIsInvalid();

        if(! $("#abbr_arh_db").val()) {
            $("#abbr_arh_db").addClass('is-invalid');
            toastr.error('Необходимо заполнить название архива !');
            return false;
        }

        if(! $("#n_fonda_db").val()) {
            $("#n_fonda_db").addClass('is-invalid');
            toastr.error('Необходимо заполнить номер фонда !');
            return false;
        }

        if(! $("#n_opisi_db").val()) {
            $("#n_opisi_db").addClass('is-invalid');
            toastr.error('Необходимо заполнить номер описи !');
            return false;
        }

        if(! $("#n_dela_db").val()) {
            $("#n_dela_db").addClass('is-invalid');
            toastr.error('Необходимо заполнить номер дела !');
            return false;
        }

        if(! $("#data_n_db").val()) {
            $("#data_n_db").addClass('is-invalid');
            toastr.error('Необходимо заполнить дату начала !');
            return false;
        }

        if(! $("#data_k_db").val()) {
            $("#data_k_db").addClass('is-invalid');
            toastr.error('Необходимо заполнить дату конца !');
            return false;
        }

        if(! $("#kol_listov_db").val()) {
            $("#kol_listov_db").addClass('is-invalid');
            toastr.error('Необходимо заполнить количество листов !');
            return false;
        }

        return true;
    }

    $(document).on('click', '#save_bd', function() {
        if(validation() == false) {
            return;
        }

        saveBD_bd('bd_insert.php');
    });

});

$(function() {
    $(document).on('click', '.minimized', function() {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });
    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});


window.document.onkeydown = function () {
    startRefocus();
}
function startRefocus(event) {
    event = event || window.event;
    if (!event.ctrlKey) return; // Закомментируйте эту строку, если Ctrl не нужен
    var key = event.keyCode;
    var targetElement = event.target || event.srcElement;
    focusMe(targetElement, key);
}
function focusMe(input, key) {
    var needFocusElement = true;
    function detectColumn(td) {
        var result = 0, x;
        while (td = td.previousElementSibling) {
            ++result
        }
        return result;
    }
    try {
        switch (key) {
            case 37:
                needFocusElement = input.parentNode.previousElementSibling.querySelector("input");
                break;
            case 39: 
                needFocusElement = input.parentNode.nextElementSibling.querySelector("input");
                break;
            case 38:
                needFocusElement = input.parentNode.parentNode.previousElementSibling.querySelectorAll("td")[detectColumn(input.parentNode)].querySelector("input");
                break;
            case 40: 
                needFocusElement = input.parentNode.parentNode.nextElementSibling.querySelectorAll("td")[detectColumn(input.parentNode)].querySelector("input");
        }
    } catch (e) {
        needFocusElement = false;
    }

    if (!needFocusElement) return;
    needFocusElement.focus();
}

$('#search-dir-name').bind('input', function() {
	var st_poisk = $(this).val();
    
	$(".search-dir-name").each(function (){
		if (($(this).attr('data-number')).includes(st_poisk)){
			$(this).css('display','inline-block')
		}else{
			$(this).css('display','none')
		}
	});
});