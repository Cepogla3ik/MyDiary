import {
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
} from "./functions.js";

const boardHeaderElement = document.querySelector('#boardHeader');
const showBoardDaysButtons = document.querySelectorAll('.week-day-container');
const lessonsListElements = document.querySelectorAll('.lessons-list');

showBoardDaysButtons.forEach(button => {
    button.addEventListener('click', () => {
        const day = button.querySelector('.week-day').innerHTML;
        if (day === 'Понеділок') showMondayBoard();
        if (day === 'Вівторок') showTuesdayBoard();
        if (day === 'Середа') showWednesdayBoard();
        if (day === 'Четвер') showThursdayBoard();
        if (day === "П'ятниця") showFridayBoard();
    });
});

let now = new Date();
let nowMinutes = now.getHours() * 60 + now.getMinutes();
let thisDay = now.getDay();

const weekDaysArray = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];

const weekDayElements = document.querySelectorAll('.week-day');
weekDayElements.forEach(weekDay => {
  if (weekDay.innerHTML === weekDaysArray[thisDay]) {
    weekDay.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  }
});

const reworkLessonsList = () => {
    now = new Date();
    nowMinutes = now.getHours() * 60 + now.getMinutes();
    thisDay = now.getDay();

    lessonsListElements.forEach(lesList => {
        const lessonTime = lesList.querySelector('.lessons-list-time').innerHTML;
        const lessonStart = getTimeToMinutesConvert(lessonTime);

        if (nowMinutes >= lessonStart && nowMinutes < lessonStart + 45) {
            lesList.classList.add('current-lesson');
            lesList.querySelector('.lessons-list-index').classList.add('current-lesson-data');
            lesList.querySelector('.lessons-list-name').classList.add('current-lesson-data');
            lesList.querySelector('.lessons-list-time').classList.add('current-lesson-data');
            lesList.querySelector('.lessons-list-classroom').classList.add('current-lesson-data');
        } else {
            lesList.classList.remove('current-lesson');
            lesList.querySelector('.lessons-list-index').classList.remove('current-lesson-data');
            lesList.querySelector('.lessons-list-name').classList.remove('current-lesson-data');
            lesList.querySelector('.lessons-list-time').classList.remove('current-lesson-data');
            lesList.querySelector('.lessons-list-classroom').classList.remove('current-lesson-data');
        }

        if (nowMinutes >= lessonStart - 10 && nowMinutes < lessonStart) {
            lesList.classList.add('next-lesson');
            lesList.querySelector('.lessons-list-index').classList.add('next-lesson-data');
            lesList.querySelector('.lessons-list-name').classList.add('next-lesson-data');
            lesList.querySelector('.lessons-list-time').classList.add('next-lesson-data');
            lesList.querySelector('.lessons-list-classroom').classList.add('next-lesson-data');
        } else {
            lesList.classList.remove('next-lesson');
            lesList.querySelector('.lessons-list-index').classList.remove('next-lesson-data');
            lesList.querySelector('.lessons-list-name').classList.remove('next-lesson-data');
            lesList.querySelector('.lessons-list-time').classList.remove('next-lesson-data');
            lesList.querySelector('.lessons-list-classroom').classList.remove('next-lesson-data');
        }

        if (nowMinutes > lessonStart + 30 && nowMinutes < lessonStart + 45) {
            lesList.classList.add('almost-ended-lesson');
            lesList.querySelector('.lessons-list-index').classList.add('almost-ended-lesson-data');
            lesList.querySelector('.lessons-list-name').classList.add('almost-ended-lesson-data');
            lesList.querySelector('.lessons-list-time').classList.add('almost-ended-lesson-data');
            lesList.querySelector('.lessons-list-classroom').classList.add('almost-ended-lesson-data');
        } else {
            lesList.classList.remove('almost-ended-lesson');
            lesList.querySelector('.lessons-list-index').classList.remove('almost-ended-lesson-data');
            lesList.querySelector('.lessons-list-name').classList.remove('almost-ended-lesson-data');
            lesList.querySelector('.lessons-list-time').classList.remove('almost-ended-lesson-data');
            lesList.querySelector('.lessons-list-classroom').classList.remove('almost-ended-lesson-data');
        }

        if (nowMinutes >= lessonStart + 45 || ([0, 6].includes(thisDay)) || boardHeaderElement.innerHTML !== weekDaysArray[thisDay]) {
            lesList.classList.add('is-over-lesson');
            lesList.querySelector('.lessons-list-index').classList.add('is-over-lesson-data');
            lesList.querySelector('.lessons-list-name').classList.add('is-over-lesson-data');
            lesList.querySelector('.lessons-list-time').classList.add('is-over-lesson-data');
            lesList.querySelector('.lessons-list-classroom').classList.add('is-over-lesson-data');
        } else {
            lesList.classList.remove('is-over-lesson');
            lesList.querySelector('.lessons-list-index').classList.remove('is-over-lesson-data');
            lesList.querySelector('.lessons-list-name').classList.remove('is-over-lesson-data');
            lesList.querySelector('.lessons-list-time').classList.remove('is-over-lesson-data');
            lesList.querySelector('.lessons-list-classroom').classList.remove('is-over-lesson-data');
        }
    });
}
reworkLessonsList();

const pdfSubjectsSearchInput = document.querySelector('#pdf-subjects-search');
const pdfSubjectsContainerElement = document.querySelector('#pdf-subjects-container');
const pdfSubjectsElements = pdfSubjectsContainerElement.querySelectorAll('.pdf-subject');
pdfSubjectsSearchInput.addEventListener('input', () => {
  pdfSubjectsElements.forEach(pdfSubject => {
    pdfSubject.style.display = pdfSubject.innerHTML.toLowerCase().includes(pdfSubjectsSearchInput.value.toLowerCase()) ? 'block' : 'none';
  });
});

const showWeekDaysArray = [showMondayBoard, showTuesdayBoard, showWednesdayBoard, showThursdayBoard, showFridayBoard];
if (thisDay >= 1 && thisDay <= 5) showWeekDaysArray[thisDay - 1]();

const page_1Element = document.querySelector('#page_1');
const page_2Element = document.querySelector('#page_2');
const page_3Element = document.querySelector('#page_3');
const page_4Element = document.querySelector('#page_4');
const pagesArray = [page_1Element, page_2Element, page_3Element, page_4Element];
const navFunctionsElements = document.querySelectorAll('.nav-functions');

navFunctionsElements.forEach((navFunc, indexNavBtn) => {
  const navButton = navFunc.querySelector('.nav-buttons');
  navButton.addEventListener('click', () => {
    pagesArray.forEach((page, i) => {
      page.style.display = i === indexNavBtn ? 'block' : 'none';
      page.style.pointerEvents = i === indexNavBtn ? 'auto' : 'none';
    });
  });
});

function getMaxDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const thisYear = now.getFullYear();
const thisMonth = now.getMonth();

const p2WeekDayHeader = document.querySelector('#page_2-week-day');
const p2DateHeader = document.querySelector('#page_2-date');
const p2ArrowPreviousButton = document.querySelector('#page_2-header-button-previous-arrow');
const p2ArrowNextButton = document.querySelector('#page_2-header-button-next-arrow');

let p2DayHeaderCounting = thisDay % 7;
let p2DateHeaderCounting = now.getDate();
let p2MonthHeaderCounting = thisMonth;
let p2YearHeaderCounting = thisYear;
p2WeekDayHeader.innerHTML = weekDaysArray[now.getDay()];
p2DateHeader.innerHTML = `(${String(p2DateHeaderCounting).padStart(2,'0')}.${String(p2MonthHeaderCounting + 1).padStart(2,'0')})`;


const p2HometaskElement_1 = document.querySelector('#page_2-hometask-1');
const p2HometaskElement_2 = document.querySelector('#page_2-hometask-2');
const p2HometaskElement_3 = document.querySelector('#page_2-hometask-3');
const p2HometaskElement_4 = document.querySelector('#page_2-hometask-4');
const p2HometaskElement_5 = document.querySelector('#page_2-hometask-5');
const p2HometaskElement_6 = document.querySelector('#page_2-hometask-6');
const p2HometaskElement_7 = document.querySelector('#page_2-hometask-7');

const p2HometasksArray = [
  p2HometaskElement_1,
  p2HometaskElement_2,
  p2HometaskElement_3,
  p2HometaskElement_4,
  p2HometaskElement_5,
  p2HometaskElement_6,
  p2HometaskElement_7
];

const p2HometaskTextareas = document.querySelectorAll('.page_2-hometask');
p2HometaskTextareas.forEach(textarea => {
  textarea.onfocus = () => textarea.previousElementSibling.style.boxShadow = '0 0 6px 3px rgb(210, 190, 160)';
  textarea.onblur = () => textarea.previousElementSibling.style.boxShadow = 'none';
});



function loadHometasksP2() {
  for (let n = 0; n <= 6; n++) {
    const key = `${p2HometasksArray[n].id}-${p2DateHeader.innerHTML}`;
    p2HometasksArray[n].innerText = localStorage.getItem(key) || '';
  };
}

function saveHometasksP2() {
  for (let n = 0; n <= 6; n++) {
    const key = `${p2HometasksArray[n].id}-${p2DateHeader.innerHTML}`;
    localStorage.setItem(key, p2HometasksArray[n].innerText);
  };
}

const p2HometaskSave = document.querySelector('#page_2-hometask-save');
p2HometaskSave.onclick = () => {
  saveHometasksP2();
  
  if (p2HometaskSave.innerHTML !== '✓') {
    p2HometaskSave.innerHTML = '✓';
    p2HometaskSave.style.boxShadow = '0 0 12px 0.5px rgb(180, 180, 180)';
    p2HometaskSave.style.border = '2.5px solid rgb(115, 125, 120)';
    p2HometaskSave.style.background = 'rgb(145, 155, 150)';
    setTimeout(() => {
      p2HometaskSave.innerHTML = 'Save';
      p2HometaskSave.style.boxShadow = 'none';
      p2HometaskSave.style.border = '2.5px solid rgb(120, 120, 120)';
      p2HometaskSave.style.background = 'rgb(160, 160, 160)';
    }, 1500)
  }
}

function updateP2Board() {
  p2WeekDayHeader.innerHTML = weekDaysArray[((p2DayHeaderCounting % 7) + 7) % 7];
  p2DateHeader.innerHTML = `(${String(p2DateHeaderCounting).padStart(2,'0')}.${String(p2MonthHeaderCounting + 1).padStart(2,'0')})`;
  loadHometasksP2();
}

p2ArrowNextButton.onclick = () => {
  p2DayHeaderCounting++;
  p2DateHeaderCounting++;
  if (p2DateHeaderCounting > getMaxDaysInMonth(p2YearHeaderCounting, p2MonthHeaderCounting)) {
    p2DateHeaderCounting = 1;
    p2MonthHeaderCounting++;
    if (p2MonthHeaderCounting > 11) {
      p2MonthHeaderCounting = 0;
      p2YearHeaderCounting++;
    }
  }
  updateP2Board();
}

p2ArrowPreviousButton.onclick = () => {
  p2DayHeaderCounting--;
  p2DateHeaderCounting--;
  if (p2DateHeaderCounting < 1) {
    p2MonthHeaderCounting--;
    if (p2MonthHeaderCounting < 0) {
      p2MonthHeaderCounting = 11;
      p2YearHeaderCounting--;
    }
    p2DateHeaderCounting = getMaxDaysInMonth(p2YearHeaderCounting, p2MonthHeaderCounting);
  }
  updateP2Board();
}
updateP2Board();

const todaysDay = weekDaysArray[thisDay];
const p2HometaskSubjects = document.querySelectorAll('.page_2-hometask-subject');
const weekdaysSubjectsArray = [
  mondaySubjectsArray,
  tuesdaySubjectsArray,
  wednesdaySubjectsArray,
  thursdaySubjectsArray,
  fridaySubjectsArray
];

const reworkP2Subjects = () => {
  const currentDay = weekDaysArray.indexOf(p2WeekDayHeader.innerHTML);
  
  if (currentDay >= 1 && currentDay <= 5) {
    const subjectsArray = weekdaysSubjectsArray[currentDay - 1];
    p2HometaskSubjects.forEach((hometask, h) => {
      hometask.innerHTML = subjectsArray[h] || '';
    });
  } else {
    p2HometaskSubjects.forEach(hometask => hometask.innerHTML = '');
  }
}

const p2SubjectsListSearch = document.querySelector('#page_2-subjects-list-search');
const p2SearchSubjects = document.querySelectorAll('.page_2-search-subjects');
p2SubjectsListSearch.addEventListener('input', () => {
  p2SearchSubjects.forEach(subject => {
    if (subject.innerHTML.toLowerCase().includes(p2SubjectsListSearch.value.toLowerCase())) {
      subject.style.display = 'block';
    } else {
      subject.style.display = 'none';
    }
  });
});

p2SearchSubjects.forEach(searchedSubj => {
  searchedSubj.addEventListener('click', () => {
    const currentDayIndex = weekDaysArray.indexOf(p2WeekDayHeader.innerHTML); // индекс текущего дня в full week
    const currentWorkDayIndex = currentDayIndex - 1; // рабочие дни пон-пят -> 0-4

    let found = false;

    for (let offset = 1; offset <= 5; offset++) { // проверяем следующие 5 рабочих дней
      const checkDayIndex = (currentWorkDayIndex + offset) % 5; // индекс в weekdaysSubjectsArray
      const subjectsArray = weekdaysSubjectsArray[checkDayIndex];

      subjectsArray.forEach((lesson, lessonIndex) => {
        if (!found && lesson === searchedSubj.innerHTML) {
          const daysWarpInterval = offset; // сколько рабочих дней вперед нажать
          for (let n = 0; n < daysWarpInterval; n++) {
            p2ArrowNextButton.click();
          }

          console.log(`Lesson: ${lesson}\nDayIndex (0=Mon): ${checkDayIndex}\nLessonIndex: ${lessonIndex}\nDaysWarp: ${daysWarpInterval}`);
          found = true;
        }
      });

      if (found) break;
    }
  });
});

const p2TurnTodayButton = document.querySelector('#page_2-turn-today-button');
p2TurnTodayButton.onclick = () => {
  p2DayHeaderCounting = thisDay % 7;
  p2DateHeaderCounting = now.getDate();
  p2MonthHeaderCounting = thisMonth;
  p2YearHeaderCounting = thisYear;
  p2WeekDayHeader.innerHTML = weekDaysArray[now.getDay()];
  p2DateHeader.innerHTML = `(${String(p2DateHeaderCounting).padStart(2,'0')}.${String(p2MonthHeaderCounting + 1).padStart(2,'0')})`;
}


setInterval(() => {
    reworkLessonsList();
    reworkP2Subjects();
}, 100);