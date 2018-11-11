document.addEventListener('DOMContentLoaded', () => {
    const btnAdd = document.getElementById('btn-add');
    const btnSbm = document.getElementById('btn-submit');
    const form = document.getElementById('new-horse-form');


    btnAdd.addEventListener('click', async () => {
        form.style.display = 'flex';
        btnSbm.style.display = 'block';
        btnAdd.style.display = 'none';
;
        // const horseName = document.getElementById('horse-name').value;
        // const horseAge = document.getElementById('horse-age').value;
        // const horseBreed = document.getElementById('horse-breed').value;
        //
        // let response = await fetch('/horses', {
        //     method: 'post',
        //     headers: {
        //         "Content-Type": "application/json; charset=utf-8",
        //     },
        //     body: JSON.stringify({name: horseName, breed: horseBreed, age: horseAge})
        // });
        // response = await response.status;
        // if(response === 200) {
        //     // form.style.display = 'none';
        //     // btnSbm.style.display = 'none';
        // }
        // else {
        //     // error.style.display = "inline"
        // }
    });


    btnSbm.addEventListener('click', async () => {
        const horseName = document.getElementById('horse-name').value;
        const horseAge = document.getElementById('horse-age').value;
        const horseBreed = document.getElementById('horse-breed').value;

        let response = await fetch('/horse/add', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({name: horseName, breed: horseBreed, age: horseAge})
        });
        response = await response.status;
        if(response === 200) {
            console.log(response);
            form.style.display = 'none';
            btnSbm.style.display = 'none';
            btnAdd.style.display = 'block';
            // res.json(JSON.stringify(horses[0]))
        }
        // else {
        //     error.style.display = "inline"
        // }
    })


});