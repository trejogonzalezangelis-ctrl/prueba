const stack=[["Python","IA · Finanzas","#00f0ff"],["JavaScript","Web · Node","#fcee09"],["TypeScript","React · APIs","#3b9eff"],["Java","Backend","#ff8a2b"],["C#","Apps · .NET","#a06bff"],["Go","Microservicios","#00f0ff"],["Rust","Rendimiento","#ff6a3d"],["C++","Motores de riesgo","#ff2bd6"],["SQL","Datos · Reportes","#39ff88"],["R","Estadística","#3b9eff"],["PHP","Web legacy","#a06bff"],["Bash","Automatización","#39ff88"]];
document.getElementById('grid').innerHTML=stack.map(s=>`<div class="col-6 col-md-3"><div class="tech" style="--c:${s[2]}"><b>${s[0]}</b><span>${s[1]}</span></div></div>`).join('');
const P=[["Bot de trading algorítmico","Estrategias de cruce de medias y backtesting sobre datos de mercado.",["finanzas","ia"],["Python","Pandas"]],
["Dashboard de inversiones","Seguimiento de portafolio, rendimiento y asignación de activos en tiempo real.",["finanzas","web"],["TypeScript","React","SQL"]],
["Predictor de precios LSTM","Red neuronal que pronostica series de tiempo de acciones y criptomonedas.",["finanzas","ia"],["Python","PyTorch"]],
["Simulador de riesgo Monte Carlo","Miles de escenarios para medir VaR y volatilidad de un portafolio.",["finanzas"],["C++","Rust"]],
["API de presupuesto personal","Gastos, metas de ahorro y reportes con autenticación JWT.",["finanzas","web"],["Go","PostgreSQL"]],
["Analítica de tiros de básquetbol","Visión por computador para mapear tiros y medir porcentaje por zona.",["basquet","ia"],["Python","OpenCV"]],
["Marcador y estadísticas de liga","App web para registrar partidos, jugadores y tablas de posiciones.",["basquet","web"],["JavaScript","Node","Java"]],
["Asistente financiero con LLM","Chatbot que explica conceptos de finanzas y analiza tus gastos.",["finanzas","ia","web"],["Python","JavaScript","R"]]];
document.getElementById('projs').innerHTML=P.map(p=>`<div class="col-md-6 col-lg-4 item" data-c="${p[2].join(' ')}"><div class="proj"><h3 class="h6" style="color:var(--pk)">${p[0]}</h3><p>${p[1]}</p>${p[3].map(t=>`<span class="chip">${t}</span>`).join('')}</div></div>`).join('');
document.getElementById('filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 document.querySelectorAll('#filters .btn').forEach(x=>x.classList.toggle('active',x===b));
 document.querySelectorAll('.item').forEach(i=>i.classList.toggle('hide',b.dataset.f!=='all'&&!i.dataset.c.split(' ').includes(b.dataset.f)));});
const tg=document.getElementById('tg'),mn=document.getElementById('menu');
tg.onclick=()=>mn.classList.toggle('show');mn.querySelectorAll('a').forEach(a=>a.onclick=()=>mn.classList.remove('show'));
const words=["Full-Stack Developer","Ingeniero de IA","Fan de las Finanzas","Jugador de Básquetbol"];let w=0,c=0,d=false;const t=document.getElementById('typed');
(function tick(){const s=words[w];c+=d?-1:1;t.textContent=s.slice(0,c);let x=d?40:80;
 if(!d&&c===s.length){d=true;x=1400}else if(d&&c===0){d=false;w=(w+1)%words.length;x=300}setTimeout(tick,x)})();
const tb=document.getElementById('top');addEventListener('scroll',()=>tb.classList.toggle('on',scrollY>400));
tb.onclick=()=>scrollTo({top:0,behavior:'smooth'});
