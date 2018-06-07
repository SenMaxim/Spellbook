const inputSpellsDiv = document.getElementById("input_spells_div");
const spellList = document.getElementById('list');
const spellNames = [];

function updateSpellBook(form) {
  console.log(form)
  console.log(spellList);
    addToSpellList(form.input_spells.value, form.input_effects.value);
}

function addToSpellList(spell, effect) {
  spellNames.push(spell);

  let listItem = document.createElement('li');
  listItem.appendChild(createSpellSpan(spell));
  listItem.appendChild(createEffectSpan(effect));
  listItem.appendChild(createSpellButton(spell, listItem));
  spellList.appendChild(listItem);
  /*
  JAVASCRIPT DUMB LOG NOT WORKING/MATCHING WITH HTML RESULT
  console.log('spellList is ')
  console.log(spellList)
  JAVASCRIPT DUMB LOG NOT WORKING/MATCHING WITH HTML RESULT
  */
}

function createSpellSpan(spell) {
  let span = document.createElement('span')
  span.setAttribute('class', 'spellname')
  span.textContent = 'SpellName: ' + spell;
  return span;
}

function createEffectSpan(effect) {
  let span = document.createElement('span')
  span.setAttribute('class', 'effectname');
  span.textContent = ', Effect: ' + effect;
  return span;
}

function createSpellButton(spellName, listItem) {
  let button = document.createElement('button');
  button.setAttribute('id', spellName)
  button.textContent = 'Delete Spell';

  // Handle click
  button.addEventListener('click', function() {
    button.parentNode.parentNode.removeChild(listItem);
    let index = spellNames.indexOf(spellName);
    if (index !== -1) {
      spellNames.splice(index, 1);
      // console.log('array is now ' + spellNames)
    }
  })
  return button;
}