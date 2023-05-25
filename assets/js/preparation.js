$(document).ready(function() {
    toastr.options.timeOut = 5000; // 3s
    var kol = 0;
    var schet = 0;
    var size_f = [];
    var testsize = 0;
    var withoutFrills = false;

    function checksize(files) {
        if ($('#scales').is(':checked')) {
            testsize = 1;
        } else {
            testsize = 0;
        }

        if ($('#withoutFrills').is(':checked')) {
            withoutFrills = true;
        } else {
            withoutFrills = false;
        }

        var img = new Image();
        img.src = files;

        img.onload = function() {
            wi = this.width + 300
            hi = this.height
            $("tr.item").each(function() {
                if ($(this).attr('data-namedir') == files) {
                    $(this).attr('data-wf', wi);
                    $(this).attr('data-hf', hi);
                    schet = schet + 1;

                    if (schet == kol) {
                        var z_pred = "-1";
                        var z_pred_str = "123";
                        var z_s_pred = "0";
                        $('.pace').removeClass('pace-active');
                        $('.pace').addClass('pace-inactive');

                        if (withoutFrills == true) {
                            $("tr.item").each(function() {
                                z_s = $(this).find(".list").val();
    
                                if(z_pred == "-1") {
                                    z_pred = "0"
                                    $(this).find(".list").val("!обл")
                                } else {
                                    if(z_s_pred == "0") {
                                        if((! z_pred_str.toString().includes("об"))) {
                                            if(z_pred == "0") {
                                                z_pred = '1'
                                                $(this).find(".list").val("0001")
                                            } else {
                                                z_pred = parseInt(z_pred)
                                                z_s = z_pred + 1
                                                z_pred = z_s
                                                z_pred_str = z_s
                                                if(z_s.toString().length == 1) {
                                                    z_s = "000" + z_s
                                                }
                                                if(z_s.toString().length == 2) {
                                                    z_s = "00" + z_s
                                                }
                                                if(z_s.toString().length == 3) {
                                                    z_s = "0" + z_s
                                                }
                                                if(z_s.toString().length == 4) {
                                                    z_s = z_s
                                                }
                                                $(this).find(".list").val(z_s)
                                            }
                                        } else {
                                            z_pred = parseInt(z_pred)
                                            z_s = z_pred + 1
                                            z_pred = z_s
                                            z_pred_str = z_s
                                            if(z_s.toString().length == 1) {
                                                z_s = "000" + z_s
                                            }
                                            if(z_s.toString().length == 2) {
                                                z_s = "00" + z_s
                                            }
                                            if(z_s.toString().length == 3) {
                                                z_s = "0" + z_s
                                            }
                                            if(z_s.toString().length == 4) {
                                                z_s = z_s
                                            }
                                            $(this).find(".list").val(z_s)
                                        }
                                    } else {
                                        z_pred = parseInt(z_pred)
                                        z_s = z_pred + 1
                                        z_pred = z_s
                                        z_pred_str = z_s
                                        if(z_s.toString().length == 1) {
                                            z_s = "000" + z_s
                                        }
                                        if(z_s.toString().length == 2) {
                                            z_s = "00" + z_s
                                        }
                                        if(z_s.toString().length == 3) {
                                            z_s = "0" + z_s
                                        }
                                        if(z_s.toString().length == 4) {
                                            z_s = z_s
                                        }
                                        $(this).find(".list").val(z_s)
                                    }
                                    z_s_pred = "0"
                                }
                            })
                        }
                        else{
                            $("tr.item").each(function() {
                                z_s = $(this).find(".list").val();
    
                                if(z_pred == "-1") {
                                    z_pred = "0"
                                    $(this).find(".list").val("!обл")
                                } else {
                                    if(testsize == 0) {
                                        if($(this).attr('data-wf') < $(this).attr('data-hf')) {
                                            if(z_s_pred == "0") {
                                                if((!z_pred_str.toString().includes("об"))) {
                                                    if(z_pred == "0") {
                                                        z_pred = '1'
                                                        $(this).find(".list").val("0001")
                                                    } else {
                                                        if(z_pred.toString().length == 1) {
                                                            z_pred_strg = "000" + z_pred + "об"
                                                        }
                                                        if(z_pred.toString().length == 2) {
                                                            z_pred_strg = "00" + z_pred + "об"
                                                        }
                                                        if(z_pred.toString().length == 3) {
                                                            z_pred_strg = "0" + z_pred + "об"
                                                        }
                                                        if(z_pred.toString().length == 4) {
                                                            z_pred_strg = z_pred + "об"
                                                        }
                                                        z_pred_str = z_pred + "об"
                                                        $(this).find(".list").val(z_pred_strg)
                                                    }
                                                } else {
                                                    z_pred = parseInt(z_pred)
                                                    z_s = z_pred + 1
                                                    z_pred = z_s
                                                    z_pred_str = z_s
                                                    if(z_s.toString().length == 1) {
                                                        z_s = "000" + z_s
                                                    }
                                                    if(z_s.toString().length == 2) {
                                                        z_s = "00" + z_s
                                                    }
                                                    if(z_s.toString().length == 3) {
                                                        z_s = "0" + z_s
                                                    }
                                                    if(z_s.toString().length == 4) {
                                                        z_s = z_s
                                                    }
                                                    $(this).find(".list").val(z_s)
                                                }
                                            } else {
                                                z_pred_str = z_pred + "об"
                                                if(z_pred.toString().length == 1) {
                                                    z_pred_strg = "000" + z_pred + "об"
                                                }
                                                if(z_pred.toString().length == 2) {
                                                    z_pred_strg = "00" + z_pred + "об"
                                                }
                                                if(z_pred.toString().length == 3) {
                                                    z_pred_strg = "0" + z_pred + "об"
                                                }
                                                if(z_pred.toString().length == 4) {
                                                    z_pred_strg = z_pred + "об"
                                                }
                                                $(this).find(".list").val(z_pred_strg)
                                            }
                                            z_s_pred = "0"
                                        } else {
                                            z_s_pred = "1"
                                            z_predt = z_pred
                                            z_pred = parseInt(z_pred)
                                            t2 = z_pred + 1
                                            if(z_predt.toString().length == 1) {
                                                z_predt = "000" + z_pred
                                            }
                                            if(z_predt.toString().length == 2) {
                                                z_predt = "00" + z_predt
                                            }
                                            if(z_predt.toString().length == 3) {
                                                z_predt = "0" + z_predt
                                            }
                                            if(z_predt.toString().length == 4) {
                                                z_predt = z_predt
                                            }
                                            if(t2.toString().length == 1) {
                                                t2 = "000" + t2
                                            }
                                            if(t2.toString().length == 2) {
                                                t2 = "00" + t2
                                            }
                                            if(t2.toString().length == 3) {
                                                t2 = "0" + t2
                                            }
                                            if(t2.toString().length == 4) {
                                                t2 = t2
                                            }
                                            z_s = z_predt + "об_" + (t2) + "л"
                                            z_pred = z_pred + 1
                                            $(this).find(".list").val(z_s)
                                        }
                                    } else {
                                        if(z_s_pred == "0") {
                                            if((! z_pred_str.toString().includes("об"))) {
                                                if(z_pred == "0") {
                                                    z_pred = '1'
                                                    $(this).find(".list").val("0001")
                                                } else {
                                                    if(z_pred.toString().length == 1) {
                                                        z_pred_strg = "000" + z_pred + "об"
                                                    }
                                                    if(z_pred.toString().length == 2) {
                                                        z_pred_strg = "00" + z_pred + "об"
                                                    }
                                                    if(z_pred.toString().length == 3) {
                                                        z_pred_strg = "0" + z_pred + "об"
                                                    }
                                                    if(z_pred.toString().length == 4) {
                                                        z_pred_strg = z_pred + "об"
                                                    }
                                                    z_pred_str = z_pred + "об"
                                                    $(this).find(".list").val(z_pred_strg)
                                                }
                                            } else {
                                                z_pred = parseInt(z_pred)
                                                z_s = z_pred + 1
                                                z_pred = z_s
                                                z_pred_str = z_s
                                                if(z_s.toString().length == 1) {
                                                    z_s = "000" + z_s
                                                }
                                                if(z_s.toString().length == 2) {
                                                    z_s = "00" + z_s
                                                }
                                                if(z_s.toString().length == 3) {
                                                    z_s = "0" + z_s
                                                }
                                                if(z_s.toString().length == 4) {
                                                    z_s = z_s
                                                }
                                                $(this).find(".list").val(z_s)
                                            }
                                        } else {
                                            z_pred_str = z_pred + "об"
                                            if(z_pred.toString().length == 1) {
                                                z_pred_strg = "000" + z_pred + "об"
                                            }
                                            if(z_pred.toString().length == 2) {
                                                z_pred_strg = "00" + z_pred + "об"
                                            }
                                            if(z_pred.toString().length == 3) {
                                                z_pred_strg = "0" + z_pred + "об"
                                            }
                                            if(z_pred.toString().length == 4) {
                                                z_pred_strg = z_pred + "об"
                                            }
                                            $(this).find(".list").val(z_pred_strg)
                                        }
                                        z_s_pred = "0"
                                    }
                                }
                            })
                        }
                    }
                }
            })
        };
    }

    $(document).on('click', '#dir', function() {
        var dateid = {
            "dir": $(this).attr('data-v')
        };

        $.post("get_foto.php", dateid, function(data) {
            var obj = JSON.parse(data);
            var a = obj.foto;
            $("#example4").html('');

            a.forEach(function(entry) {
                let arr = (entry.name).split('/');
                var name = arr[arr.length - 1];
                name = name.replace(/^0+/, '');
                list = name.slice(0, -4)
                $("#example4").append('	<tr role="row" class="odd img_replace item" data-prov="false" data-namedir="' + entry.name + '"><td><input value="' + list + '" data-obr="no" class="form-control list" ></td><td><input value="' + name + '" class="form-control name_file" ></td><td><button id="delete" type="button" class="btn btn btn-danger m-1 px-5 radius-30">Удалить</button></td></tr>');
                kol = kol + 1
            })

            toastr.success('Дело загружено, ожидайте переименования!');

            $("tr.item").each(function() {
                checksize($(this).attr('data-namedir'));
            })

            toastr.success('Файла переименованы!');
        })
    });

    $(document).on('click', '#delete', function() {
        var dateid = {
            "url": $(this).parent().parent().attr('data-namedir')
        };

        $.post("del.php", dateid, function(data) {
            //
        })

        toastr.success('Удален из таблицы!');
        $(this).parent().parent().remove()
    })

    $(document).on('click', '.img_replace', function() {
        imgS = '<img src="' + $(this).attr('data-namedir') + '" class="img_size minimized" id="image_id"/>'
        $(".img_show").html(imgS)
    })

    $('.n_am').on('blur', function() {
        name = $(this).val()
        $("tr.item").each(function() {
            $(this).find(".n_a").val(name);
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $('.l_fm').on('blur', function() {
        name = $(this).val()
        $("tr.item").each(function() {
            $(this).find(".l_f").val(name);
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $('.n_fm').on('blur', function() {
        name = $(this).val()
        $("tr.item").each(function() {
            $(this).find(".n_f").val(name);
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $('.n_om').on('blur', function() {
        name = $(this).val()
        $("tr.item").each(function() {
            $(this).find(".n_o").val(name);
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $('.l_om').on('blur', function() {
        name = $(this).val()
        $("tr.item").each(function() {
            $(this).find(".l_o").val(name);
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $('.t_om').on('blur', function() {
        name = $(this).val()
        $("tr.item").each(function() {
            $(this).find(".t_o").val(name);
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $('.r_sm').on('blur', function() {
        name = $(this).val()
        $("tr.item").each(function() {
            $(this).find(".r_s").val(name);
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $('#l_dela').on('blur', function() {
        $("tr.item").each(function() {
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $('#n_dela').on('blur', function() {
        $("tr.item").each(function() {
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $(document).on('blur', '.list', function() {
        $(this).parents().attr("data-prov", "tru")
        var provt = "0"
        var z_pred = "-1"
        var z_pred_str = "123"
        var z_s_pred = "0"
        var scet7 = 0
        var scet9 = 0

        if ($('#withoutFrills').is(':checked')) {
            withoutFrills = true;
        } else {
            withoutFrills = false;
        }

        $("tr.item").each(function() {
            scet7 = scet7 + 1
        })
        $("tr.item").each(function() {
            scet9 = scet9 + 1;

            if($(this).find(".list").val().includes("!обл")) {
                return;
            }
            if(provt == "0") {
                //console.log("ОК")
            } else {
                ///////start
                z_s = $(this).find(".list").val()
                if(z_pred == "-1") {
                    z_pred = "0"
                    $(this).find(".list").val("!обл")
                } else {
                    if (withoutFrills == true) {
                        if(z_s_pred == "0") {
                            if(z_pred == "0") {
                                z_pred = '1'
                                $(this).find(".list").val("1")
                            } else {
                                z_pred = parseInt(z_pred)
                                z_s = z_pred + 1
                                z_pred = z_s
                                z_pred_str = z_s
                                if(z_s.toString().length == 1) {
                                    z_s = "000" + z_s
                                }
                                if(z_s.toString().length == 2) {
                                    z_s = "00" + z_s
                                }
                                if(z_s.toString().length == 3) {
                                    z_s = "0" + z_s
                                }
                                if(z_s.toString().length == 4) {
                                    z_s = z_s
                                }
                                $(this).find(".list").val(z_s)
                            }
                        } else {
                            z_pred = parseInt(z_pred)
                            z_s = z_pred + 1
                            z_pred = z_s
                            z_pred_str = z_s
                            if(z_s.toString().length == 1) {
                                z_s = "000" + z_s
                            }
                            if(z_s.toString().length == 2) {
                                z_s = "00" + z_s
                            }
                            if(z_s.toString().length == 3) {
                                z_s = "0" + z_s
                            }
                            if(z_s.toString().length == 4) {
                                z_s = z_s
                            }
                            $(this).find(".list").val(z_s)
                        }
                    }else{
                        if(testsize == 0) {
                            if($(this).attr('data-wf') < $(this).attr('data-hf')) {
                                if(z_s_pred == "0") {
                                    if((!z_pred_str.toString().includes("об"))) {
                                        if(z_pred == "0") {
                                            z_pred = '1'
                                            $(this).find(".list").val("1")
                                        } else {
                                            z_pred_str = z_pred + "об"
                                            if(z_pred.toString().length == 1) {
                                                z_pred_strg = "000" + z_pred + "об"
                                            }
                                            if(z_pred.toString().length == 2) {
                                                z_pred_strg = "00" + z_pred + "об"
                                            }
                                            if(z_pred.toString().length == 3) {
                                                z_pred_strg = "0" + z_pred + "об"
                                            }
                                            if(z_pred.toString().length == 4) {
                                                z_pred_strg = z_pred + "об"
                                            }
                                            $(this).find(".list").val(z_pred_strg)
                                        }
                                    } else {
                                        z_pred = parseInt(z_pred)
                                        z_s = z_pred + 1
                                        z_pred = z_s
                                        z_pred_str = z_s
                                        if(z_s.toString().length == 1) {
                                            z_s = "000" + z_s
                                        }
                                        if(z_s.toString().length == 2) {
                                            z_s = "00" + z_s
                                        }
                                        if(z_s.toString().length == 3) {
                                            z_s = "0" + z_s
                                        }
                                        if(z_s.toString().length == 4) {
                                            z_s = z_s
                                        }
                                        $(this).find(".list").val(z_s)
                                    }
                                } else {
                                    z_pred_str = z_pred + "об"
                                    if(z_pred.toString().length == 1) {
                                        z_pred_strg = "000" + z_pred + "об"
                                    }
                                    if(z_pred.toString().length == 2) {
                                        z_pred_strg = "00" + z_pred + "об"
                                    }
                                    if(z_pred.toString().length == 3) {
                                        z_pred_strg = "0" + z_pred + "об"
                                    }
                                    if(z_pred.toString().length == 4) {
                                        z_pred_strg = z_pred + "об"
                                    }
                                    $(this).find(".list").val(z_pred_strg)
                                }
                                z_s_pred = "0"
                            } else {
                                z_s_pred = "1"
                                z_predt = z_pred
                                z_pred = parseInt(z_pred)
                                t2 = z_pred + 1
                                if(z_predt.toString().length == 1) {
                                    z_predt = "000" + z_pred
                                }
                                if(z_predt.toString().length == 2) {
                                    z_predt = "00" + z_predt
                                }
                                if(z_predt.toString().length == 3) {
                                    z_predt = "0" + z_predt
                                }
                                if(z_predt.toString().length == 4) {
                                    z_predt = z_predt
                                }
                                if(t2.toString().length == 1) {
                                    t2 = "000" + t2
                                }
                                if(t2.toString().length == 2) {
                                    t2 = "00" + t2
                                }
                                if(t2.toString().length == 3) {
                                    t2 = "0" + t2
                                }
                                if(t2.toString().length == 4) {
                                    t2 = t2
                                }
                                z_s = z_predt + "об_" + (t2) + "л"
                                z_pred = z_pred + 1
                                $(this).find(".list").val(z_s)
                            }
                        } else {
                            if((!z_pred_str.toString().includes("об"))) {
                                if(z_pred == "0") {
                                    z_pred = '1'
                                    $(this).find(".list").val("1")
                                } else {
                                    z_pred_str = z_pred + "об"
                                    if(z_pred.toString().length == 1) {
                                        z_pred_strg = "000" + z_pred + "об"
                                    }
                                    if(z_pred.toString().length == 2) {
                                        z_pred_strg = "00" + z_pred + "об"
                                    }
                                    if(z_pred.toString().length == 3) {
                                        z_pred_strg = "0" + z_pred + "об"
                                    }
                                    if(z_pred.toString().length == 4) {
                                        z_pred_strg = z_pred + "об"
                                    }
                                    $(this).find(".list").val(z_pred_strg)
                                }
                            } else {
                                z_pred = parseInt(z_pred)
                                z_s = z_pred + 1
                                z_pred = z_s
                                z_pred_str = z_s
                                if(z_s.toString().length == 1) {
                                    z_s = "000" + z_s
                                }
                                if(z_s.toString().length == 2) {
                                    z_s = "00" + z_s
                                }
                                if(z_s.toString().length == 3) {
                                    z_s = "0" + z_s
                                }
                                if(z_s.toString().length == 4) {
                                    z_s = z_s
                                }
                                $(this).find(".list").val(z_s)
                            }
                        }
                    }

                }
                ///////stop
            }
            if($(this).attr("data-prov") == 'tru') {
                $(this).attr("data-prov", "false")
                provt = "1"
                z_pred_str = $(this).find(".list").val()
                if($(this).attr('data-wf') < $(this).attr('data-hf')) {
                    z_s_pred = "0"
                } else {
                    z_s_pred = "1"
                }
                t = $(this).find(".list").val()
                t2 = t.replace(/[^0-9,\s]/g, "_")
                t3 = t2.split('_').map(Number);
                console.log(t3)
                    /*
                    if (t3[3] == undefined )
                    {
                            z_pred = t3[0]
                    }else {
                            z_pred = t3[3]
                    }*/
                var t3 = t3.filter(function(f) {
                    return f !== 0
                })
                if(t.toString().includes("_")) {
                    z_pred = t3[1]
                } else {
                    z_pred = t3[0]
                }
            }
            if(scet9 == scet7) {
                $(this).find(".list").val("зав")
            }
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            /*if ($(".t_om").val() != ""){
                name_f = name_f+ "_" +$(".t_om").val()
            }*/
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });

        $("tr.item").each(function() {
            let name_f = ""
            if($(".n_am").val() != "") {
                name_f = name_f + $(".n_am").val() + "_"
            }
            if($(".l_fm").val() != "") {
                name_f = name_f + $(".l_fm").val()
            }
            if($(".n_fm").val() != "") {
                name_f = name_f + $(".n_fm").val() + "_"
            }
            if($(".n_om").val() != "") {
                name_f = name_f + $(".n_om").val()
            }
            if($(".l_om").val() != "") {
                name_f = name_f + $(".l_om").val()
            }
            if($(".t_om").val() != "") {
                /*name_f = name_f+ "_" +$(".t_om").val()*/
            }
            if($("#n_dela").val() != "") {
                name_f = name_f + "_" + $("#n_dela").val()
            }
            if($("#l_dela").val() != "") {
                name_f = name_f + $("#l_dela").val()
            }
            name_f = name_f + "_" + $(this).find(".list").val()
            if($(".r_sm").val() != "") {
                name_f = name_f + "_" + $(".r_sm").val()
            }
            name_f = name_f + ".JPG"
            $(this).find(".name_file").val(name_f);
        });
    })

    $(document).on('click', '#avtosize', function() {
        $("tr.item").each(function() {
            checksize($(this).attr('data-namedir'));
        })
    });

    $(document).on('click', '#avtoname', function() {
        var z_pred = "-1"
        var z_pred_str = "123"
        var z_s_pred = "0"
        $("tr.item").each(function() {
            z_s = $(this).find(".list").val()
            if(z_pred == "-1") {
                z_pred = "0"
                $(this).find(".list").val("!обл")
            } else {
                if($(this).attr('data-wf') < $(this).attr('data-hf')) {
                    if(z_s_pred == "0") {
                        if((!z_pred_str.toString().includes("об"))) {
                            if(z_pred == "0") {
                                z_pred = '1'
                                $(this).find(".list").val("1")
                            } else {
                                z_pred_str = z_pred + "об"
                                $(this).find(".list").val(z_pred_str)
                            }
                        } else {
                            z_pred = parseInt(z_pred)
                            z_s = z_pred + 1
                            z_pred = z_s
                            z_pred_str = z_s
                            $(this).find(".list").val(z_s)
                        }
                    } else {
                        z_pred_str = z_pred + "об"
                        $(this).find(".list").val(z_pred_str)
                    }
                    z_s_pred = "0"
                } else {
                    z_s_pred = "1"
                    z_predt = z_pred
                    z_pred = parseInt(z_pred)
                    t2 = z_pred + 1
                    z_s = z_predt + "об_" + (t2) + "л"
                    z_pred = z_pred + 1
                    $(this).find(".list").val(z_s)
                }
            }
        })
    });

    function getKolScan() {
        var kolScan = 0;
        $("tr.item").each(function() {
            kolScan = kolScan + 1;
        })
        return kolScan;
    }

    function setNameAndDirectScan() {
        var kol7 = 0
        var json_nf = {}
        var mainUrl = $("#abbr_arh").val() + "/" + $("#n_fonda").val() + $("#l_fonda").val() + "/" + $("#n_opisi").val() + $("#l_opisi").val() + "/" + $("#n_dela").val() + $("#l_dela").val()
        $("tr.item").each(function() {
            json_nf[$(this).attr('data-namedir')] = $(this).find(".name_file").val()
            kol7 = kol7 + 1
            if(kol7 % 50 == 0) {
                var dateid = {
                    "dir": $(this).attr('data-v'),
                    "file": json_nf,
                    "no": $(".n_om").val(),
                    "url": mainUrl + "/jpg"
                };
                $.ajax({
                    type: 'POST',
                    url: "save.php",
                    data: dateid,
                    success: function(data) {
                        json_nf = {}
                        //toastr.success("Успешно переименовано " + kol7 + "!");
                        //toastr.error('errors messages');
                        //toastr.warning('warning messages');
                        //toastr.info('info messages');
                        //console.log("Успешно переименовано " + kol7 + "!")
                    },
                    async: false
                });
            }
        })
        var dateid = {
            "dir": $(this).attr('data-v'),
            "file": json_nf,
            "no": $(".n_om").val(),
            "url": mainUrl + "/jpg"
        };
        $.ajax({
            type: 'POST',
            url: "save.php",
            data: dateid,
            success: function(data) {
                json_nf = {}
                toastr.success("Успешно переименовано " + kol7 + " файлов!");
                //console.log("Успешно переименовано " + kol7 + "!")
            },
            async: false
        });
    }

    function saveBD(nameFilePhp) {
        let text2 = ''
        let prov_s = 0
        let kolScan = getKolScan();
        let mainUrl = $("#abbr_arh").val() + "/" + $("#n_fonda").val() + $("#l_fonda").val() + "/" + $("#n_opisi").val() + $("#l_opisi").val() + "/" + $("#n_dela").val() + $("#l_dela").val();
        let text_main = '{';
        text_main = text_main + '"abbr_arh": "' + $("#abbr_arh").val() + '", ';
        text_main = text_main + '"l_fonda": "' + $("#l_fonda").val() + '", ';
        text_main = text_main + '"n_fonda": ' + $("#n_fonda").val() + ',';
        text_main = text_main + '"n_opisi": ' + $("#n_opisi").val() + ',  ';
        text_main = text_main + '"l_opisi": "' + $("#l_opisi").val() + '",';
        text_main = text_main + '"tom": "' + $("#tom").val() + '",   ';
        text_main = text_main + '"name_opis": "' + $("#name_opis").val() + '",'
        text_main = text_main + '"r1": "' + $("#r1 option:selected").val() + '",  ';
        text_main = text_main + '"r2": "' + $("#r2 option:selected").val() + '",';
        text_main = text_main + '"r3": "' + $("#r3 option:selected").val() + '", ';
        text_main = text_main + '"r4": "' + $("#r4 option:selected").val() + '",';
        text_main = text_main + '"n_dela": ' + $("#n_dela").val() + ', ';
        text_main = text_main + '"l_dela": "' + $("#l_dela").val() + '",';
        text_main = text_main + '"z_ed_x": "' + $("#z_ed_x").val() + '", ';
        text_main = text_main + '"end_data_dela": "' + $("#end_data_dela").val() + '",';
        text_main = text_main + '"data_n":"' + $("#data_n").val() + '",   ';
        text_main = text_main + '"data_k": "' + $("#data_k").val() + '",';
        text_main = text_main + '"kol_listov": ' + $("#kol_listov").val() + ', ';
        text_main = text_main + '"kol_f1": ' + kolScan + ', ';
        text_main = text_main + '"kol_f2": ' + kolScan + ', ';
        text_main = text_main + '"prim": "' + $("#prim").val() + '",';

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
        $("#abbr_arh").removeClass('is-invalid');
        $("#l_fonda").removeClass('is-invalid');
        $("#n_fonda").removeClass('is-invalid');
        $("#n_opisi").removeClass('is-invalid');
        $("#l_opisi").removeClass('is-invalid');
        $("#tom").removeClass('is-invalid');
        $("#name_opis").removeClass('is-invalid');
        $("#r1").removeClass('is-invalid');
        $("#r2").removeClass('is-invalid');
        $("#r3").removeClass('is-invalid');
        $("#r4").removeClass('is-invalid');
        $("#n_dela").removeClass('is-invalid');
        $("#l_dela").removeClass('is-invalid');
        $("#z_ed_x").removeClass('is-invalid');
        $("#kol_listov").removeClass('is-invalid');
        $("#prim").removeClass('is-invalid');
        $("#data_n").removeClass('is-invalid');
        $("#data_k").removeClass('is-invalid');
    }

    function validation(){
        removeIsInvalid();

        if(! $("#abbr_arh").val()) {
            $("#abbr_arh").addClass('is-invalid');
            toastr.error('Необходимо заполнить название архива !');
            return false;
        }

        if(! $("#n_fonda").val()) {
            $("#n_fonda").addClass('is-invalid');
            toastr.error('Необходимо заполнить номер фонда !');
            return false;
        }

        if(! $("#n_opisi").val()) {
            $("#n_opisi").addClass('is-invalid');
            toastr.error('Необходимо заполнить номер описи !');
            return false;
        }

        if(! $("#n_dela").val()) {
            $("#n_dela").addClass('is-invalid');
            toastr.error('Необходимо заполнить номер дела !');
            return false;
        }

        /*
        if(! $("#data_n").val()) {
            $("#data_n").addClass('is-invalid');
            toastr.error('Необходимо заполнить дату начала !');
            return false;
        }

        if(! $("#data_k").val()) {
            $("#data_k").addClass('is-invalid');
            toastr.error('Необходимо заполнить дату конца !');
            return false;
        }

        if(! $("#kol_listov").val()) {
            $("#kol_listov").addClass('is-invalid');
            toastr.error('Необходимо заполнить количество листов !');
            return false;
        }
        */
        return true;
    }

    function searchNumberDelo(){
        var testSend = true;
        let text_main = '{';
        text_main = text_main + '"abbr_arh": "' + $("#abbr_arh").val() + '", ';
        text_main = text_main + '"n_fonda": ' + $("#n_fonda").val() + ',';
        text_main = text_main + '"n_opisi": ' + $("#n_opisi").val() + ',  ';
        text_main = text_main + '"n_dela": ' + $("#n_dela").val() + ', ';
        text_main = text_main + '"l_dela": "' + $("#l_dela").val() + '"}';

        var dateid = {
            "text_main": text_main
        };

        $.ajax({
            type: 'POST',
            url: 'bd_get_info_by_delo.php',
            data: dateid,
            success: function(data){
                data = JSON.parse(data)

                if(data['success'] == "true") {
                    toastr.success(data['text']);
                }else{
                    toastr.error(data['text']);
                    testSend = false;
                }
            },
            async:false
          });

          return testSend;
    }

    $(document).on('click', '#save_1', function() {
        if (validation() == false) {
            return;
        }

        /*//Проверка наличия дела в БД
        if (searchNumberDelo() == false) {
            return;
        }
        */

        setNameAndDirectScan();
        //saveBD('bd_insert.php'); // сохранение в БД
    });

    $(document).on('click', '#get_info_by_delo', function() {
        searchNumberDelo()
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

$('#search-dir').bind('input', function() {
	var st_poisk = $(this).val();

	$(".search-dir").each(function (){
		if (($(this).attr('data-v')).includes(st_poisk)){
			//$(this).css('display','inline-block')
			$(this).removeClass('hidden')
		}else{
            $(this).addClass('hidden')
			//$(this).css('display','none')
		}
	});
});

$(document).on('click', '.init-group', function(){
    let classSearch = $(this).attr('data-init-class');

    $(".search-dir").each(function (){
        if($(this).hasClass(classSearch) == true){
            $(this).removeClass('hidden')
        }
        else{
            $(this).addClass('hidden')
        }
	});
});