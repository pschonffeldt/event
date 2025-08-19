import H1 from "@/components/h1";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center px-3 pt-36 gap-20">
      <H1>Cocherazo nace con una idea simple:</H1>
      <p
        className="max-w-[800px] mb-12 mt-4 text-2xl lg:text-3xl opacoty-75 text-center
"
      >
        conectar a las personas que necesitan{" "}
        <span
          className="font-bold text-accent italic underline text-center
"
        >
          necesitan
        </span>{" "}
        un espacio de estacionamiento con quienes tienen cocheras disponibles
        <span className="font-bold text-accent text-center talic underline">
          disponibles
        </span>{" "}
        para arrendar.
      </p>
      {/* Dual column section */}
      <section className="flex flex-row min-w-[60vw] max-w-[60vw] gap-20">
        <div className="bg-white/20 text-lg backdrop-blur p-5 w-[45vw] h-[400px] rounded-md border-white/10 border-2">
          {" "}
          {/* Content */}
          <p className="max-w-[800px] text-2xl lg:text-lg opacoty-75 text-left">
            ¿Cómo funciona? Busca tu cochera: explora nuestro repertorio de
            cocheras disponibles en Miraflores. Elige tu zona de interés:
            selecciona el área vecinal más conveniente para ti. Haz tu
            solicitud: completa un formulario simple con tus datos y
            preferencias. Conexión con el dueño: por ahora, tu solicitud llega a
            nuestro equipo y el administrador se encarga de contactarte con el
            propietario de la cochera. De esta forma, mantenemos un proceso
            claro y seguro mientras seguimos trabajando en nuevas
            funcionalidades para que el contacto entre arrendadores y
            arrendatarios sea aún más directo y rápido.
          </p>
        </div>
        <div className="relative h-[400px] w-[45vw] rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur overflow-hidden">
          <Image
            src="/map.png"
            alt="Mapa de zonas en Miraflores"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>
      <section className="flex flex-row min-w-[60vw] max-w-[60vw] gap-20">
        <div className="bg-white/20 text-lg backdrop-blur p-5 w-[45vw] h-[400px] rounded-md border-white/10 border-2">
          <p className="max-w-[800px] text-2xl lg:text-lg opacoty-75 text-left">
            ¿Cómo funciona? Busca tu cochera: explora nuestro repertorio de
            cocheras disponibles en Miraflores. Elige tu zona de interés:
            selecciona el área vecinal más conveniente para ti. Haz tu
            solicitud: completa un formulario simple con tus datos y
            preferencias. Conexión con el dueño: por ahora, tu solicitud llega a
            nuestro equipo y el administrador se encarga de contactarte con el
            propietario de la cochera. De esta forma, mantenemos un proceso
            claro y seguro mientras seguimos trabajando en nuevas
            funcionalidades para que el contacto entre arrendadores y
            arrendatarios sea aún más directo y rápido.
          </p>
        </div>
        <div className="relative h-[400px] w-[45vw] rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur overflow-hidden">
          <Image
            src="/map.png"
            alt="Mapa de zonas en Miraflores"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>
      <section className="flex flex-col items-center px-3 pt-36 gap-20">
        <H1>Déjanos tu mensaje</H1>

        <p className="max-w-[800px] text-2xl lg:text-lg opacoty-75 text-center">
          En Cocherazo conectamos a quienes ofrecen cocheras con quienes las
          necesitan. Si buscas estacionamiento en Miraflores o quieres arrendar
          tu cochera, completa el formulario y nos pondremos en contacto
          contigo.
        </p>
      </section>
      <section className="mb-11 bg-[#7A99C2] p-5 rounded-s">
        <form className="flex flex-col gap-[20px] w-[30vw]">
          {/* <form className="contact-form" onSubmit={handleSubmit}> */}
          <label
            htmlFor="name"
            className="text-[1.1rem] font-bold  no-underline"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            required
            className="min-h-[40px] pl-[5px] text-black"
          />

          <label
            htmlFor="email"
            className="text-[1.1rem] font-bold  no-underline"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tucorreo@ejemplo.com"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="min-h-[40px] pl-[15px] text-black"
          />

          <label
            htmlFor="message"
            className="text-[1.1rem] font-bold  no-underline"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="¿Cómo podemos ayudarte?"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            required
            className="min-h-[40px] pl-[15px] text-black"
          />

          <button
            type="submit"
            className="py-3.5 px-8 text-[1.1rem] bg-[#32415A] text-[var(--color-lightblue)] border-0 rounded-[var(--base-radius)] font-bold cursor-pointer no-underline transition duration-200 ease-in-out"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
}
