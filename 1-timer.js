import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as C,i as S}from"./assets/vendor-BbSUbo7J.js";const c=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]"),u=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),m=document.querySelector("[data-seconds]");let i;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){i=t[0],console.log(t[0]),i<=new Date?(S.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),r.disabled=!0):r.disabled=!1}};C(c,v);let f;r.addEventListener("click",x);function x(){c.disabled=!0,r.disabled=!0,f=setInterval(()=>{const t=Date.now(),o=i-t,e=b(o);o<=0?(clearInterval(f),u.textContent="00",d.textContent="00",l.textContent="00",m.textContent="00",c.disabled=!1):q({daysElement:u,hoursElement:d,minutesElement:l,secondsElement:m,days:e.days,hours:e.hours,minutes:e.minutes,seconds:e.seconds})},1e3)}function b(t){const o=s(Math.floor(t/864e5)),e=s(Math.floor(t%(1e3*60*60*24)/(1e3*60*60))),n=s(Math.floor(t%(1e3*60*60)/(1e3*60))),a=s(Math.floor(t%(1e3*60)/1e3));return{days:o,hours:e,minutes:n,seconds:a}}function s(t){return String(t).padStart(2,"0")}function q({daysElement:t,hoursElement:o,minutesElement:e,secondsElement:n,days:a,hours:h,minutes:y,seconds:p}){t&&o&&e&&n&&(t.textContent=a,o.textContent=h,e.textContent=y,n.textContent=p)}
//# sourceMappingURL=1-timer.js.map
