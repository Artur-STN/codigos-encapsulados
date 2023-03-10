function search_encapsuled() {

    let input = document.getElementById('inputSearchCode').value
    input = input.toLowerCase();

    let divEncapsulated = document.getElementsByClassName('divEncapsulated');
      
    for (let index = 0 ; index < divEncapsulated.length ; index++) { 

        if ( !divEncapsulated[index].innerHTML.toLowerCase().includes(input) ) {

            divEncapsulated[index].style.display="none";

        } else {
            
            divEncapsulated[index].style.display="block";

        }
    }
}
