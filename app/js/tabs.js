/// табы

let tabs = document.querySelectorAll('.price__tabs-item'),
  tabsContent = document.querySelectorAll('.price__block'),
  tabsParent = document.querySelector('.price__tabs-list');

function hideTabContent() {

  tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show');
  });

  tabs.forEach(item => {
    item.classList.remove('active');
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function (event) {
  const target = event.target;
  if (target && target.classList.contains('price__tabs-item')) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});