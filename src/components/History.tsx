import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";

const milestones = [
  { date: "2023", label: "EL PRIMER RECONOCIMIENTO", title: "Una idea que empieza a hacerse realidad.", description: "Ganadores de BP Innova 2023. Un reconocimiento al proyecto que nos impulsó a seguir construyendo Andex Tech.", images: ["pic1.png", "pic4.png", "pic3.jpg", "pic2.png"], captions: ["El equipo de Andex Tech en BP Innova", "Entrega del reconocimiento BP Innova 2023", "Presentación del proyecto", "Andex Tech, ganadores de BP Innova"] },
  { date: "JUL — DIC 2023", label: "APRENDER PARA CONSTRUIR", title: "De la idea, a un proyecto con dirección.", description: "Participamos del programa de preaceleración de la Incubadora UNCUYO: una etapa de capacitación en negocios y emprendimiento para seguir desarrollando nuestra propuesta.", images: ["pic5.png", "pic7.png", "pic8.png", "pic9.png"], captions: ["Jornadas de trabajo y formación", "Encuentro del programa de preaceleración", "Actividades de la Incubadora UNCUYO", "Instituciones del programa"] },
  { date: "2024", label: "AMPLIAR LA MIRADA", title: "Crecer también es seguir aprendiendo.", description: "Formamos parte de Naves Argentina 2024 y del Programa de Gestión y Desarrollo de Habilidades Empresariales de la Cámara Joven de San Rafael. Nuevas herramientas, vínculos y experiencias para hacer crecer el proyecto.", images: ["pic10.jpg", "pic18.png", "pic11.png", "pic17.png"], captions: ["Encuentro de formación empresarial", "Participantes de Naves Argentina", "Capacitación en gestión y negocios", "Espacios y encuentros del programa"] },
  { date: "FINALES DE 2024", label: "UN CAMINO QUE NOS IMPULSA", title: "Finalistas. Y con mucho por delante.", description: "Fuimos finalistas en Naves Argentina 2024 y en Emprender 2024, de la Cámara Joven de San Rafael. Dos experiencias que forman parte de nuestra historia y de la manera en que seguimos trabajando.", images: ["pic15.JPG", "pic16.png", "pic15.png", "pic14.png"], captions: ["Cierre del programa Naves Argentina", "Reconocimientos en Emprender 2024", "Andex Tech compartiendo su proyecto", "Naves Argentina e IAE Business School"] },
];

export default function History() {
  return <section className="history-section section-pad" id="nosotros">
    <div className="history-intro reveal"><div><div className="eyebrow dark">03 / NOSOTROS</div><h2>Nuestra historia.<br /><span className="serif">Lo que nos trajo hasta acá.</span></h2></div><div><p>Detrás de cada solución hay personas, ideas y un camino recorrido. Somos Andex Tech: combinamos software y hardware para crear tecnología que resuelva necesidades reales.</p><a className="under-link" href="#contacto">Conocé lo que podemos hacer juntos <ArrowUpRight size={18} /></a></div></div>
    <div className="history-journey">{milestones.map((milestone, index) => <article className="history-chapter reveal" key={milestone.date}>
      <div className="history-date"><span className="history-node" /><span>{milestone.date}</span><small>CAPÍTULO 0{index + 1}</small></div>
      <div className="history-story"><div className="history-copy"><span className="eyebrow dark">{milestone.label}</span><h3>{milestone.title}</h3><p>{milestone.description}</p></div>
        <div className="history-gallery">{milestone.images.slice(0,2).map((src,i) => <figure key={src}><div className="history-photo"><Image src={`/${src}`} alt={milestone.captions[i]} fill sizes="(max-width: 560px) 88vw, (max-width: 900px) 40vw, 32vw" /></div><figcaption><span>0{i + 1}</span>{milestone.captions[i]}</figcaption></figure>)}</div>
        <details className="history-more"><summary>Más imágenes de esta etapa <Plus size={16} /></summary><div className="history-gallery">{milestone.images.slice(2).map((src,i) => <figure key={src}><div className="history-photo"><Image src={`/${src}`} alt={milestone.captions[i+2]} fill sizes="(max-width: 560px) 88vw, 35vw" /></div><figcaption><span>0{i + 3}</span>{milestone.captions[i+2]}</figcaption></figure>)}</div></details>
      </div>
    </article>)}</div>
    <div className="history-next"><Image src="/isologo-andextech.png" alt="" width={90} height={40} /><p>La próxima parte de esta historia<br /><span>la construimos con vos.</span></p><a href="#contacto" aria-label="Hablemos de tu proyecto"><ArrowUpRight size={32} strokeWidth={1} /></a></div>
  </section>;
}
