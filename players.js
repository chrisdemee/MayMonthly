const players = [
    {
        firstName: 'Josh',
        lastName: 'Allen',
        position: 'QB',
        age: 28,
        photo: '/imgs/joshallen.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
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
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4039034.png&w=350&h=254',
        hiddenDetail: 'Signed as a free agent in 2024'
      },

    {
        firstName: 'James',
        lastName: 'Cook',
        position: 'RB',
        age: 25,
        photo: '/imgs/jamescook.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
    }, 
    {
        firstName: 'Ray',
        lastName: 'Davis',
        position: 'RB',
        age: 25,
        photo: '/imgs/raydavis.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Ty',
        lastName: 'Johnson',
        position: 'RB',
        age: 27,
        photo: '/imgs/tyjohnson.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Darrynton',
        lastName: 'Evans',
        position: 'RB',
        age: 26,
        photo: 'https://a.espncdn.com/i/headshots/nfl/players/full/4036431.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Reggie',
        lastName: 'Gilliam',
        position: 'FB',
        age: 26,
        photo: '/imgs/reggie.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Khalil',
        lastName: 'Shakir',
        position: 'WR',
        age: 24,
        photo: '/imgs/khalilshakir.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Josh',
        lastName: 'Palmer',
        position: 'WR',
        age: 25,
        photo: '/imgs/joshpalmer.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Elijah',
        lastName: 'Moore',
        position: 'WR',
        age: 25,
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4372414.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Keon',
        lastName: 'Coleman',
        position: 'WR',
        age: 22,
        photo: '/imgs/keon.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Curtis',
        lastName: 'Samuel',
        position: 'WR',
        age: 28,
        photo: '/imgs/curt.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Tight Ends
      {
        firstName: 'Dawson',
        lastName: 'Knox',
        position: 'TE',
        age: 27,
        photo: '/imgs/dawsonknox.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Dalton',
        lastName: 'Kincaid',
        position: 'TE',
        age: 24,
        photo: '/imgs/dalton.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Offensive Line
      {
        firstName: 'Connor',
        lastName: 'McGovern',
        position: 'OL',
        age: 26,
        photo: '/imgs/connormcgovern.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'David',
        lastName: 'Edwards',
        position: 'OL',
        age: 27,
        photo: '/imgs/davidedwards.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Dion',
        lastName: 'Dawkins',
        position: 'OL',
        age: 29,
        photo: '/imgs/dion.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Spencer',
        lastName: 'Brown',
        position: 'OL',
        age: 26,
        photo: '/imgs/spencerbrown.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'O’Cyrus',
        lastName: 'Torrence',
        position: 'OL',
        age: 23,
        photo: '/imgs/ocyrus.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      // Defensive Line
      {
        firstName: 'Greg',
        lastName: 'Rousseau',
        position: 'DL',
        age: 24,
        photo: '/imgs/gregrousseau.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'DaQuan',
        lastName: 'Jones',
        position: 'DL',
        age: 33,
        photo: '/imgs/daquanjones.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Ed',
        lastName: 'Oliver',
        position: 'DL',
        age: 27,
        photo: '/imgs/edoliver.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'A.J.',
        lastName: 'Epenesa',
        position: 'DL',
        age: 25,
        photo: '/imgs/ajepenesa.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Joey',
        lastName: 'Bosa',
        position: 'DL',
        age: 29,
        photo: '/imgs/joeybosa.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Linebackers
      {
        firstName: 'Matt',
        lastName: 'Milano',
        position: 'LB',
        age: 30,
        photo: '/imgs/mattmilano.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Dorian',
        lastName: 'Williams',
        position: 'LB',
        age: 23,
        photo: '/imgs/dorianwilliams.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Terrel',
        lastName: 'Bernard',
        position: 'LB',
        age: 24,
        photo: '/imgs/terrelbernard.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Cornerbacks
      {
        firstName: 'Christian',
        lastName: 'Benford',
        position: 'CB',
        age: 24,
        photo: '/imgs/christianbenford.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Taron',
        lastName: 'Johnson',
        position: 'CB',
        age: 28,
        photo: '/imgs/taronjohnson.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Maxwell',
        lastName: 'Hairston',
        position: 'CB',
        age: 22,
        photo: '/imgs/maxwellhairston.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Safeties
      {
        firstName: 'Damar',
        lastName: 'Hamlin',
        position: 'S',
        age: 26,
        photo: '/imgs/damarhamlin.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Taylor',
        lastName: 'Rapp',
        position: 'S',
        age: 27,
        photo: '/imgs/taylorrapp.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Cole',
        lastName: 'Bishop',
        position: 'S',
        age: 22,
        photo: '/imgs/colebishop.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
    
      // Special Teams
      {
        firstName: 'Tyler',
        lastName: 'Bass',
        position: 'K',
        age: 27,
        photo: '/imgs/tylerbass.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      },
      {
        firstName: 'Jake',
        lastName: 'Camarda',
        position: 'P',
        age: 26,
        photo: '/imgs/jakecamarda.png',
        hiddenDetail: 'Former 2nd overall pick in 2017'
      }
      
]