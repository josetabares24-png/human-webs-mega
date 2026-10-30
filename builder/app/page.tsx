"use client";
import {useMemo,useState} from "react";
import {generateSite,type Brief} from "../lib/generate";
const initial:Brief={name:"Casa Oliva",sector:"Restaurante",city:"Lisboa",description:"Cocina de temporada, mesas tranquilas y una carta que cambia con el mercado.",contact:"",style:"editorial"};
export default function Home(){
 const [brief,setBrief]=useState<Brief>(initial);
 const [mobile,setMobile]=useState(false);
 const html=useMemo(()=>generateSite(brief),[brief]);
 const update=(key:keyof Brief,value:string)=>setBrief(b=>({...b,[key]:value}));
 const download=()=>{const blob=new Blob([html],{type:"text/html;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="index.html";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
 return <div style={{fontFamily:"Arial,sans-serif",background:"#eeeae3",minHeight:"100vh",color:"#25251f"}}>
 <header style={{padding:"22px 4%",borderBottom:"1px solid #cbc6bb",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"}}><strong style={{fontSize:22}}>human/webs <span style={{fontWeight:400}}>studio</span></strong><span>Generador de sitios · MVP</span></header>
 <main style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,360px),1fr))",gap:24,padding:"24px 4%"}}>
 <section style={{background:"#fffdf8",padding:24,border:"1px solid #d7d0c4",alignSelf:"start"}}>
 <h1 style={{fontFamily:"Georgia,serif",fontSize:38,fontWeight:400,marginTop:0}}>De idea a página web.</h1><p>Completa los datos y mira el resultado al instante. Sin inventar reseñas ni información del negocio.</p>
 {([{key:"name",label:"Nombre del negocio"},{key:"sector",label:"Sector"},{key:"city",label:"Ciudad"},{key:"description",label:"Qué hace especial al negocio"},{key:"contact",label:"Correo o teléfono (opcional)"}] as const).map(f=><label key={f.key} style={{display:"block",marginTop:18,fontSize:14,fontWeight:600}}>{f.label}{f.key==="description"?<textarea value={brief[f.key]} onChange={e=>update(f.key,e.target.value)} rows={4} style={{display:"block",width:"100%",marginTop:7,padding:12,boxSizing:"border-box",font:"inherit"}}/>:<input value={brief[f.key]} onChange={e=>update(f.key,e.target.value)} style={{display:"block",width:"100%",marginTop:7,padding:12,boxSizing:"border-box",font:"inherit"}}/>}</label>)}
 <label style={{display:"block",marginTop:18}}>Dirección visual<select value={brief.style} onChange={e=>update("style",e.target.value)} style={{display:"block",width:"100%",padding:12,marginTop:7}}><option value="editorial">Editorial cálido</option><option value="minimal">Minimalista</option><option value="bold">Oscuro y expresivo</option></select></label>
 <button onClick={download} style={{marginTop:24,background:"#222",color:"white",border:0,padding:"15px 22px",cursor:"pointer",width:"100%"}}>Descargar web HTML</button>
 <p style={{fontSize:12,color:"#666"}}>La descarga es una web estática. Publicación automática, IA y formularios con backend todavía no están incluidos.</p>
 </section>
 <section><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,marginBottom:12}}><strong>Vista previa en vivo</strong><div><button onClick={()=>setMobile(false)} aria-pressed={!mobile}>Escritorio</button> <button onClick={()=>setMobile(true)} aria-pressed={mobile}>Móvil</button></div></div><div style={{background:"#c8c2b7",padding:mobile?16:8,minHeight:600,display:"flex",justifyContent:"center"}}><iframe title="Vista previa del sitio generado" sandbox="" srcDoc={html} style={{width:mobile?375:"100%",maxWidth:"100%",height:760,border:0,background:"white"}}/></div></section>
 </main></div>
}
