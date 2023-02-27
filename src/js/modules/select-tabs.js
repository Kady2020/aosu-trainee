"use strict"

document.querySelector('select').addEventListener('change', function () {
  document.querySelectorAll('.select-content__item').forEach((n, i) => {
    n.classList.toggle('select-content__item_active', i === this.selectedIndex);
  });
});
