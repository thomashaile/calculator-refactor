//listener code which listens user action and pass to handler i use .bind to pass each buttons the values 
document.getElementById('C').addEventListener('click', clean);
document.getElementById('<').addEventListener('click', back)
document.getElementById('/').addEventListener('click', insert.bind(this, '/'));
document.getElementById('X').addEventListener('click', insert.bind(this, '*'));
document.getElementById('7').addEventListener('click', insert.bind(this, 7));
document.getElementById('8').addEventListener('click', insert.bind(this, 8));
document.getElementById('9').addEventListener('click', insert.bind(this, 9));
document.getElementById('6').addEventListener('click', insert.bind(this, 6));
document.getElementById('5').addEventListener('click', insert.bind(this, 5));
document.getElementById('4').addEventListener('click', insert.bind(this, 4));
document.getElementById('3').addEventListener('click', insert.bind(this, 3));
document.getElementById('2').addEventListener('click', insert.bind(this, 2));
document.getElementById('1').addEventListener('click', insert.bind(this, 1));
document.getElementById('0').addEventListener('click', insert.bind(this, 0));
document.getElementById('=').addEventListener('click', equal);
document.getElementById('+').addEventListener('click', insert.bind(this, '+'));
document.getElementById('-').addEventListener('click', insert.bind(this, '-'));
document.getElementById('.').addEventListener('click', insert.bind(this, '.'));
