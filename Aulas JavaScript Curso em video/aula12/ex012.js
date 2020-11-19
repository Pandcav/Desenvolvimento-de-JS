 var agr = new Date()
 var hr = agr.getHours()
 console.log(`Agora são extamente ${hr}hr00.`)
 if (hr < 12) {
     console.log('Bom dia')
 } else if (hr <= 18) {
     console.log('Boa tarde')
 } else {
     console.log('Boa noite')
 }