const inputSpellsDiv = document.getElementById("input_spells_div");
const spellList = document.createElement('ul');

function updateSpellBook(form) {
    addToSpellList(form.input_spells.value, form.input_effects.value);
}

function addToSpellList(spell, effect) {
  let listItem = document.createElement('li');
  listItem.appendChild(createSpellSpan(spell));
  listItem.appendChild(createEffectSpan(effect));
  spellList.appendChild(listItem);
  // Output
  inputSpellsDiv.parentNode.insertBefore(spellList.lastElementChild, inputSpellsDiv.nextSibling);
}

function createSpellSpan(spell) {
  var span = document.createElement('span')
  span.setAttribute('class', 'spellname')
  span.textContent = 'SpellName: ' + spell;
  return span;
}

function createEffectSpan(effect) {
  var span = document.createElement('span')
  span.setAttribute('class', 'effectname');
  span.textContent = ', Effect: ' + effect;
  return span;
}