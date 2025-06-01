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
        hiddenDetail: 'Texas and SMU alum with a high football IQ and quick release.'
      },

    {
       id: '4',
        firstName: 'James',
        lastName: 'Cook',
        position: 'RB',
        age: 25,
        photo: '/imgs/jamescook.png',
        hiddenDetail: 'Younger brother of Dalvin Cook, bringing speed, vision, and breakout potential'
    }, 
    {
       id: '5',
        firstName: 'Ray',
        lastName: 'Davis',
        position: 'RB',
        age: 25,
        photo: '/imgs/raydavis.png',
        hiddenDetail: 'SEC standout with a nose for the end zone and reliable hands.'
      },
      {
        id: '6',
        firstName: 'Ty',
        lastName: 'Johnson',
        position: 'RB',
        age: 27,
        photo: '/imgs/tyjohnson.png',
        hiddenDetail: 'Shifty and explosive back, dangerous in open space.'
      },
      {
         id: '7',
        firstName: 'Darrynton',
        lastName: 'Evans',
        position: 'RB',
        age: 26,
        photo: 'https://a.espncdn.com/i/headshots/nfl/players/full/4036431.png',
        hiddenDetail: 'Former 3rd-round pick with blazing speed and return skills.'
      },
      {
         id: '8',
        firstName: 'Reggie',
        lastName: 'Gilliam',
        position: 'FB',
        age: 26,
        photo: '/imgs/reggie.png',
        hiddenDetail: 'Versatile blocker and special teams ace with surprising receiving chops.'
      },
      {
         id: '9 ',
        firstName: 'Khalil',
        lastName: 'Shakir',
        position: 'WR',
        age: 24,
        photo: '/imgs/khalilshakir.png',
        hiddenDetail: 'Clutch slot receiver who always finds the soft spot in coverage.'
      },
      {
         id: '10',
        firstName: 'Josh',
        lastName: 'Palmer',
        position: 'WR',
        age: 25,
        photo: '/imgs/joshpalmer.png',
        hiddenDetail: 'Reliable target with strong hands and sharp route-running.'
      },
      {
         id: '11',
        firstName: 'Elijah',
        lastName: 'Moore',
        position: 'WR',
        age: 25,
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4372414.png',
        hiddenDetail: 'Crafty separator with elite quickness—dangerous after the catch.'
      },
      {
         id: '12',
        firstName: 'Keon',
        lastName: 'Coleman',
        position: 'WR',
        age: 22,
        photo: '/imgs/keon.png',
        hiddenDetail: 'Big-bodied rookie WR with elite jump-ball skills and swagger.'
      },
      {
         id: '13',
        firstName: 'Curtis',
        lastName: 'Samuel',
        position: 'WR',
        age: 28,
        photo: '/imgs/curt.png',
        hiddenDetail: 'Offensive Swiss Army knife—WR, RB, gadget plays—you name it.'
      },
    
      // Tight Ends
      {
         id: '14',
        firstName: 'Dawson',
        lastName: 'Knox',
        position: 'TE',
        age: 27,
        photo: '/imgs/dawsonknox.png',
        hiddenDetail: 'Fan favorite known for tough catches and tougher blocks'
      },
      {
         id: '15',
        firstName: 'Dalton',
        lastName: 'Kincaid',
        position: 'TE',
        age: 24,
        photo: '/imgs/dalton.png',
        hiddenDetail: 'Smooth route-runner with elite receiving ability—future Pro Bowl TE.'
      },
    
      // Offensive Line
      {
         id: '16',
        firstName: 'Connor',
        lastName: 'McGovern',
        position: 'OL',
        age: 26,
        photo: '/imgs/connormcgovern.png',
        hiddenDetail: 'Anchor of the interior line, brings toughness and leadership.'
      },
      {
         id: '17',
        firstName: 'David',
        lastName: 'Edwards',
        position: 'OL',
        age: 27,
        photo: '/imgs/davidedwards.png',
        hiddenDetail: 'Super Bowl champion with a mean streak in the trenches.'
      },
      {
         id: '18',
        firstName: 'Dion',
        lastName: 'Dawkins',
        position: 'OL',
        age: 29,
        photo: '/imgs/dion.png',
        hiddenDetail: 'The Shnowman’—elite left tackle and locker room leader.'
      },
      {
         id: '19',
        firstName: 'Spencer',
        lastName: 'Brown',
        position: 'OL',
        age: 26,
        photo: '/imgs/spencerbrown.png',
        hiddenDetail: 'Massive frame with athleticism—potential star at right tackle.'
      },
      {
         id: '20',
        firstName: 'O’Cyrus',
        lastName: 'Torrence',
        position: 'OL',
        age: 23,
        photo: '/imgs/ocyrus.png',
        hiddenDetail: 'SEC powerhouse guard—brick wall in pass protection.'
      },
      // Defensive Line
      {
         id: '21',
        firstName: 'Greg',
        lastName: 'Rousseau',
        position: 'DL',
        age: 24,
        photo: '/imgs/gregrousseau.png',
        hiddenDetail: '6’7 with a wingspan that wrecks passing lanes—QB nightmare.'
      },
      {
         id: '22',
        firstName: 'DaQuan',
        lastName: 'Jones',
        position: 'DL',
        age: 33,
        photo: '/imgs/daquanjones.png',
        hiddenDetail: 'Veteran presence in the middle—clogs running lanes like a pro'
      },
      {
         id: '23',
        firstName: 'Ed',
        lastName: 'Oliver',
        position: 'DL',
        age: 27,
        photo: '/imgs/edoliver.png',
        hiddenDetail: 'Relentless interior disruptor—quick burst and violent hands.'
      },
      {
         id: '24',
        firstName: 'A.J.',
        lastName: 'Epenesa',
        position: 'DL',
        age: 25,
        photo: '/imgs/ajepenesa.png',
        hiddenDetail: 'Edge defender with growing pass-rush toolkit and motor.'
      },
      {
         id: '25',
        firstName: 'Joey',
        lastName: 'Bosa',
        position: 'DL',
        age: 29,
        photo: '/imgs/joeybosa.png',
        hiddenDetail: 'One of the NFL’s elite pass rushers—dangerous on every snap.'
      },
    
      // Linebackers
      {
         id: '26',
        firstName: 'Matt',
        lastName: 'Milano',
        position: 'LB',
        age: 30,
        photo: '/imgs/mattmilano.png',
        hiddenDetail: 'All-Pro linebacker with elite instincts and sideline-to-sideline range.'
      },
      {
         id: '27',
        firstName: 'Dorian',
        lastName: 'Williams',
        position: 'LB',
        age: 23,
        photo: '/imgs/dorianwilliams.png',
        hiddenDetail: 'Young LB with speed, upside, and nose for the ball.'
      },
      {
         id: '28',
        firstName: 'Terrel',
        lastName: 'Bernard',
        position: 'LB',
        age: 24,
        photo: '/imgs/terrelbernard.png',
        hiddenDetail: 'Breakout candidate—versatile, fast, and physical.'
      },
    
      // Cornerbacks
      {
         id: '29',
        firstName: 'Christian',
        lastName: 'Benford',
        position: 'CB',
        age: 24,
        photo: '/imgs/christianbenford.png',
        hiddenDetail: 'Late-round gem—physical, smart, and always around the ball.'
      },
      {
         id: '30',
        firstName: 'Taron',
        lastName: 'Johnson',
        position: 'CB',
        age: 28,
        photo: '/imgs/taronjohnson.png',
        hiddenDetail: 'Top-tier nickel corner with quick feet and sharp instincts.'
      },
      {
         id: '31',
        firstName: 'Maxwell',
        lastName: 'Hairston',
        position: 'CB',
        age: 22,
        photo: '/imgs/maxwellhairston.png',
        hiddenDetail: 'Young, rising CB with big-play potential and speed.'
      },
    
      // Safeties
      {
         id: '32',
        firstName: 'Damar',
        lastName: 'Hamlin',
        position: 'S',
        age: 26,
        photo: '/imgs/damarhamlin.png',
        hiddenDetail: 'Inspiration to millions—back from cardiac arrest with heart and grit.'
      },
      {
         id: '33',
        firstName: 'Taylor',
        lastName: 'Rapp',
        position: 'S',
        age: 27,
        photo: '/imgs/taylorrapp.png',
        hiddenDetail: 'Former Ram brings versatility and championship pedigree.'
      },
      {
         id: '34',
        firstName: 'Cole',
        lastName: 'Bishop',
        position: 'S',
        age: 22,
        photo: '/imgs/colebishop.png',
        hiddenDetail: 'Rookie safety known for physicality and field vision.'
      },
    
      // Special Teams
      {
         id: '35',
        firstName: 'Tyler',
        lastName: 'Bass',
        position: 'K',
        age: 27,
        photo: '/imgs/tylerbass.png',
        hiddenDetail: 'One of the strongest legs in the league—clutch from deep.'
      },
      {
         id: '36',
        firstName: 'Jake',
        lastName: 'Camarda',
        position: 'P',
        age: 26,
        photo: '/imgs/jakecamarda.png',
        hiddenDetail: 'Elite punter with hang time, placement, and leg strength.'
      }
      
]