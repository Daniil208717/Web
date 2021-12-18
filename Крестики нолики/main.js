jQuery(document).ready(function(){
 
    var mass = new Array(); // массив всех занятых клеток
    var mass_x = new Array(); // массив клеток с "х"
    var mass_o = new Array(); // массив клеток с "0"
    var v = 0; // флаг, есть ли победитель (если да, то "1")

    jQuery(".cell").on("click", function(){
        var cell_text = jQuery(this).text();
        if(cell_text != "")
            alert("занято");
        else {
            jQuery(this).text("x");

            var id_cell = jQuery(this).attr('id');
            id_cell = parseInt(id_cell);

            mass.push(id_cell);
            mass_x.push(id_cell);

            mass_x.sort(mass_x);

            var v = victory(mass_x, "Игрок");

            //alert(mass.length);
            if(mass_x.length != 0 && mass.length < 8)
                computer();
            if(mass.length == 9 && v != 1)
                noneVictory();

        }
    });

    // Проверка на победу
    function victory(metka, user){

        var srt1 = 0; // переменная проверки первой строки
        var srt2 = 0; // переменная проверки второй строки
        var srt3 = 0; // переменная проверки третьей строки

        var st1 = 0; // переменная проверки первого столбца
        var st2 = 0; // переменная проверки второго столбца
        var st3 = 0; // переменная проверки третьего столбца

        var d1 = 0; // переменная проверки первой диагонали
        var d2 = 0; // переменная проверки второй диагонали


        for (var i = 0; i < metka.length; i++){
            switch(metka[i]) {
                case 1: { srt1++; st1++; d1++; break; }
                case 2: { srt1++; st2++; break; }
                case 3: { srt1++; st3++; d2++; break; }
                case 4: { srt2++; st1++; break; }
                case 5: { srt2++; st2++; d1++; d2++;  break; }
                case 6: { srt2++; st3++; break; }
                case 7: { srt3++; st1++; d2++; break; }
                case 8: { srt3++; st2++; break; }
                case 9: { srt3++; st3++; d1++;break; }
            }

            if(srt1 == 3 || srt2 == 3 || srt3 == 3)
            {
                jQuery(".victory").text("Победил " + user);
                jQuery(".victory").css("display", "block");
                victoryBegin(user);
            }
            if(st1 == 3 || st2 == 3 || st3 == 3)
            {
                jQuery(".victory").text("Победил " + user);
                jQuery(".victory").css("display", "block");
                victoryBegin(user);
            }
            if(d1 == 3 || d2 == 3)
            {
                jQuery(".victory").text("Победил " + user);
                jQuery(".victory").css("display", "block");
                victoryBegin(user);
            }
        }

        if(srt1 == 3 || srt2 == 3 || srt3 == 3 || st1 == 3 || st2 == 3 || st3 == 3 || d1 == 3 || d2 == 3)
            return 1;
    }


    // Функция генерации случайного числа (возвращает число от 1-9)
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})