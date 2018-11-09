let currentDate = dayjs(new Date()).locale('en');
const tasks = [
  {
    id: 1,
    label: 'Make some noise',
    user: '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
    start: currentDate.clone().subtract(5, 'day').format('YYYY-MM-DD'),
    duration: 5 * 24 * 60 * 60,
    progress: 85,
    type: 'project'
  }, {
    id: 2,
    label: 'With great power comes great responsibility',
    user: '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
    parentId: 1,
    start: currentDate.clone().subtract(4, 'day').format('YYYY-MM-DD'),
    duration: 4 * 24 * 60 * 60,
    progress: 50,
    type: 'milestone',
    style: {
      fill: '#1EBC61',
      stroke: '#0EAC51'
    },
    progressBarStyle: {
      bar: {
        fill: '#0EAC51'
      }
    }
  }, {
    id: 3,
    label: 'Courage is being scared to death, but saddling up anyway.',
    user: '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
    parentId: 2,
    start: currentDate.clone().subtract(3, 'day').format('YYYY-MM-DD'),
    duration: 2 * 24 * 60 * 60,
    progress: 100,
    type: 'task'
  }, {
    id: 4,
    label: 'Put that toy AWAY!',
    user: '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
    start: currentDate.clone().subtract(2, 'day').format('YYYY-MM-DD'),
    duration: 2 * 24 * 60 * 60,
    progress: 50,
    type: 'task',
    dependentOn: [3]
  }, {
    id: 5,
    label: 'One billion, gajillion, fafillion... shabadylu...mil...shabady......uh, Yen.',
    user: '<a href="https://www.google.com/search?q=Austin+Powers" target="_blank" style="color:#0077c0;">Austin Powers</a>',
    parentId: 4,
    start: currentDate.clone().subtract(1, 'day').format('YYYY-MM-DD'),
    duration: 2 * 24 * 60 * 60,
    progress: 10,
    type: 'milestone',
    style: {
      fill: '#0287D0',
      stroke: '#0077C0'
    },
    progressBarStyle: {
      bar: {
        fill: '#0077C0'
      }
    }
  }, {
    id: 6,
    label: 'Butch Mario and the Luigi Kid',
    user: '<a href="https://www.google.com/search?q=Mario+Bros" target="_blank" style="color:#0077c0;">Mario Bros</a>',
    parentId: 5,
    start: currentDate.clone().add(1, 'day').format('YYYY-MM-DD'),
    duration: 1 * 24 * 60 * 60,
    progress: 0,
    type: 'task',
    style: {
      fill: '#8E44AD',
      stroke: '#7E349D'
    },
    progressBarStyle: {
      bar: {
        fill: '#7E349D'
      }
    }
  }, {
    id: 7,
    label: 'Devon, the old man wanted me, it was his dying request',
    user: '<a href="https://www.google.com/search?q=Knight+Rider" target="_blank" style="color:#0077c0;">Knight Rider</a>',
    parentId: 2,
    dependentOn: [6],
    start: currentDate.clone().add(2, 'day').format('YYYY-MM-DD'),
    duration: 4 * 60 * 60,
    progress: 20,
    type: 'task'
  }, {
    id: 8,
    label: 'Hey, Baby! Anybody ever tell you I have beautiful eyes?',
    user: '<a href="https://www.google.com/search?q=Johhny+Bravo" target="_blank" style="color:#0077c0;">Johhny Bravo</a>',
    parentId: 7,
    dependentOn: [7],
    start: currentDate.clone().add(3, 'days').format('YYYY-MM-DD'),
    duration: 1 * 24 * 60 * 60,
    progress: 0,
    type: 'task'
  }, {
    id: 9,
    label: 'This better be important, woman. You are interrupting my very delicate calculations.',
    user: '<a href="https://www.google.com/search?q=Dexter\'s+Laboratory" target="_blank" style="color:#0077c0;">Dexter\'s Laboratory</a>',
    parentId: 8,
    dependentOn: [
      8, 7
    ],
    start: currentDate.clone().add(4, 'days').format('YYYY-MM-DD'),
    duration: 4 * 60 * 60,
    progress: 20,
    type: 'task',
    style: {
      fill: '#8E44AD',
      stroke: '#7E349D'
    },
    progressBarStyle: {
      bar: {
        fill: '#7E349D'
      }
    }
  }, {
    id: 10,
    label: 'current task',
    user: '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: currentDate.clone().add(5, 'days').format('YYYY-MM-DD'),
    duration: 24 * 60 * 60,
    progress: 0,
    type: 'task'
  }
];

const options = {
  title: {
    label: 'Your project title as html (link or whatever...)',
    html: false,
    style: {
      'font-size': '20px',
      'vertical-align': 'middle',
      'font-weight': '400',
      'line-height': '35px',
      'padding-left': '22px',
      'letter-spacing': '1px'
    }
  },
  taskList: {
    columns: [
      {
        id: 1,
        label: 'ID',
        value: 'id',
        width: 40
      }, {
        id: 2,
        label: 'Description',
        value: 'label',
        width: 200,
        expander: true
      }, {
        id: 3,
        label: 'Assigned to',
        value: 'user',
        width: 130,
        html: true
      }, {
        id: 3,
        label: 'Start',
        value: (task) => task.startDate.format('YYYY-MM-DD'),
        width: 78
      }, {
        id: 4,
        label: 'Type',
        value: 'type',
        width: 68
      }, {
        id: 5,
        label: '%',
        value: 'progress',
        width: 35,
        styles: {
          label: {
            'text-align': 'center',
            'width': '100%'
          },
          value: {
            'text-align': 'center',
            'width': '100%'
          }
        }
      }
    ]
  },
  locale: {
    code: 'en',
    'Now': 'Now',
    'X-Scale': 'Zoom-X',
    'Y-Scale': 'Zoom-Y',
    'Task list width': 'Task list',
    'Before/After': 'Expand',
    'Display task list': 'Task list'
  },
  /*locale:{
    code:'pl'
    name: 'pl', // name String
    weekdays: 'Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota_Niedziela'.split('_'), // weekdays Array
    weekdaysShort: 'Pon_Wto_Śro_Czw_Pią_Sob_Nie'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
    weekdaysMin: 'Pn_Wt_Śr_Cz_Pt_So_Ni'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
    months: 'Styczeń_Luty_Marzec_Kwiecień_Maj_Czerwiec_Lipiec_Sierpień_Wrzesień_Październik_Listopad_Grudzień'.split('_'), // months Array
    monthsShort: 'Sty_Lut_Mar_Kwi_Maj_Cze_Lip_Sie_Wrz_Paź_Lis_Gru'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
    ordinal: n => `${n}`, // ordinal Function (number) => return number + output
    relativeTime: { // relative time format strings, keep %s %d as the same
      future: 'za %s', // e.g. in 2 hours, %s been replaced with 2hours
      past: '%s temu',
      s: 'kilka sekund',
      m: 'minutę',
      mm: '%d minut',
      h: 'godzinę',
      hh: '%d godzin', // e.g. 2 hours, %d been replaced with 2
      d: 'dzień',
      dd: '%d dni',
      M: 'miesiąc',
      MM: '%d miesięcy',
      y: 'rok',
      yy: '%d lat'
    }
  }*/
};