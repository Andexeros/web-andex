"use client";
import { useState, type PointerEvent } from "react";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Coffee, Utensils } from "lucide-react";

export default function TotemRender() {
  const [rotation, setRotation] = useState({ x: 0, y: -18 });
  const resetRotation = () => setRotation({ x: 0, y: -18 });
  const rotate = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" && event.buttons === 0) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    setRotation({ x: (0.5 - y) * 12, y: (x - 0.5) * 70 });
  };
  return <div className="totem-showroom">
    <div className="showroom-halo"/><span className="showroom-caption">ANDEX / HARDWARE STUDIO</span>
    <div className="totem-stage interactive-totem" role="slider" tabIndex={0}
      aria-label="Girar tótem: mové el mouse, arrastrá horizontalmente o usá las flechas"
      aria-valuemin={-35} aria-valuemax={35} aria-valuenow={Math.round(rotation.y)}
      onPointerMove={rotate}
      onPointerDown={event => { if (event.pointerType !== "mouse") event.currentTarget.setPointerCapture(event.pointerId); rotate(event); }}
      onPointerUp={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
      onPointerLeave={resetRotation} onPointerCancel={resetRotation}
      onKeyDown={event => {
        if (["ArrowLeft", "ArrowRight", "Home"].includes(event.key)) {
          event.preventDefault();
          setRotation(current => ({ x: 0, y: event.key === "Home" ? -18 : Math.max(-35, Math.min(35, current.y + (event.key === "ArrowRight" ? 5 : -5))) }));
        }
      }}>
      <div className="kiosk-model" style={{transform:`rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`}}>
        <div className="kiosk-body">
          <div className="kiosk-back"/><div className="kiosk-side side-left"/><div className="kiosk-side side-right"/><div className="kiosk-top"/>
          <div className="kiosk-front"><span className="kiosk-camera"/><div className="kiosk-display"><div className="kiosk-screen-head"><Image src="/logo-andextech.png" alt="" width={100} height={37}/><span>BIENVENIDO</span></div><h3>Tu próxima<br/><em>experiencia.</em></h3><p>Elegí. Descubrí. Disfrutá.</p><div className="kiosk-menu"><div><Utensils/><span>Menú</span></div><div><Coffee/><span>Café</span></div><div><ShoppingBag/><span>Para llevar</span></div></div><div className="kiosk-screen-card"><span>HECHO PARA VOS</span><b>Todo empieza con una elección.</b><ArrowRight size={20}/></div><div className="kiosk-screen-footer">TOCÁ PARA COMENZAR <span>→</span></div></div><div className="kiosk-reader"><span/><i/></div><Image className="kiosk-brand" src="/isologo-andextech.png" alt="" width={50} height={22}/><div className="kiosk-light"/></div>
        </div><div className="kiosk-pedestal"/><div className="kiosk-foot"/>
      </div>
    </div><div className="showroom-floor"/>

  </div>;
}
