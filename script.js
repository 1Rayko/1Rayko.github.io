function alerted(){

var message = document.getElementById("text").value;
var al_id = document.getElementById("text1").value;
alert( "Токен:" + message + "\n" + "Id альбома:" + al_id + "\n" + "Сайт еще полностью не дописал" );
}
function vktool(){

    let tk = document.getElementById("text").value;
    let al_id = document.getElementById("text1").value;
    console.log(tk);
    vk.accessToken = tk;
    vk.users.get().then(function(currentUser) {
        // https://vk.com/dev/users.get
})


}
//     1. Загрузка фотографий в альбом
// Допустимые форматы: JPG, PNG, GIF.
//
// Ограничения: не более 5 фотографий за один раз, сумма высоты и ширины не более 14000px, файл объемом не более 50 МБ, соотношение сторон не менее 1:20.
//
// Поле POST-запроса: file{i}, i=[1..5].
//
// Получение адреса
// Вызовите метод photos.getUploadServer, чтобы получить адрес для загрузки фото. Для загрузки фотографии в сообщество необходимо передать идентификатор сообщества в параметре group_id.
//
// Передача файла
// Передайте файлы на адрес upload_url, полученный в предыдущем пункте, сформировав POST-запрос с полями file1-file5. Эти поля должны содержать изображения в формате multipart/form-data.
//
// После успешной загрузки сервер возвращает в ответе JSON-объект с полями server, photos_list, hash, aid:
//
//     {
//
//         "server":123456,
//         "photos_list":"[{\"photo\":\"e9f2eba71b:y\",\"sizes\":[[\"s\",\"123456852\",\"e65f\",\"Br4ir9YAvO8\",75,41],[\"m\",\"123456852\",\"e660\",\"Lqpe1N8s8zY\",130,71],[\"x\",\"123456852\",\"e661\",\"tRFbnaIP_4c\",604,330],[\"y\",\"123456852\",\"e662\",\"8JhBOy0qR6o\",748,409],\"kid\":\"569c3da3b168b347315aa5adc92a953a\",\"debug\":\"xsymyxyyyoypyqyry\"}]",
//         "aid":98754321,
//         "hash":"22b333dbbef7cd9b1f9829b5f8713f86"
//
//     }
//
//
//
// Поля server и aid содержат числовые значения, в hash возвращается строка, а в поле photos_list находится строка с JSON-объектом, структуру которого важно сохранить в исходном виде. В PHP Вы можете использовать json_decode() для всего ответа.
//
// Сохранение результата
// Чтобы сохранить фотографии в альбоме, вызовите метод photos.save с параметрами server, photos_list, aid, hash, полученными на предыдущем этапе.

