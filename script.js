//LOGICA PER IL CLICL SULL'AVATAR
document.addEventListener("DOMContentLoaded", function() {
    var avatar = document.getElementById('avatar');
    var dropdownMenu = document.getElementById('avatarDropdown');

    avatar.addEventListener('click', function() {
        if (dropdownMenu.style.display === 'none') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

 
    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && event.target !== avatar) {
            dropdownMenu.style.display = 'none';
        }
    });
});
