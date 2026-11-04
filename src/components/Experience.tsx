"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Plus, Minus, Check, Menu, X, Play, Scale, ShoppingBag, Package, Users, Monitor, ChevronDown, MoveUpRight } from "lucide-react";

const contact = (message: string) => `https://wa.me/5492604017239?text=${encodeURIComponent(message)}`;
const demoLink = contact("Hola Andex, me gustaría conocer AndexMarket y coordinar una demo.");
const totems = [
  { name: "Turnos", title: "Una mejor espera empieza acá.", description: "Organizá la atención de tu clínica, oficina o local con un punto de recepción pensado para tus clientes.", image: "/totem1.jpg", tags: ["Atención al público", "Gestión de turnos"] },
  { name: "Gastronomía", title: "Del antojo al pedido, en una pantalla.", description: "Una experiencia de autogestión para explorar el menú y realizar pedidos. Diseñamos la solución alrededor de tu operación.", image: "/totem2.jpg", tags: ["Menú digital", "Autogestión"] },
  { name: "Comercios", title: "Otra forma de hacer las compras.", description: "Acercá el autoservicio a tu comercio con soluciones que integran la experiencia de selección, pesaje y compra.", image: "/totem3.jpg", tags: ["Autoservicio", "Pesaje"] },
  { name: "Publicidad", title: "Tu marca merece ser vista.", description: "Dale un lugar protagonista a tus contenidos con una pantalla digital que transforma tu espacio en un punto de comunicación.", image: "/totem4.jpg", tags: ["Cartelería digital", "Comunicación"] },
];

function Mark({ market = false }: { market?: boolean }) {
  return <span className={`brand ${market ? "brand-market" : ""}`}><span className="brand-symbol" aria-hidden="true"><i /><i /></span><span>andex{market ? <em>market</em> : <span className="brand-dot">®</span>}</span></span>;
}

function SalesDemo({ compact = false }: { compact?: boolean }) {
  const [quantity, setQuantity] = useState(1);
  const [paid, setPaid] = useState(false);
  const total = (quantity * 2400 + 2890).toLocaleString("es-AR");
  return <div className={`sales-demo ${compact ? "compact" : ""}`}>
    <div className="demo-top"><Mark market /><span><span className="live-dot" /> Punto de venta</span></div>
    <div className="demo-content"><div className="demo-heading"><div><small>MI COMERCIO</small><h3>Todo listo para vender.</h3></div><span className="demo-avatar">A</span></div>
      <div className="demo-search"><ShoppingBag size={16} /> Buscar un producto <span>⌘ K</span></div>
      <div className="order-head"><span>Orden 01</span><span><Scale size={13} /> Balanza conectada</span></div>
      <div className="product-row"><span className="fruit banana" aria-hidden="true">🍌</span><div><b>Banana Ecuador</b><small>$2.400 / kg</small></div><span className="quantity">{quantity},000 kg</span><b>${(quantity * 2400).toLocaleString("es-AR")}</b></div>
      <div className="product-row"><span className="fruit tomato" aria-hidden="true">🍅</span><div><b>Tomate redondo</b><small>$2.890 / kg</small></div><span className="quantity">1,000 kg</span><b>$2.890</b></div>
      {!compact && <div className="demo-controls"><span>Probá cambiar el peso de las bananas</span><button aria-label="Quitar un kilo" disabled={quantity === 1} onClick={() => { setQuantity(Math.max(1, quantity - 1)); setPaid(false); }}><Minus size={16} /></button><button aria-label="Agregar un kilo" disabled={quantity === 9} onClick={() => { setQuantity(Math.min(9, quantity + 1)); setPaid(false); }}><Plus size={16} /></button></div>}
      <div className="demo-total"><span>Total de la venta<strong>${total}</strong></span><span>2 productos<br /><small>Pesos argentinos</small></span></div>
      <button className="demo-pay" onClick={() => setPaid(!paid)}>{paid ? <><Check size={18} /> Venta de ejemplo cobrada · Reiniciar</> : <>Simular cobro <ArrowRight size={18} /></>}</button>
      <div className="demo-status" role="status">{paid ? "✓ Stock de ejemplo actualizado. Todo en orden." : "Demostración ilustrativa · Sin operaciones reales"}</div>
    </div>
  </div>;
}

export default function Experience({ mode }: { mode: "home" | "market" | "totems" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const playButton = useRef<HTMLButtonElement>(null);
  const current = totems[selected];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (videoOpen) { dialog.current?.showModal(); document.body.style.overflow = "hidden"; }
    else { dialog.current?.close(); video.current?.pause(); document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [videoOpen]);

  const closeVideo = () => { setVideoOpen(false); playButton.current?.focus(); };
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <header className="header"><div className="nav-wrap"><Link href="/" aria-label="Andex, inicio"><Mark /></Link>
      <nav aria-label="Navegación principal" className={menuOpen ? "nav open" : "nav"}>
        <Link href="/andexmarket" aria-current={mode === "market" ? "page" : undefined} onClick={() => setMenuOpen(false)}>AndexMarket <span className="nav-new">NUEVO</span></Link>
        <Link href="/totems" aria-current={mode === "totems" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Tótems</Link>
        <a href="/#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
        <a href="#contacto" className="nav-contact" onClick={() => setMenuOpen(false)}>Hablemos <ArrowUpRight size={16} /></a>
      </nav><button className="menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div></header>
    <main id="contenido">
      <section className={`hero ${mode === "totems" ? "hero-totems" : ""}`}>
        <div className="hero-grid" aria-hidden="true" /><div className="hero-inner">
          <div className="hero-copy"><div className="eyebrow"><span className="live-dot" /> {mode === "home" ? "TECNOLOGÍA CON LOS PIES EN TU NEGOCIO" : mode === "market" ? "ANDEXMARKET / SOFTWARE DE GESTIÓN" : "ANDEX / HARDWARE A MEDIDA"}</div>
            <h1>{mode === "home" ? <>Menos vueltas.<br />Más <span className="accent-serif">futuro.</span></> : mode === "market" ? <>Vos vendés.<br /><span className="accent-serif">Andex hace<br />el resto.</span></> : <>Una pantalla.<br /><span className="accent-serif">Infinitas<br />posibilidades.</span></>}</h1>
            <p>{mode === "home" ? "Creamos software y hardware que simplifican tu día. Para que puedas enfocarte en lo que mejor hacés: hacer crecer tu negocio." : mode === "market" ? "Ventas, balanzas, stock y cuentas corrientes. Todo conectado, todo más simple. Tu negocio, claro." : "Tótems diseñados para conectar personas, espacios y negocios. Una experiencia a la medida de tu proyecto."}</p>
            <div className="hero-actions"><a href={mode === "totems" ? "#totems" : "#market"} className="button lime">{mode === "totems" ? "Explorar tótems" : "Descubrí AndexMarket"}<ArrowUpRight size={19} /></a><a href="#contacto" className="text-link">Contanos tu idea <ArrowRight size={17} /></a></div>
            <div className="hero-note"><span className="mini-cross">✳</span> Hecho en Mendoza. Pensado para ir más lejos.</div>
          </div>
          <div className="hero-visual">{mode === "totems" ? <div className="hero-totem-image"><Image src="/totem2.jpg" alt="Tótem Andex para pedidos gastronómicos" fill priority sizes="(max-width: 800px) 90vw, 45vw" /><span className="image-label">DISEÑADO ALREDEDOR DE VOS ↗</span></div> : <>
            <div className="orbital orbit-one" /><div className="orbital orbit-two" /><span className="orbit-caption">SOFTWARE + HARDWARE + VOS</span>
            <div className="floating-demo"><SalesDemo compact /></div>
            <div className="floating-badge badge-stock"><span className="badge-icon"><Package size={20} /></span><div><strong>Stock al día</strong><small>Cada venta cuenta.</small></div><Check size={15} /></div>
            <div className="floating-badge badge-scale"><Scale size={19} /><span>Balanza + ventas<br /><strong>Una misma experiencia.</strong></span></div>
            <span className="visual-number">01 — EL PRÓXIMO PASO</span>
          </>}</div>
        </div><div className="hero-bottom"><span>INTELIGENCIA QUE SE VUELVE SIMPLE.</span><a href={mode === "totems" ? "#totems" : "#market"}>SEGUÍ EXPLORANDO <ChevronDown size={15} /></a><span>SCROLL TO DISCOVER ↓</span></div>
      </section>

      <div className="ticker" aria-label="Software, hardware y acompañamiento"><div><span>Ideas que funcionan.</span><i>✳</i><span>Negocios que avanzan.</span><i>✳</i><span>Tecnología cercana.</span><i>✳</i><span>Ideas que funcionan.</span><i>✳</i><span>Negocios que avanzan.</span><i>✳</i></div></div>

      {mode !== "totems" && <section className="market-section section-pad" id="market">
        <div className="section-heading reveal"><div><div className="eyebrow dark">01 / ANDEXMARKET</div><h2>Tu negocio,<br /><span className="serif">en sus mejores manos.</span></h2></div><div className="section-intro"><p>Las tuyas. Con herramientas que te sacan trabajo de encima y te devuelven claridad.</p><Link className="under-link" href="/andexmarket">Conocé AndexMarket <ArrowUpRight size={18} /></Link></div></div>
        <div className="market-grid"><div className="market-demo-wrap reveal"><div className="demo-label"><span className="live-dot" /> PROBÁ LA EXPERIENCIA</div><SalesDemo /><div className="demo-caption"><span>Menos pasos. Más simple.</span><span>↗</span></div></div>
        <div className="market-features reveal">{[
          { icon: ShoppingBag, name: "Vendé sin frenar.", text: "Abrí una orden, agregá productos y registrá el cobro desde un mismo lugar." },
          { icon: Scale, name: "El peso entra solo.", text: "Conectá una balanza compatible y llevá su lectura directamente a la venta." },
          { icon: Package, name: "Tu stock, siempre presente.", text: "Cada venta actualiza las existencias. Conocé lo que tenés sin perder el ritmo." },
          { icon: Users, name: "Cuentas claras.", text: "Consultá las cuentas corrientes y mantené a la vista los saldos de tus clientes." },
        ].map((feature, i) => <div className="feature" key={feature.name}><span className="feature-icon"><feature.icon size={22} strokeWidth={1.5} /></span><div><small>0{i + 1}</small><h3>{feature.name}</h3><p>{feature.text}</p></div></div>)}<a href={demoLink} target="_blank" rel="noopener noreferrer" className="button forest">Quiero una demo <ArrowUpRight size={18} /></a></div></div>
        <div className="video-strip reveal"><div><span className="video-icon"><Play size={21} /></span><div><h3>De la primera venta a todo bajo control.</h3><p>Mirá AndexMarket en acción.</p></div></div><button ref={playButton} className="under-link" onClick={() => setVideoOpen(true)}>Reproducir video <ArrowUpRight size={18} /></button></div>
      </section>}

      <section className="totems-section section-pad" id="totems"><div className="section-heading reveal"><div><div className="eyebrow">{mode === "totems" ? "01" : "02"} / EXPERIENCIAS QUE SE TOCAN</div><h2>El futuro también<br /><span className="accent-serif">ocupa un lugar.</span></h2></div><p className="section-intro">Hardware con un propósito.<br />Tótems a pedido que transforman la forma de atender, comprar y conectar.</p></div>
        <div className="totem-tabs" role="tablist" aria-label="Tipos de tótems">{totems.map((totem, i) => <button key={totem.name} id={`tab-${i}`} role="tab" aria-selected={selected === i} aria-controls="totem-panel" tabIndex={selected === i ? 0 : -1} className={selected === i ? "active" : ""} onClick={() => setSelected(i)} onKeyDown={e => { if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) { e.preventDefault(); const next = e.key === "Home" ? 0 : e.key === "End" ? 3 : (i + (e.key === "ArrowRight" ? 1 : 3)) % 4; setSelected(next); document.getElementById(`tab-${next}`)?.focus(); } }}><span>0{i + 1}</span>{totem.name}<ArrowUpRight size={16} /></button>)}</div>
        <div className="totem-panel" id="totem-panel" role="tabpanel" aria-labelledby={`tab-${selected}`}><div className="totem-photo" key={current.image}><Image src={current.image} alt={`Propuesta de tótem Andex para ${current.name.toLowerCase()}`} fill sizes="(max-width: 800px) 95vw, 50vw" /><span className="photo-caption">ANDEX HARDWARE / IMAGEN DE REFERENCIA</span></div><div className="totem-description" key={current.title}><span className="totem-index">0{selected + 1}<span> / 04</span></span><Monitor size={34} strokeWidth={1} /><h3>{current.title}</h3><p>{current.description}</p><div className="tags">{current.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="button lime" href={contact(`Hola Andex, me interesa un tótem para ${current.name.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">Diseñemos el tuyo <ArrowUpRight size={18} /></a><small className="custom-note">Cada proyecto se configura a medida. Consultanos por opciones e integraciones.</small></div></div>
      </section>

      <section className="about-section section-pad" id="nosotros"><div className="about-grid"><div className="reveal"><div className="eyebrow dark">03 / SOMOS ANDEX</div><h2>La tecnología avanza.<br /><span className="serif">Nosotros, con vos.</span></h2><p>No creemos en complicar lo simple. Unimos software y hardware para resolver desafíos reales, con una mirada cercana a cada negocio.</p><a className="under-link" href="#contacto">Conversemos sobre el tuyo <ArrowUpRight size={18} /></a></div><div className="about-art reveal" aria-hidden="true"><span className="art-axis">ORIGEN / MENDOZA, ARGENTINA</span><div className="mountain mountain-back" /><div className="mountain mountain-front" /><div className="art-sun" /><span className="art-caption">Una mirada local.<br /><b>Una visión que crece.</b></span><MoveUpRight className="art-arrow" size={32} /></div></div>
        <div className="timeline reveal"><div><span>2023</span><h3>El primer impulso.</h3><p>Ganadores de BP Innova y parte del programa de preaceleración de la Incubadora UNCUYO.</p></div><div><span>2024</span><h3>Ideas que toman forma.</h3><p>Finalistas de Naves Argentina y Emprender, de la Cámara Joven de San Rafael.</p></div><div><span>HOY</span><h3>El próximo paso, juntos.</h3><p>AndexMarket y soluciones de hardware a medida para acompañar a más negocios.</p></div></div>
      </section>

      <section className="faq-section section-pad"><div><div className="eyebrow dark">TODO UN POCO MÁS CLARO</div><h2>Antes de<br /><span className="serif">dar el paso.</span></h2></div><div className="faq-list">{[
        ["¿Cómo puedo probar AndexMarket?", "Escribinos para coordinar una demo. Te mostramos el flujo de ventas y revisamos juntos cómo se adapta a la operación de tu comercio."],
        ["¿Puedo usar la balanza que ya tengo?", "Depende del modelo y de su conexión. Contanos qué balanza usás para que podamos verificar la compatibilidad antes de la implementación."],
        ["¿Los tótems se hacen a medida?", "Sí. Definimos la configuración según el espacio, el uso y las integraciones de cada proyecto. Las imágenes muestran propuestas de referencia."],
        ["¿Cómo solicito una propuesta?", "Contactanos por WhatsApp o correo y contanos qué querés resolver. Con esa información podemos conversar sobre alcance, tiempos y presupuesto."],
      ].map(([q, a]) => <details key={q}><summary>{q}<Plus size={19} /></summary><p>{a}</p></details>)}</div></section>

      <section className="contact-section section-pad" id="contacto"><div className="eyebrow">EL PRÓXIMO PASO EMPIEZA CON UNA CHARLA</div><div className="contact-title"><h2>Hagamos que<br /><span className="accent-serif">pase.</span></h2><a className="contact-arrow" aria-label="Hablar con Andex por WhatsApp" href={contact("Hola Andex, quiero conversar sobre mi proyecto.")} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={70} strokeWidth={1} /></a></div><div className="contact-bottom"><p>Contanos qué necesita tu negocio.<br />Nosotros ponemos la tecnología.</p><a href="mailto:info@andex.tech">info@andex.tech <ArrowUpRight size={20} /></a><a href={demoLink} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp <ArrowUpRight size={20} /></a></div></section>
    </main>
    <footer className="footer"><Link href="/" aria-label="Andex, inicio"><Mark /></Link><span>© {new Date().getFullYear()} Andex Tech</span><span>Mendoza, Argentina ↗</span><a href="#contenido">Volver arriba ↑</a></footer>
    <dialog ref={dialog} className="video-dialog" onCancel={closeVideo} onClick={event => { if (event.target === event.currentTarget) closeVideo(); }}><div className="video-dialog-content"><button className="close-video" aria-label="Cerrar video" onClick={closeVideo}><X /></button><h2>AndexMarket en acción</h2>{videoOpen && <video ref={video} controls autoPlay playsInline preload="metadata" src="/media/andexmarket-demo.mp4"><track kind="captions" src="/media/andexmarket-es.vtt" srcLang="es" label="Español" /></video>}<p>Ventas, balanza, stock y cuentas corrientes. Tu negocio, claro.</p></div></dialog>
  </>;
}
