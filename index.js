const header1 = document.querySelector('h1')
const header2 = document.getElementById('book2')
const header3 = document.getElementById('book3')
const button = document.querySelector('button')

button.addEventListener('click', function() {
    console.log('event handled')
  header2.textContent = 'Spellbook2 text changed!'
})

var updateSpellBook3 = function(form) {
  header3.textContent = form.input.value;
}