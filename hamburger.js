const navToggle = document.getElementById('nav-toggle');
const menuList = document.getElementById('main-menu');
//the above are constant functions and we can reference the tag with the ID associated by just referencing those keywords which are in this case "navToggle" and "menuList". CamelCase im assuming.//

navToggle.addEventListener('click', function(){
    menuList.classList.toggle('active');
});
//this is toggling a class on or off when this action is performed//
