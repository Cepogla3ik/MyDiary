const boardHeaderElement = document.querySelector('#boardHeader');
const lessonsListElements = document.querySelectorAll('.lessons-list');


const mondaySubjectsArray = [ 
  'Алгебра', 
  'Хімія', 
  'Укр. мова', 
  'Зарубіжна', 
  'Фізика', 
  'Англ. мова', 
  'Фізкультура' 
];

const tuesdaySubjectsArray = [
  'Англ. мова',
  'Іст. України',
  'Інформатика',
  'Геометрія',
  'Укр. літ',
  'Технології',
  'Фізкультура'
];

const wednesdaySubjectsArray = [
  'Всесв. іст',
  'Алгебра',
  'Громад. осв',
  'Укр. мова',
  'Географія',
  'Нім. мова',
  'Біологія'
];

const thursdaySubjectsArray = [
  'Геометрія',
  'Фізика',
  'Іст. України',
  'Інформатика',
  'Англ. мова',
  'Фізкультура'
];

const fridaySubjectsArray = [
  'Фізика',
  'Географія',
  'Громад. осв',
  'Укр. літ',
  'Біологія',
  'Англ. мова',
  'Нім. мова'
];


function showMondayBoard() {
  boardHeaderElement.innerHTML = 'Понеділок';
  for (let k = 0; k <= 6; k++) {
    lessonsListElements[k].querySelector('.lessons-list-name').innerHTML = mondaySubjectsArray[k] || '';
  }
  lessonsListElements[0].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[1].querySelector('.lessons-list-classroom').innerHTML = '206';
  lessonsListElements[2].querySelector('.lessons-list-classroom').innerHTML = '203';
  lessonsListElements[3].querySelector('.lessons-list-classroom').innerHTML = '202';
  lessonsListElements[4].querySelector('.lessons-list-classroom').innerHTML = '205';
  lessonsListElements[5].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[6].querySelector('.lessons-list-classroom').innerHTML = '—';
}

function showTuesdayBoard() {
  boardHeaderElement.innerHTML = 'Вівторок';
  for (let k = 0; k <= 6; k++) {
    lessonsListElements[k].querySelector('.lessons-list-name').innerHTML = tuesdaySubjectsArray[k] || '';
  }
  lessonsListElements[0].querySelector('.lessons-list-classroom').innerHTML = '205';
  lessonsListElements[1].querySelector('.lessons-list-classroom').innerHTML = '209';
  lessonsListElements[2].querySelector('.lessons-list-classroom').innerHTML = '109';
  lessonsListElements[3].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[4].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[5].querySelector('.lessons-list-classroom').innerHTML = 'тр.д.';
  lessonsListElements[6].querySelector('.lessons-list-classroom').innerHTML = '—';
}

function showWednesdayBoard() {
  boardHeaderElement.innerHTML = 'Середа';
  for (let k = 0; k <= 6; k++) {
    lessonsListElements[k].querySelector('.lessons-list-name').innerHTML = wednesdaySubjectsArray[k] || '';
  }

  lessonsListElements[0].querySelector('.lessons-list-classroom').innerHTML = '209';
  lessonsListElements[1].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[2].querySelector('.lessons-list-classroom').innerHTML = '105';
  lessonsListElements[3].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[4].querySelector('.lessons-list-classroom').innerHTML = '119';
  lessonsListElements[5].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[6].querySelector('.lessons-list-classroom').innerHTML = '204';
}

function showThursdayBoard() {
  boardHeaderElement.innerHTML = 'Четвер';
  for (let k = 0; k <= 6; k++) {
    lessonsListElements[k].querySelector('.lessons-list-name').innerHTML = thursdaySubjectsArray[k] || '';
  }
  lessonsListElements[0].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[1].querySelector('.lessons-list-classroom').innerHTML = '205';
  lessonsListElements[2].querySelector('.lessons-list-classroom').innerHTML = '209';
  lessonsListElements[3].querySelector('.lessons-list-classroom').innerHTML = '109';
  lessonsListElements[4].querySelector('.lessons-list-classroom').innerHTML = '205';
  lessonsListElements[5].querySelector('.lessons-list-classroom').innerHTML = '—';
  lessonsListElements[6].querySelector('.lessons-list-classroom').innerHTML = '—';
}

function showFridayBoard() {
  boardHeaderElement.innerHTML = "П'ятниця";
  for (let k = 0; k <= 6; k++) {
    lessonsListElements[k].querySelector('.lessons-list-name').innerHTML = fridaySubjectsArray[k] || '';
  }
  lessonsListElements[0].querySelector('.lessons-list-classroom').innerHTML = '205';
  lessonsListElements[1].querySelector('.lessons-list-classroom').innerHTML = '119';
  lessonsListElements[2].querySelector('.lessons-list-classroom').innerHTML = '105';
  lessonsListElements[3].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[4].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[5].querySelector('.lessons-list-classroom').innerHTML = '204';
  lessonsListElements[6].querySelector('.lessons-list-classroom').innerHTML = '204';
}

function getMinutesToTimeConvert(minutes) {
    const minutesTime = minutes % 60;
    const hoursTime = (minutes - minutesTime) / 60;
    return `${hoursTime}:${String(minutesTime).padStart(2, '0')}`;
}
function getTimeToMinutesConvert(time) {
    const minutesTime = Number(time.split(':')[1]);
    const hoursTime = Number(time.split(':')[0]);
    return hoursTime * 60 + minutesTime;
}


export {
    showMondayBoard,
    showTuesdayBoard,
    showWednesdayBoard,
    showThursdayBoard,
    showFridayBoard,
    getMinutesToTimeConvert,
    getTimeToMinutesConvert,
    mondaySubjectsArray,
    tuesdaySubjectsArray,
    wednesdaySubjectsArray,
    thursdaySubjectsArray,
    fridaySubjectsArray
};