import { format, compareAsc } from 'date-fns'

const dataDate = document.querySelector('.date__day')
 const dataMonthTime= document.querySelector('.date__month-time')
   const dataMonth= document.querySelector('.date__month')
    const dataTime= document.querySelector('.date__time')

    dataDate.textContent = format(new Date(), 'do');
    dataMonthTime.textContent = format(new Date(), 'EEE');
    dataMonth.textContent = format(new Date(), 'MMMM');
    setInterval(() => {
      dataTime.textContent = format(new Date(), 'HH:mm:ss')
    }, 1000)
    

    // console.log(format(new Date(), 'do'))
    // console.log(format(new Date(), 'EEE'))
    // console.log(format(new Date(), 'MMMM'))

    
    

    