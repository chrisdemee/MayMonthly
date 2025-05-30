const players = [
    {
      id: '1',
        firstName: 'Josh',
        lastName: 'Allen',
        position: 'QB',
        age: 28,
        photo: '/imgs/joshallen.png',
        hiddenDetail: 'MVPPPPPPPPPPPPPPP'
    },
    {
       id: '2',
        firstName: 'Mitchell',
        lastName: 'Trubisky',
        position: 'QB',
        age: 30,
        photo: '/imgs/mitch.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '3',
        firstName: 'Shane',
        lastName: 'Buechele',
        position: 'QB',
        age: 27,
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4039034.png&w=350&h=254',
        hiddenDetail: 'Signed as a free agent in 2024'
      },

    {
       id: '4',
        firstName: 'James',
        lastName: 'Cook',
        position: 'RB',
        age: 25,
        photo: '/imgs/jamescook.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
    }, 
    {
       id: '5',
        firstName: 'Ray',
        lastName: 'Davis',
        position: 'RB',
        age: 25,
        photo: '/imgs/raydavis.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        id: '6',
        firstName: 'Ty',
        lastName: 'Johnson',
        position: 'RB',
        age: 27,
        photo: '/imgs/tyjohnson.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '7',
        firstName: 'Darrynton',
        lastName: 'Evans',
        position: 'RB',
        age: 26,
        photo: 'https://a.espncdn.com/i/headshots/nfl/players/full/4036431.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '8',
        firstName: 'Reggie',
        lastName: 'Gilliam',
        position: 'FB',
        age: 26,
        photo: '/imgs/reggie.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '9 ',
        firstName: 'Khalil',
        lastName: 'Shakir',
        position: 'WR',
        age: 24,
        photo: '/imgs/khalilshakir.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '10',
        firstName: 'Josh',
        lastName: 'Palmer',
        position: 'WR',
        age: 25,
        photo: '/imgs/joshpalmer.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '11',
        firstName: 'Elijah',
        lastName: 'Moore',
        position: 'WR',
        age: 25,
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4372414.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '12',
        firstName: 'Keon',
        lastName: 'Coleman',
        position: 'WR',
        age: 22,
        photo: '/imgs/keon.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '13',
        firstName: 'Curtis',
        lastName: 'Samuel',
        position: 'WR',
        age: 28,
        photo: '/imgs/curt.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Tight Ends
      {
         id: '14',
        firstName: 'Dawson',
        lastName: 'Knox',
        position: 'TE',
        age: 27,
        photo: '/imgs/dawsonknox.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '15',
        firstName: 'Dalton',
        lastName: 'Kincaid',
        position: 'TE',
        age: 24,
        photo: '/imgs/dalton.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Offensive Line
      {
         id: '16',
        firstName: 'Connor',
        lastName: 'McGovern',
        position: 'OL',
        age: 26,
        photo: '/imgs/connormcgovern.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '17',
        firstName: 'David',
        lastName: 'Edwards',
        position: 'OL',
        age: 27,
        photo: '/imgs/davidedwards.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '18',
        firstName: 'Dion',
        lastName: 'Dawkins',
        position: 'OL',
        age: 29,
        photo: '/imgs/dion.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '19',
        firstName: 'Spencer',
        lastName: 'Brown',
        position: 'OL',
        age: 26,
        photo: '/imgs/spencerbrown.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '20',
        firstName: 'O’Cyrus',
        lastName: 'Torrence',
        position: 'OL',
        age: 23,
        photo: '/imgs/ocyrus.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      // Defensive Line
      {
         id: '21',
        firstName: 'Greg',
        lastName: 'Rousseau',
        position: 'DL',
        age: 24,
        photo: '/imgs/gregrousseau.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '22',
        firstName: 'DaQuan',
        lastName: 'Jones',
        position: 'DL',
        age: 33,
        photo: '/imgs/daquanjones.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '23',
        firstName: 'Ed',
        lastName: 'Oliver',
        position: 'DL',
        age: 27,
        photo: '/imgs/edoliver.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '24',
        firstName: 'A.J.',
        lastName: 'Epenesa',
        position: 'DL',
        age: 25,
        photo: '/imgs/ajepenesa.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '25',
        firstName: 'Joey',
        lastName: 'Bosa',
        position: 'DL',
        age: 29,
        photo: '/imgs/joeybosa.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Linebackers
      {
         id: '26',
        firstName: 'Matt',
        lastName: 'Milano',
        position: 'LB',
        age: 30,
        photo: '/imgs/mattmilano.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '27',
        firstName: 'Dorian',
        lastName: 'Williams',
        position: 'LB',
        age: 23,
        photo: '/imgs/dorianwilliams.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '28',
        firstName: 'Terrel',
        lastName: 'Bernard',
        position: 'LB',
        age: 24,
        photo: '/imgs/terrelbernard.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Cornerbacks
      {
         id: '29',
        firstName: 'Christian',
        lastName: 'Benford',
        position: 'CB',
        age: 24,
        photo: '/imgs/christianbenford.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '30',
        firstName: 'Taron',
        lastName: 'Johnson',
        position: 'CB',
        age: 28,
        photo: '/imgs/taronjohnson.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '31',
        firstName: 'Maxwell',
        lastName: 'Hairston',
        position: 'CB',
        age: 22,
        photo: '/imgs/maxwellhairston.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Safeties
      {
         id: '32',
        firstName: 'Damar',
        lastName: 'Hamlin',
        position: 'S',
        age: 26,
        photo: '/imgs/damarhamlin.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '33',
        firstName: 'Taylor',
        lastName: 'Rapp',
        position: 'S',
        age: 27,
        photo: '/imgs/taylorrapp.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '34',
        firstName: 'Cole',
        lastName: 'Bishop',
        position: 'S',
        age: 22,
        photo: '/imgs/colebishop.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Special Teams
      {
         id: '35',
        firstName: 'Tyler',
        lastName: 'Bass',
        position: 'K',
        age: 27,
        photo: '/imgs/tylerbass.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
         id: '36',
        firstName: 'Jake',
        lastName: 'Camarda',
        position: 'P',
        age: 26,
        photo: '/imgs/jakecamarda.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      }
      
]