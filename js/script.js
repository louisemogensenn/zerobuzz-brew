

/* 
Der er brugt JavaScript til at få burgermenuen frem i mobil-version og for at få en kryds-funktion, der gør, at man lettere kan lukke brugermenuen igen
Kort sagt ændrer funktionerne på display-værdien for hver klasse-element
*/
        function showSidebar() {
            const sidebar = document.getElementById('sidebar')
            sidebar.style.display = 'flex'
        }

        function hideSidebar() {
            const sidebar = document.getElementById('sidebar')
            sidebar.style.display = 'none'
        }