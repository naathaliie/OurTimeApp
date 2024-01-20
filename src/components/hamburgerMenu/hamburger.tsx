import { timerDigital } from '../timerDigital/timerdigital';
import { setTimer } from '../set-timer/setTimer';



interface Link {
  id: string,
  text: string;
}

const myLinks: Link[] = [{
  id: 'timerDigital',
  text: 'Digital Timer',
},
{
  id: 'setTimer',
  text: 'Set Timer',
}
]

let hamburgerButton = document.createElement('button');
hamburgerButton.id = 'hamburgerButton';
hamburgerButton.innerHTML = '☰';

let menuOptions = document.createElement('div');
menuOptions.id = 'menuOptions';
menuOptions.style.display = 'none';

myLinks.forEach(link => {
  let div = document.createElement('div');
  div.id = `link-${link.id}`;
  div.innerHTML = `<a href="#">${link.text}</a>`;
  menuOptions.appendChild(div);
});

document.getElementById('myMenu')?.appendChild(hamburgerButton);
document.getElementById('myMenu')?.appendChild(menuOptions);


hamburgerButton.addEventListener('click', () => {
  if (menuOptions.style.display === 'none') {
    menuOptions.style.display = 'block';
  } else {
    menuOptions.style.display = 'none';
  }
});



let stopTimer: any;

document.getElementById('link-setTimer')?.addEventListener('click', (event) => {
  event.preventDefault();

  // Stop the previous timer if it's running
  if (stopTimer) {
    stopTimer();
  }

  // Start a new timer
  stopTimer = setTimer();
});

document.getElementById('link-timerDigital')?.addEventListener('click', (event) => {
  event.preventDefault();

  // Stop the previous timer if it's running
  if (stopTimer) {
    stopTimer();
  }

  // Start a new timer
  stopTimer = timerDigital();
});
