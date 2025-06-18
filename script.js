const galeriaData = [
  {
    imagen: "./assets/images/foto(30).jpeg",
    frase: "“No importa dónde, mientras estemos juntos.”",
  },
  {
    imagen: "./assets/images/foto(29).jpeg",
    frase: "“Eres el hogar al que siempre quiero volver.”",
  },
  {
    imagen: "./assets/images/foto(28).jpeg",
    frase: "“Tu risa sigue siendo mi sonido favorito.”",
  },
  {
    imagen: "./assets/images/foto(27).jpeg",
    frase: "“Nos elijo una y otra vez.”",
  },
  {
    imagen: "./assets/images/foto(26).jpeg",
    frase: "“Tú haces que todo valga la pena.”",
  },
  {
    imagen: "./assets/images/foto(25).jpeg",
    frase: "“Eres mi lugar seguro.”",
  },
  {
    imagen: "./assets/images/foto(24).jpeg",
    frase: "“A tu lado, los días grises también brillan.”",
  },
  {
    imagen: "./assets/images/foto(23).jpeg",
    frase: "“No necesito más que tus abrazos.”",
  },
  {
    imagen: "./assets/images/foto(22).jpeg",
    frase: "“Gracias por hacerme creer en el amor verdadero.”",
  },
  {
    imagen: "./assets/images/foto(21).jpeg",
    frase: "“Cada momento contigo es un tesoro.”",
  },
  {
    imagen: "./assets/images/foto(20).jpeg",
    frase: "“Tú haces que lo simple sea mágico.”",
  },
  {
    imagen: "./assets/images/foto(19).jpeg",
    frase: "“Nunca dejaré de mirarte como la primera vez.”",
  },
  {
    imagen: "./assets/images/foto(18).jpeg",
    frase: "“Tú eres mi mejor historia.”",
  },
  {
    imagen: "./assets/images/foto(17).jpeg",
    frase: "“Nuestro amor es mi mayor suerte.”",
  },
  {
    imagen: "./assets/images/foto(16).jpeg",
    frase: "“Tu amor me hace mejor persona.”",
  },
  {
    imagen: "./assets/images/foto(15).jpeg",
    frase: "“Te pienso y sonrío, siempre.”",
  },
  {
    imagen: "./assets/images/foto(14).jpeg",
    frase: "“Eres mi constante en medio del caos.”",
  },
  {
    imagen: "./assets/images/foto(13).jpeg",
    frase: "“A tu lado, soy yo en mi mejor versión.”",
  },
  {
    imagen: "./assets/images/foto(12).jpeg",
    frase: "“Cada segundo contigo vale una eternidad.”",
  },
  {
    imagen: "./assets/images/foto(11).jpeg",
    frase: "“Tú eres lo que siempre soñé sin saberlo.”",
  },
  {
    imagen: "./assets/images/foto(10).jpeg",
    frase: "“Eres mi calma, mi impulso y mi razón.”",
  },
  {
    imagen: "./assets/images/foto(9).jpeg",
    frase: "“Desde que llegaste, todo tiene más sentido.”",
  },
  {
    imagen: "./assets/images/foto(8).jpeg",
    frase: "“Nuestro amor es mi lugar favorito del mundo.”",
  },
  {
    imagen: "./assets/images/foto(7).jpeg",
    frase: "“Eres la historia que quiero seguir escribiendo.”",
  },
  {
    imagen: "./assets/images/foto(6).jpeg",
    frase: "“Juntos hacemos que el tiempo se detenga.”",
  },
  {
    imagen: "./assets/images/foto(5).jpeg",
    frase: "“Eres mi mejor coincidencia.”",
  },
  {
    imagen: "./assets/images/foto(4).jpeg",
    frase: "“Mi corazón tiene tu nombre desde hace tiempo.”",
  },
  {
    imagen: "./assets/images/foto(3).jpeg",
    frase: "“Eres mi persona favorita, sin duda alguna.”",
  },
  {
    imagen: "./assets/images/foto(2).jpeg",
    frase: "“Cada día contigo es una nueva forma de amar.”",
  },
  {
    imagen: "./assets/images/foto(1).jpeg",
    frase: "“Para siempre y un día más.”",
  },
];

const slider = document.getElementById("slider");

// Generar dinámicamente las slides
slider.innerHTML = galeriaData
  .map(
    (item, index) => `
  <div class="slide${index === 0 ? " active" : ""}">
    <div class="imageContainer">
      <img src="${item.imagen}" alt="Recuerdo ${index + 1}" />
    </div>
    <div class="textContainer">
      <p class="frase">${item.frase}</p>
    </div>
  </div>
`
  )
  .join("");

let current = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  if (current < slides.length - 1) {
    slides[current].classList.remove("active");
    current++;
    slides[current].classList.add("active");
  } else {
    clearInterval(sliderInterval); // Detiene el ciclo
  }
}

const sliderInterval = setInterval(showNextSlide, 4000);

// Botón para ir a la carta
document.getElementById("verCartaBtn").addEventListener("click", () => {
  document.getElementById("galeria").classList.add("hidden");
  document.getElementById("carta").classList.remove("hidden");
});

const carta = `
Ana Isabel Cueto Barboza, amor mío:

Hoy celebramos un año más… seis años desde que comenzó esta historia que cambió mi vida para siempre. Aunque la vida nos cruzó mucho antes, no sabía que en ese encuentro estaba conociendo a la mujer que me haría feliz por el resto de mis días.

Desde entonces, has sido mi hogar, mi brújula, mi calma y mi impulso. La frase que repetimos —“para siempre y un día más”— intenta ponerle medida a un amor que simplemente no cabe en ninguna cuenta. Porque lo que siento por ti no se puede calcular, pesar ni detener.

Eres mi complemento. La voz que me aterriza, la luz que le da dirección a mi camino. Gracias a ti, mi vida tiene un propósito, y mi alma, un reflejo donde reconocerse.

A veces pienso que nuestras almas estaban destinadas a encontrarse mucho antes de que siquiera supiéramos lo que era el amor. Que el universo, desde su primer suspiro, alineó cada partícula para que hoy estemos aquí. Unidos en esta vida finita, pero con la certeza de que en la eternidad seguiremos siendo uno solo.

Feliz aniversario, mi amor. Gracias por caminar conmigo, por elegirme, por amarme.

Con todo mi amor,
Para siempre y un día más.
`;

const cartaTexto = document.getElementById("cartaTexto");
let index = 0;

function escribirCarta() {
  if (index < carta.length) {
    cartaTexto.textContent += carta.charAt(index);
    index++;
    setTimeout(escribirCarta, 40); // velocidad de escritura
  }
}

// Activar al mostrar la sección de la carta
document.getElementById("verCartaBtn").addEventListener("click", () => {
  document.getElementById("galeria").classList.add("hidden");
  document.getElementById("carta").classList.remove("hidden");
  escribirCarta();
});

// Botón volver
document.getElementById("volverGaleriaBtn").addEventListener("click", () => {
  document.getElementById("carta").classList.add("hidden");
  document.getElementById("galeria").classList.remove("hidden");
});
