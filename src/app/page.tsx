
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en Solo 24 Horas" subheadline="Transformamos tu negocio con una web lista en un día, con apoyo continuo para tu tranquilidad." cta1="Comienza Ahora" />
<How step1Title="Descubre tu Potencial" step1Desc="Analizamos tu negocio para ventas digitales efectivas." step2Title="Web en 24 Horas" step2Desc="Creamos y lanzamos tu sitio en un día." step3Title="Soporte 24/7" step3Desc="Resolvemos tus dudas y optimizamos constantemente." />
<Aboutus headline="WebGo: Digitaliza y Aumenta Ventas" subheadline="WebGo crea sitios web efectivos para emprendedores ocupados, asegurando ventas online sin esfuerzo." beneficiotitulo1="Generación de Ventas" beneficio1="Transforma recomendaciones en ventas online." beneficiotitulo2="Gestión Sencilla" beneficio2="Nos ocupamos de todo online." />
<Services heading="Digitaliza y Aumenta Tus Ventas" description="Transformamos tus referencias en ventas online sin complicaciones." services={[{"name":"Creación Express","icon":"rocket","description":"Web en 24 horas, lista para vender."},{"name":"Mantenimiento 24/7","icon":"wrench","description":"Soporte continuo para tu tranquilidad."},{"name":"SEO Optimizado","icon":"search","description":"Visibilidad garantizada en motores de búsqueda."},{"name":"Integración E-commerce","icon":"shopping-cart","description":"Añade tienda online fácil y rápido."},{"name":"Automatización de Ventas","icon":"robot","description":"Flujo de ventas automatizado y eficiente."},{"name":"Análisis de Tráfico","icon":"chart-bar","description":"Conoce y mejora tu audiencia digital."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web impactantes y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender en línea si solo vendo por recomendaciones?","respuesta":"WebGo te facilita la transición al mundo digital creando una tienda en línea optimizada para atraer nuevos clientes. Con nuestras estrategias, ampliamos tu alcance más allá de las recomendaciones, ayudándote a generar más ventas con menos esfuerzo."},{"pregunta":"¿Qué beneficios obtengo al digitalizar mi negocio con WebGo?","respuesta":"Al digitalizar tu negocio con WebGo, obtienes un sitio web fácil de manejar que atrae más clientes y aumenta tus ventas. No necesitas preocuparte por la gestión, ya que hacemos todo el trabajo pesado por ti. ¡Solo disfruta de los resultados!"},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo puede WebGo solucionar eso?","respuesta":"WebGo se encarga de todo lo relacionado con tu sitio web, desde el diseño hasta el mantenimiento. Tú solo necesitas enfocarte en tu negocio, mientras nosotros aseguramos que tu presencia online funcione de manera eficiente y efectiva."},{"pregunta":"¿Qué hace diferente a WebGo de otras empresas de diseño web?","respuesta":"WebGo se especializa en ayudar a pequeños negocios como el tuyo a digitalizar sus ventas con soluciones personalizadas y fáciles de usar. Nos enfocamos en resultados tangibles, asegurando que tu inversión valga la pena desde el primer día."},{"pregunta":"¿Cómo puede un sitio web de WebGo generar ventas automáticamente?","respuesta":"Con WebGo, tu sitio web está diseñado para atraer y convertir visitantes en clientes automáticamente. Utilizamos las mejores prácticas de SEO y diseño intuitivo para asegurarnos de que tu negocio destaque en línea y venda incluso mientras duermes."}]} />
<BookAppointment 
                      heading="Transforma Recomendaciones en Ventas Online" 
                      description="Descubre cómo WebGo puede digitalizar tu negocio fácilmente y captar clientes online sin complicaciones. No pierdas más tiempo, ¡contáctanos ahora!"
                      formPostUrl="api/contact-us"
                      projectId="RgTKgt3smSM85oZTjI9BZJftSyb2"
                    />
<Footer />
    </main>
  );
}
