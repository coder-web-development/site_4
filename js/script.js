// отследим событие onclick по блоку menu
// Далее создаём функцию, функцию без параметров, имя функции my_function
// Определим элемент x - это у нас будет элемент с идентификатором my_top_nav
// Следующее, что нам нужно провести - это условие, что если наша переменная x содержит 
// класс top_nav, то в таком случае нам нужно добавить сюда же класс responsive, 
// ну и в противном случае, else нам нужно просто оставить top_nav

// Тоесть давайте ещё раз. 
// Мы отслеживаем click и вызываем функцию. x - это у нас блок с идентификатором my_top_nav
// Далее мы делаем проверку, и если идентификатор my_top_nav содержит класс top_nav, то при
// нажатии добавляется класс responsive, else в обратном случае мы оставляем только класс 
// top_nav     

menu.onclick = function my_function() {
    var x = document.getElementById('my_top_nav');

    if (x.className === 'top_nav') {
        x.className += ' responsive';
    } else {
        x.className = 'top_nav';
    }
} 

/* скрипт для второго меню в футере */
// код html футер, при нажатии на ссылку с классом menu_footer идёт открытие меню

menu_footer.onclick = function my_function() {
    var x = document.getElementById('footer_my_top_nav');

    if (x.className === 'footer_top_nav') {
        x.className += ' responsive';
    } else {
        x.className = 'footer_top_nav';
    }
    return false; // Если здесь не ставить return false, то при нажатии на ссылку menu_footer 
                  // будет перемещение вверх страницы     
} 

