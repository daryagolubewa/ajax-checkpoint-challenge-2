# What is AJAX?
Your answer here.
Ajax - технология обращения к серверу за данными без перезагрузки страницы.


# How to Make an AJAX Call
Your answer here.

Для совершения ajax-запросов есть несколько способов, один из них - с помощью технологии fetch (пример взятт из инета):
fetch('http://localhost:54316/Account/Register',{ - обращение к ресурсу, с которого мы берем данные
    method: "POST", - метод, с помощью которого данные отправляются на сервер
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body:  JSON.stringify({ - тело запроса: передача json-объекта с данными
      role:"Заказчик",
      UserName:"Postks",
      PhoneNumber:"+16774521547",
      Password:"ssss",
      PasswordConfirm:"ssss*",
    }),
 })
 .then(function(response){ - принятие ответа с сервера
  return response.json();
 })