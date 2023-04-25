const countDownEl=document.querySelector("#countDown")
const welcomeEl=document.querySelector("#welcome")
const dayBox=document.querySelector(".days > h2")
const hourBox=document.querySelector(".hours > h2")
const minuteBox=document.querySelector(".minutes > h2")
const secondBox=document.querySelector(".seconds > h2")



const targetDate=new Date("MAY 25,2023,12:00:00")




const SECOND=1000;
const MINUTE=SECOND * 60;
const HOUR=MINUTE*60;
const DAY=HOUR*24;



const setTimer= () =>{
    
    const now=new Date()
    const difference=targetDate - now
 
    const days=Math.floor(difference / DAY) 
    const hours=Math.floor((difference % DAY) / HOUR)
    const minutes=Math.floor((difference % HOUR) / MINUTE)
    const seconds=Math.floor((difference % MINUTE) / SECOND)


    if(difference > 0){
        setCountDown(days,hours,minutes,seconds)
        
    }else{
        clearInterval(handleCounter)
        countDownEl.remove()
        welcomeEl.style.cssText=`animation : fadeInUp 1000ms forwards ease`
    }



}


const setCountDown = (days,hours,minutes,seconds) =>{

    dayBox.innerHTML=String(days).padStart(3,0)
    hourBox.innerHTML=String(hours).padStart(2,0) 
    minuteBox.innerHTML=String(minutes).padStart(2,0) 
    secondBox.innerHTML=String(seconds).padStart(2,0) 
}






let handleCounter=setInterval(setTimer,1000)

