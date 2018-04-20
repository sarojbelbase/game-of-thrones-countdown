console.log('hi');
let EndingTime = Date.parse("2019-04-14T21:00:00-04:00");
      
      function pad2(s) 
      {
        return ("00" + s).substr(-2);
      }
      let TimeElements = document.querySelector('.time')
      
      function update() 
      {
        let remaining = EndingTime - Date.now();
        if (remaining < 0) 
        {
          if (remaining < -10000) 
          {
            TimeElements.textContent = 'HBO is streaming first episode!';
          } 
          else
           {
            if ((remaining / 1000 | 0) % 2) 
            {
              TimeElements.textContent = '000:00:00:00';
            } 
            else 
            {
              TimeElements.textContent = '';
            }
          }
        } 
        else 
        {
            let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
            TimeElements.textContent = `${days} Days : ${pad2(hours)} Hours : ${pad2(minutes)} Mins : ${pad2(seconds)} Secs `;
        }
        setTimeout(update, 200);
      }
      update()