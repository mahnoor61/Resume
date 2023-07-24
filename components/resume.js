
$(document).ready(function () {
    //formCon animation:
    $('#formCon').hide();
    $('button#fa').click(function () {
        $('#formCon').toggle(4000, function () {
            console.log('form animation done');
        });
    });
    //cvCon animation:
    $('#cv').hide();
    $('button#resume').click(function () {
        $('#cv').toggle(4000, function () {
            console.log('cv animation done');
        });
    });
    ////form field targeting :
    $('#f').submit(function (e) {
        e.preventDefault();
        let n = $('#f1').val();
        console.log(n);
        $('#name').text(`${n}`);
        //f2: contact
        let l = $('#f2').val();
        console.log(l);
        $('#l').text(`${l}`);
        //f3: contact
        let p = $('#f3').val();
        console.log(p);
        $('#p').text(`${p}`);
        //f4: contact
        let email = $('#f4').val();
        console.log(email);
        $('#e').text(`${email}`);
        //f5: contact
        let w = $('#f5').val();
        console.log(w);
        $('#w').text(`${w}`);
        // education:
        let g_i = $('#f6').val();
        console.log(g_i);
        $('#G_year').text(`${g_i}`);
        // f7:
        let g_d = $('#f7').val();
        console.log(g_d);
        $('#G_degree').text(`${g_d}`);
        // f8:
        let g_u = $('#f8').val();
        console.log(g_u);
        $('#uni').text(`${g_u}`);
        // f9
        let i_y = $('#f9').val();
        console.log(i_y);
        $('#i_year').text(`${i_y}`);
        // f10
        let i_d = $('#f10').val();
        console.log(i_d);
        $('#i_degree').text(`${i_d}`);
        // f11
        let i_c = $('#f11').val();
        console.log(i_c);
        $('#i_clg').text(`${i_c}`);
        //   // matric:
        let m_y = $('#f12').val();
        console.log(m_y);
        $('#m_year').text(`${m_y}`);
        // f13:
        let m_d = $('#f13').val();
        console.log(m_d);
        $('#m_degree').text(`${m_d}`);
        // f14:
        let m_s = $('#f14').val();
        console.log(m_s);
        $('#m_school').text(`${m_s}`);
        //skills:
        // let s = $('#f15').val();
        // console.log(s);
        // $('#skill li').text(`${s}`);

        //about me:
        let me = $('#AM').val();
        console.log(me);
        $('#about_me').text(`${me}`);
        //work experience: year:
        let ye = $('#wy').val();
        console.log(ye);
        $('#work_year').text(`${ye}`);
        //work experience: as a:
        let waa = $('#waa').val();
        console.log(waa);
        $('#work_as-a').text(`${waa}`);
        //work experience: technologies:
        let wt = $('#wt').val();
        console.log(wt);
        $('#technologies').text(`${wt}`);
        //work experience: detail:
        let wd = $('#wd').val();
        console.log(wd);
        $('#work_detail').text(`${wd}`);

        //work2:
        //work experience: year2:
        let ye2 = $('#workYear2').val();
        console.log(ye2);
        $('#wy2').text(`${ye2}`);
        //work experience: as a2:
        let waa2 = $('#workAsA2').val();
        console.log(waa);
        $('#waa2').text(`${waa2}`);
        //work experience: technologies2:
        let wt2 = $('#workTech2').val();
        console.log(wt2);
        $('#wt2').text(`${wt2}`);
        //work experience: detail2:
        let wd2 = $('#workDetail2').val();
        console.log(wd);
        $('#wd2').text(`${wd2}`);
    });
});

//list method:
$(document).ready(function () {
    // f12: skills
    $('#f15').change(function () {
        let s = $('#f15').val();
        console.log(s);
        $('#skill').append(`<li>${s}</li>`);
        $('#skill li').css('color', 'white');
    });


    $('#range').change(function () {
        let ran = $('#range').val();
        console.log(ran);
        $('#skillbar').append(`<li><div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated"
        style="width:${ran}  background-color: rgb(223, 138, 28);"></div>
</div></li>`);
        $('#skillbar li').css('color', 'white');
    });
    //reference: ref1_5:
    $('#r1').change(function () {
        let ref1 = $('#r1').val();
        console.log(ref1);
        $('#ref_1').append(`<li>${ref1}</li>`);
        $('#ref_1 li').css('color', 'black');
    });
    //reference: ref5_10:
    $('#r2').change(function () {
        let ref2 = $('#r2').val();
        console.log(ref2);
        $('#ref_2').append(`<li>${ref2}</li>`);
        $('#ref_2 li').css('color', 'black');
    });
    //work-imp-points1:
    $('#i_w_p').change(function () {
        let imp_point = $('#i_w_p').val();
        console.log(imp_point);
        $('#work_points').append(`<li>${imp_point}</li>`);
        $('#work_points li').css('color', 'black');
    });
    //work-imp-points2:
    $('#workPoint2').change(function () {
        let ip = $('#workPoint2').val();
        console.log(ip);
        $('#wp2').append(`<li>${ip}</li>`);
        $('#wp2 li').css('color', 'black');
    });

});


//     // f12: skills
//     $('#f15').change(function () {
//         let s = $('#f15').val();
//         console.log(s);
//         $('#skill').append(`<li>${s}</li>`);
//         $('#skill li').css('color', 'white');
//     });


//     $('#range').change(function () {
//         let ran = $('#range').val();
//         console.log(ran);
//         $('#skillbar').append(`<li><div class="progress">
//     <div class="progress-bar progress-bar-striped progress-bar-animated"
//         style="width:${ran}  background-color: rgb(223, 138, 28);"></div>
// </div></li>`);
//         $('#skillbar li').css('color', 'white');
//         //reference: ref1_5:
//         $('#r1').change(function() {
//             let ref1 = $('#r1').val();
//             console.log(ref1);
//             $('#ref_1').append(`<li>${ref1}</li>`);
//             $('#ref_1 li').css('color', 'black');
//         });
//         //reference: ref5_10:
//         $('#r2').change(function() {
//             let ref2 = $('#r2').val();
//             console.log(ref2);
//             $('#ref_2').append(`<li>${ref2}</li>`);
//             $('#ref_2 li').css('color', 'black');
//         });
//         //work-imp-points:
//         $('#wp').change(function() {
//             let imp_point = $('#wp').val();
//             console.log(imp_point);
//             $('#work_points').append(`<li>${imp_point}</li>`);
//             $('#work_points li').css('color', 'black');
//         });

// image work:

$(document).ready(function() {
    // When the input field changes (a file is selected), handle the event
    $('#imgUpload').change(function() {
        // Get the selected file from the input field
        let sFile = this.files[0];

        // Check if a file was selected
        if (sFile) {
            // Create a FileReader object to read the file
            let reader = new FileReader();

            // Set up the FileReader onload event
            reader.onload = function(e) {
                // Get the result of the reader (the image data as a data URL)
                let imageDataURL = e.target.result;

                // Set the image source (src) of the <img> tag to the data URL
                $('#imgTage').attr('src', imageDataURL);

                // Show the image (it was initially hidden with "display: none;")
                $('#imgTage').css('display', 'block');
            };

            // Read the file as a data URL (this triggers the onload event)
            reader.readAsDataURL(sFile);
        }
    });
});






