const players = [
    {
        firstName: 'Josh',
        lastName: 'Allen',
        position: 'QB',
        age: 28,
        photo: '/imgs/joshallen.png'
    },
    {
        firstName: 'Mitchell',
        lastName: 'Trubisky',
        position: 'QB',
        age: 30,
        photo: '/imgs/mitch.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Shane',
        lastName: 'Buechele',
        position: 'QB',
        age: 27,
        photo: '/imgs/shanebuechele.png',
        hiddenDetail: 'Signed as a free agent in 2024'
      },

    {
        firstName: 'James',
        lastName: 'Cook',
        position: 'RB',
        age: 28,
        photo: '/imgs/jamescook.png'
    }, 
    {
        firstName: 'Ray',
        lastName: 'Davis',
        position: 'RB',
        age: 25,
        photo: '/imgs/raydavis.png',
        hiddenDetail: 'Drafted in 2024 from Kentucky'
      },
      {
        firstName: 'Ty',
        lastName: 'Johnson',
        position: 'RB',
        age: 27,
        photo: '/imgs/tyjohnson.png',
        hiddenDetail: 'Ran track at Maryland'
      },
      {
        firstName: 'Darrynton',
        lastName: 'Evans',
        position: 'RB',
        age: 26,
        photo: '/imgs/darryntonevans.png',
        hiddenDetail: 'Former 3rd round pick in 2020'
      },
      {
        firstName: 'Reggie',
        lastName: 'Gilliam',
        position: 'FB',
        age: 26,
        photo: '/imgs/reggie.png',
        college: 'Toledo'
      },
      {
        firstName: 'Khalil',
        lastName: 'Shakir',
        position: 'WR',
        age: 24,
        photo: '/imgs/khalilshakir.png',
        college: 'Boise State'
      },
      {
        firstName: 'Josh',
        lastName: 'Palmer',
        position: 'WR',
        age: 25,
        photo: '/imgs/joshpalmer.png',
        college: 'Tennessee'
      },
      {
        firstName: 'Ty',
        lastName: 'Johnson',
        position: 'WR',
        age: 26,
        photo: '/imgs/tyjohnson.png',
        college: 'Maryland'
      },
      {
        firstName: 'Keon',
        lastName: 'Coleman',
        position: 'WR',
        age: 21,
        photo: '/imgs/keon.png',
        college: 'Florida State'
      },
      {
        firstName: 'Curtis',
        lastName: 'Samuel',
        position: 'WR',
        age: 23,
        photo: '/imgs/curt.png',
        college: 'Unknown'
      },
    
      // Tight Ends
      {
        firstName: 'Dawson',
        lastName: 'Knox',
        position: 'TE',
        age: 27,
        photo: '/imgs/dawsonknox.png',
        college: 'Ole Miss'
      },
      {
        firstName: 'Dalton',
        lastName: 'Kincaid',
        position: 'TE',
        age: 24,
        photo: '/imgs/dalton.png',
        college: 'Utah'
      },
    
      // Offensive Line
      {
        firstName: 'Connor',
        lastName: 'McGovern',
        position: 'OL',
        age: 26,
        photo: '/imgs/connormcgovern.png',
        college: 'Penn State'
      },
      {
        firstName: 'David',
        lastName: 'Edwards',
        position: 'OL',
        age: 27,
        photo: '/imgs/davidedwards.png',
        college: 'Wisconsin'
      },
      {
        firstName: 'Dion',
        lastName: 'Dawkins',
        position: 'OL',
        age: 29,
        photo: '/imgs/dion.png',
        college: 'Temple'
      },
      {
        firstName: 'Spencer',
        lastName: 'Brown',
        position: 'OL',
        age: 26,
        photo: '/imgs/spencerbrown.png',
        college: 'Northern Iowa'
      },
      {
        firstName: 'O’Cyrus',
        lastName: 'Torrence',
        position: 'OL',
        age: 23,
        photo: '/imgs/ocyrus.png',
        college: 'Florida'
      },
      // Defensive Line
      {
        firstName: 'Greg',
        lastName: 'Rousseau',
        position: 'DL',
        age: 24,
        photo: '/imgs/gregrousseau.png',
        college: 'Miami'
      },
      {
        firstName: 'DaQuan',
        lastName: 'Jones',
        position: 'DL',
        age: 32,
        photo: '/imgs/daquanjones.png',
        college: 'Penn State'
      },
      {
        firstName: 'Ed',
        lastName: 'Oliver',
        position: 'DL',
        age: 26,
        photo: '/imgs/edoliver.png',
        college: 'Houston'
      },
      {
        firstName: 'A.J.',
        lastName: 'Epenesa',
        position: 'DL',
        age: 25,
        photo: '/imgs/ajepenesa.png',
        college: 'Iowa'
      },
      {
        firstName: 'Joey',
        lastName: 'Bosa',
        position: 'DL',
        age: 29,
        photo: '/imgs/joeybosa.png',
        college: 'Ohio State'
      },
    
      // Linebackers
      {
        firstName: 'Matt',
        lastName: 'Milano',
        position: 'LB',
        age: 30,
        photo: '/imgs/mattmilano.png',
        college: 'Boston College'
      },
      {
        firstName: 'Dorian',
        lastName: 'Williams',
        position: 'LB',
        age: 23,
        photo: '/imgs/dorianwilliams.png',
        college: 'Tulane'
      },
      {
        firstName: 'Terrel',
        lastName: 'Bernard',
        position: 'LB',
        age: 24,
        photo: '/imgs/terrelbernard.png',
        college: 'Baylor'
      },
    
      // Cornerbacks
      {
        firstName: 'Christian',
        lastName: 'Benford',
        position: 'CB',
        age: 24,
        photo: '/imgs/christianbenford.png',
        college: 'Villanova'
      },
      {
        firstName: 'Taron',
        lastName: 'Johnson',
        position: 'CB',
        age: 28,
        photo: '/imgs/taronjohnson.png',
        college: 'Weber State'
      },
      {
        firstName: 'Maxwell',
        lastName: 'Hairston',
        position: 'CB',
        age: 22,
        photo: '/imgs/maxwellhairston.png',
        college: 'Kentucky'
      },
    
      // Safeties
      {
        firstName: 'Damar',
        lastName: 'Hamlin',
        position: 'S',
        age: 26,
        photo: '/imgs/damarhamlin.png',
        college: 'Pittsburgh'
      },
      {
        firstName: 'Taylor',
        lastName: 'Rapp',
        position: 'S',
        age: 27,
        photo: '/imgs/taylorrapp.png',
        college: 'Washington'
      },
      {
        firstName: 'Cole',
        lastName: 'Bishop',
        position: 'S',
        age: 22,
        photo: '/imgs/colebishop.png',
        college: 'Utah'
      },
    
      // Special Teams
      {
        firstName: 'Tyler',
        lastName: 'Bass',
        position: 'K',
        age: 27,
        photo: '/imgs/tylerbass.png',
        college: 'Georgia Southern'
      },
      {
        firstName: 'Jake',
        lastName: 'Camarda',
        position: 'P',
        age: 26,
        photo: '/imgs/jakecamarda.png',
        college: 'Georgia'
      }
      
]