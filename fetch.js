fetch('https://aampatra.vercel.app/').then(r=>r.text()).then(t => {
  require('fs').writeFileSync('aampatra.html', t);
});
