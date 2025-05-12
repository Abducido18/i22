import React, { useState, useEffect } from 'react';
import { Home, Search, MapPin, Calendar, Phone, Mail, User, ArrowRight, ChevronDown, BrainCircuit, PhoneForwarded, FileCheck } from 'lucide-react';
import Brain from './assets/icons/brain.png';
import Hands from './assets/icons/hands.png';
import Photo from './assets/icons/photo.png';
import Casa from './assets/casa1.jpg';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import AgentCard from './components/AgentCard';
import Footer from './components/Footer';
import Steps from './components/Steps';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" data-aos="fade-up" className="relative h-screen" style={{ backgroundColor: "white" }}>
       {/*  <div className="absolute inset-0 bg-black/40"></div> */ }
        <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:px-12 md:px-36 lg:px-6">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-bold text-customBlue mb-6">
              i22 <span></span>
              <span className="font-bold text-5xl	sm:text-7xl md:text-7xl lg:text-8xl">
              Inmobiliaria
              </span>
            </h1>
            <p className="w-full sm:max-w-none max-w-[300px] sm:font-light px-2 sm:px-4 text-xs sm:text-xs lg:text-3xl text-gray-600 mb-8 text-center mx-auto">
              Compra y vende con asesoría profesional
            </p>
            <div className="flex justify-center mb-24">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <button className="text-xs sm:text-sm md:text-base lg:text-lg border-2 border-customBlue text-customBlue py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-6 rounded-lg hover:bg-customBlue hover:text-white transition duration-300 w-full">
                  <a href="#vender">Vender</a>
                </button>
                <button className="text-xs sm:text-sm md:text-base lg:text-lg border-2 border-customBlue text-customBlue py-1 sm:py-2 px-2 sm:px-3 md:px-6 rounded-md hover:bg-customBlue hover:text-white transition duration-300 w-full">
                  <a href="https://www.lamudi.com.mx/inmobiliaria/5090dbe2-7dbf-4163-950f-11d3d23eda69">Comprar</a>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="vender" data-aos="fade-down" className="py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 lg:px-10">
          {/* Ahora este div tiene el mismo padding horizontal que tu Navbar */}
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-normal text-gray-800 mb-4">
              ¿Por qué vender con <span className="font-bold text-customBlue">Inmobiliaria i22</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
            <PropertyCard 
              icon= {Brain}
              text="Realizamos una evaluación profesional de tu propiedad para definir el mejor precio de venta, basado en análisis de mercado actual y comparativos reales."
            />
            <PropertyCard 
              icon= {Hands}
              text="Al vender con nosotros, tienes un agente inmobiliario dedicado a tu propiedad, brindándote atención personalizada, seguimiento continuo y asesoría en cada paso."
            />
            <PropertyCard 
              icon= {Photo}
              text="Capturamos lo mejor de tu propiedad con fotografías de alta calidad que destacan sus fortalezas y generan mayor interés entre posibles compradores."
            />
            <PropertyCard 
              icon= {Brain}
              text="Difundimos tu propiedad en los principales portales y sitios especializados para asegurar la máxima visibilidad y acelerar el proceso de venta."
            />

          </div>
          
        </div>
      </section>

      <section data-aos="fade-down" className="py-20 bg-blue-50 px-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 lg:px-10">
          
          <div className="text-center mb-24">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-800 mb-4">
              ¿Cómo vender con <span className="font-bold text-customBlue">Inmobiliaria i22</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10">
            <Steps 
                number='1'
                text="Completa el formulario o llámanos. Un asesor se pondrá en contacto contigo rápidamente."

              />
              <Steps 
                number='2'
                text="Visitamos tu propiedad y realizamos una opinión de valor para fijar el mejor precio."

              />
              <Steps 
                number='3'
                text="Capturamos imágenes de alta calidad que harán que tu propiedad destaque."

              />
              <Steps 
                number='4'
                text="Promocionamos tu inmueble en los principales sitios especializados."

              />

              <Steps 
                number='5'
                text="Coordinamos citas con posibles compradores y te apoyamos en la negociación."
              />
              
            <div className={`mt-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="bg-white text-lg md:text-base lg:text-lg border-2 border-customBlue text-customBlue py-2 md:py-3 px-3 md:px-6 rounded-lg hover:bg-customBlue hover:text-white transition duration-300">
                ¡Empieza Ya!
              </button>
            </div>
          </div>
          
        </div>
        
      </section>


      {/* Services Section */}
      <section data-aos="fade-down" id="servicios" className="py-20 px-6  ">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-customBlue mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explora los diferentes servicios que ofrecemos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-customBlue" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-3">Vendemos tu Propiedad</h3>
              <p className="text-gray-600 mb-4">Nos encargamos de todo el proceso: desde la promoción y búsqueda de compradores hasta el cierre de la venta. Conoce el valor real de tu propiedad y véndela de forma rápida, segura y sin complicaciones.</p>
              <a href="#contacto" className="text-customBlue font-medium flex items-center gap-1 hover:text-customBlueHover transition-all">
                <span>Háblanos sobre tu Propiedad</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600 text-customBlue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compra con Nosotros</h3>
              <p className="text-gray-600 mb-4">Te ayudamos a encontrar la propiedad ideal para ti. Te acompañamos en cada paso: desde la búsqueda hasta la firma, brindándote asesoría personalizada, seguridad y confianza en todo el proceso.</p>
              <a href="https://www.lamudi.com.mx/inmobiliaria/5090dbe2-7dbf-4163-950f-11d3d23eda69" className="text-customBlue font-medium flex items-center gap-1 hover:text-customBlueHover transition-all">
                <span>Mira Nuestro Catalogo</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <User className="h-8 w-8 text-blue-600 text-customBlue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Gestionamos tus Rentas</h3>
              <p className="text-gray-600 mb-4">¿Tienes una propiedad en renta o estás buscando una? Nos encargamos de la promoción, selección de inquilinos y administración para que obtengas el mejor rendimiento sin preocupaciones.</p>
              <a href="#contacto" className="text-customBlue font-medium flex items-center gap-1 hover:text-customBlueHover transition-all">
                <span>Contáctanos</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          
          </div>
        </div>
      </section>

            {/* About Us Section */}
      <section id="nosotros" data-aos="fade-down" className="py-36 bg-white px-6 sm:px-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-customBlue mb-10">¿Quiénes Somos?</h2>
                <p className="text-base text-gray-600 mb-6">En i22 Inmobiliaria conectamos personas con propiedades que representan calidad de vida, inversión y crecimiento. Con más de 15 años de experiencia en el sector y conocimiento del mercado en Veracruz, ofrecemos un servicio inmobiliario basado en confianza, atención personalizada y calidad humana.
                
              </p>
              <p className="text-base text-gray-600 mb-6">Acompañamos a nuestros clientes —familias, inversionistas y propietarios— en cada paso del proceso de compra o venta, con total transparencia,     asesoría profesional y cercanía. Si estás listo para comprar, vender o invertir en Veracruz, en i22 te ayudamos a lograrlo, con visión y seguridad.
              </p>
              <a href="#" className="text-sm md:text-base lg:text-lg border-2 border-customBlue text-customBlue py-2 md:py-3 px-3 md:px-6 rounded-lg hover:bg-customBlue hover:text-white transition duration-300">Más Sobre Nosotros</a>
            </div>

            <div className="relative">
              <img src={Casa} alt="About us" className="rounded-lg shadow-lg w-full h-auto object-cover" />
              <div className="absolute -bottom-6 -left-6 hidden md:block">

              </div>
            </div>
          </div>
        </div>
      </section>
                      
      {/* CTA Section */}
      <section data-aos="fade-down" className="py-20 bg-customBlue px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Griselda Melchor</h2>
              <p className="text-xl text-blue-100 mb-8">Con más de 15 años de experiencia en el mercado inmobiliario de Veracruz, Griselda Melchor, asesora certificada, ha acompañado a cientos de familias e inversionistas a concretar sus metas con confianza y seguridad. </p><p className="text-xl text-blue-100 mb-8">
              Fundó i22 Inmobiliaria con la misión de ofrecer un servicio profesional, transparente y humano, enfocado en lograr resultados reales para quienes compran, venden o invierten.
              </p>
            </div>
            <div className="relative">
              <img src="" alt="Griselda Image" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section data-aos="fade-down" className="py-20 bg-gray-50 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-customBlue mb-4">Conoce a Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">TEXTO AQUÍ</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AgentCard 
              image=""
              name="Chox"
              position="Agente"
              phone="2294342126"
              email="chox@gmail.com"
            />
            
            <AgentCard 
              image=""
              name="Chox"
              position="Agente"
              phone="2294342126"
              email="chox@gmail.com"
            />
            
            <AgentCard 
              image=""
              name="Chox"
              position="Agente"
              phone="2294342126"
              email="chox@gmail.com"
            />
            
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section data-aos="fade-down" id="contact" className="py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">TEXTO</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">          
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Dirección</h4>
                      <p className="text-gray-600">Boca del Río, Veracruz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Teléfono</h4>
                      <p className="text-gray-600">+52 2292655313</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">i22veracruz@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Horario de Atención</h4>
                      <p className="text-gray-600">Lunes - Viernes: 9am - 6pm<br />Sábado: 10am - 4pm<br />Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;