import Poligono from './models/Poligono';
import Retangulo from './models/Retangulo';
import Triangulo from './models/Triangulo';
import TrianguloIsosceles from './models/TrianguloIsosceles';

/*let triangulo1 = new Triangulo(5, 4);

console.log(triangulo1.area())

let triangulo2 = new TrianguloIsosceles(12, 10);
console.log(triangulo2.area())*/

let p = new Poligono({ lado1: 2, lado2: 4 });
p.area();

let r = new Retangulo({ base: 4, altura: 5 })
console.log(r.area());

let t = new Triangulo({ base: 4, altura: 5 })
console.log(t.area());

let i = new TrianguloIsosceles({ base: 12, lado: 10 })
console.log(i.area());