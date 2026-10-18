(function(){
var bar=document.getElementById('bar');
var tg=document.querySelectorAll('.tags span');
tg.forEach(function(t){t.addEventListener('click',function(ev){var o=t.classList.contains('open');tg.forEach(function(x){x.classList.remove('open')});if(!o)t.classList.add('open');ev.stopPropagation()})});
document.addEventListener('click',function(){tg.forEach(function(x){x.classList.remove('open')})});
function pg(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%'}
addEventListener('scroll',pg,{passive:true});pg();
if(!('IntersectionObserver' in window)){return}
var els=document.querySelectorAll('.about-head>*,.pillar,.logo-card,.panel,.services .eyebrow,.services h2,.services .lead,.svc,.cta-line,.step,.item,.ind span,#process h2,#process .lead,#why h2,.contact>*');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting&&e.boundingClientRect.top>=0)return;var el=e.target;el.classList.add('in');io.unobserve(el);if(el.matches('.svc,.pillar,.logo-card,.item,.ind span')){setTimeout(function(){el.classList.remove('rv','in');el.style.transitionDelay=''},1400)}})},{threshold:.15});
els.forEach(function(el){var i=Array.prototype.indexOf.call(el.parentNode.children,el);el.style.transitionDelay=(i%4)*100+'ms';el.classList.add('rv');io.observe(el)});
})();
(function(){
var f=document.getElementById('f'),ok=document.getElementById('ok');
var OFFICE='vcubetechsolution@gmail.com',WA='917039196625';
function link(h,t,web){var a=document.createElement('a');a.href=h;a.textContent=t;a.className='btn';a.style.margin='8px 8px 0 0';if(web){a.target='_blank';a.rel='noopener'}return a}
f.addEventListener('submit',function(e){
e.preventDefault();
var d=new FormData(f);
function g(k){return String(d.get(k)||'').trim()}
var body=['New free consultation request','','Name: '+g('name'),'Mobile: '+g('phone'),'Email: '+g('email'),'Company: '+(g('company')||'-'),'Service: '+g('service'),'Message: '+g('msg')].join('\n');
var mail='mailto:'+OFFICE+'?subject='+encodeURIComponent('Free consultation request - '+g('name'))+'&body='+encodeURIComponent(body);
var wa='https://wa.me/'+WA+'?text='+encodeURIComponent(body);
ok.textContent='';
var p=document.createElement('p');p.textContent='Thank you, '+g('name')+'. Your request is ready. Send it to our office with one tap:';
ok.appendChild(p);ok.appendChild(link(mail,'Send by email'));ok.appendChild(link(wa,'Send on WhatsApp',true));
try{var t=link(mail,'');t.style.display='none';document.body.appendChild(t);t.click();t.remove()}catch(x){}
f.reset();
});
})();

/* mobile menu */
(function(){
var b=document.querySelector('.menu'),m=document.getElementById('menu');
if(!b||!m)return;
function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')}
b.addEventListener('click',function(){set(!m.classList.contains('open'))});
m.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
addEventListener('resize',function(){if(innerWidth>860)set(false)});
})();
