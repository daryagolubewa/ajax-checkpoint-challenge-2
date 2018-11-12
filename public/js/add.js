document.addEventListener('DOMContentLoaded', () => {
    const btnAdd = document.getElementById('btn-add');
    const btnSbm = document.getElementById('btn-submit');
    const form = document.getElementById('new-horse-form');


    btnAdd.addEventListener('click', async () => {
        form.style.display = 'flex';
        btnSbm.style.display = 'block';
        btnAdd.style.display = 'none';

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
        const list = document.getElementsByClassName('list')[0];

        let response = await fetch('/horse/add', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({name: horseName, breed: horseBreed, age: horseAge})
        });
        response = await response;
        if(response.status === 200) {
            let horse = await response.json();
            // let templateString = document.querySelector('.list-item');
            // let template = Handlebars.compile(templateString);
            // let html = template(horse);
            // const horseField = document.querySelector('.list');
            // horseField.innerHTML = html;
            let newLi = document.createElement('li');
            newLi.classList.add('list-item');
            newLi.classList.add('col-1-2');
            let newA = document.createElement('a');
            newLi.appendChild(newA)
            newLi.classList.add('big');
            newLi.classList.add('fancy-text');
            newLi.classList.add('light-link');
            newA.href = `/horses/${horseName}`;
            newA.innerHTML = horseName;
            list.appendChild(newLi);


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
// let questId = e.target.id;
// let response = await fetch(questions?id=${questId});
//
// let question = await response.text();
// const questField = document.getElementById('question');
// questField.innerText = question;