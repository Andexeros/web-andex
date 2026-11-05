"use client";
import { useState } from "react";
import Image from "next/image";
import { Pause, Play, RotateCcw, ArrowRight, ShoppingBag, Coffee, Utensils } from "lucide-react";

export default function TotemRender() {
  const [moving,setMoving]=useState(true);
  const [angle,setAngle]=useState(-18);
  const [category,setCategory]=useState("Menú");
  return <div className="totem-showroom">
    <div className="showroom-halo"/><span className="showroom-caption">ANDEX / HARDWARE STUDIO</span>
    <div className="totem-stage" role="img" aria-label="Render tridimensional animado de un tótem Andex Tech con estructura metálica y pantalla de autoservicio">
      <div className={moving?"kiosk-model rotating":"kiosk-model"} style={moving?undefined:{transform:`rotateY(${angle}deg)`}}>
        <div className="kiosk-body">
          <div className="kiosk-back"/><div className="kiosk-side side-left"/><div className="kiosk-side side-right"/><div className="kiosk-top"/>
          <div className="kiosk-front"><span className="kiosk-camera"/><div className="kiosk-display"><div className="kiosk-screen-head"><Image src="/logo-andextech.png" alt="" width={100} height={37}/><span>BIENVENIDO</span></div><h3>Tu próxima<br/><em>experiencia.</em></h3><p>Elegí. Descubrí. Disfrutá.</p><div className="kiosk-menu"><div><Utensils/><span>Menú</span></div><div><Coffee/><span>Café</span></div><div><ShoppingBag/><span>Para llevar</span></div></div><div className="kiosk-screen-card"><span>HECHO PARA VOS</span><b>{category==="Menú"?"Todo empieza con una elección.":"Un café. Un buen comienzo."}</b><ArrowRight size={20}/></div><div className="kiosk-screen-footer">TOCÁ PARA COMENZAR <span>→</span></div></div><div className="kiosk-reader"><span/><i/></div><Image className="kiosk-brand" src="/isologo-andextech.png" alt="" width={50} height={22}/><div className="kiosk-light"/></div>
        </div><div className="kiosk-pedestal"/><div className="kiosk-foot"/>
      </div>
    </div><div className="showroom-floor"/>
    <div className="showroom-controls"><button onClick={()=>setMoving(!moving)} aria-label={moving?"Pausar rotación del tótem":"Activar rotación del tótem"}>{moving?<Pause size={15}/>:<Play size={15}/>}</button><label><RotateCcw size={14}/><input type="range" min="-40" max="40" value={angle} aria-label="Ángulo del tótem" onChange={e=>{setMoving(false);setAngle(Number(e.target.value));}}/></label><button onClick={()=>setCategory(category==="Menú"?"Café":"Menú")}>Cambiar pantalla <ArrowRight size={13}/></button></div><small className="showroom-note">DISEÑO CONCEPTUAL 3D · CONFIGURACIÓN A MEDIDA</small>
  </div>;
}
