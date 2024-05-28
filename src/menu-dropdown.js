document.addEventListener('DOMContentLoaded', function () {
    const checkboxs = document.querySelectorAll('.checkbox-eq');
    const dropdowns = document.querySelectorAll('.dropdown-eq');
    
    function dropdown() {
        for (let i = 0; i < checkboxs.length; i++) {
                let elemento = dropdowns[i];
                checkboxs[i].addEventListener('change', () => {
                    elemento.style.display = checkboxs[i].checked ? 'block' : 'none';
                })
            }
    }

    dropdown();
    
});