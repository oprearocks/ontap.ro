import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import { useAuth } from "../lib/use-auth"
import Image from "../components/image"
import SEO from "../components/seo"
import bear from "../images/bear.jpg"
import seals from "../images/seals.jpg"

const DashboardPage = () => (
  <Layout>
    <SEO title="Welcome to the OnTap Dashboard" />
    <div className="max-w-5xl m-auto font-mono">
      <div className="text-center my-20">
        <h3 className="leading-tight text-3xl">Salut.</h3>
        <h2 className="leading-tight text-5xl font-bold">
          Urăști apometrele?
          <br />
          Și eu.
        </h2>
        <img src={bear} className="w-full inline-block m-auto my-10" />
        <p className="text-xl text-left max-w-2xl m-auto">
          De fapt, nu urăsc apometrele ci faptul că o dată pe lună trebuie să
          stau ghemuit pe sub chivetă, cu lanterna sau cu telefonul, să citesc
          indecșii. <br />
          Apoi trebuie să-i notez, să-i transcriu pe formularul de raportare și
          să-mi calculezi consumul.
          <br />
          Așa că am creat OnTap.
        </p>
      </div>
      <div className="text-left my-20">
        <h2 className="leading-tight text-5xl font-bold">
          OnTap te scapă de privirile vecinilor care sunt "la zi".
        </h2>
        <p className="text-xl text-left max-w-2xl">
          N-am timp. Serios, nu am timp să stau răsturnat pe sub chiuvete să
          citesc amărâtele alea de cifre. De fapt, ce m-a descurajat întotdeauna
          cel mai tare n-a fost citirea efectiva. A fost procesul absolut manual
          si neadaptat vremurilor, prin care se face raportarea.
        </p>
        <img src={seals} className="w-full inline-block m-auto my-10" />
        <p className="text-lg text-left max-w-2xl m-auto">
          Obisnuiam să țin evidența consumului de apă într-un carnețel special.
          Dar acesta ajungea destul de repede să devină irelevant deoarece dacă
          omiteam să raportez consumul 2 luni la rând, pierdeam totul. Ulterior,
          mi-am făcut un fișier Excel unde îmi înregistram indecșii. Și atunci
          mi-a venit ideea să creez o aplicație care să imite acel fișier excel
          și care să ofere funcționalitatea pentru mai mulți oameni.
        </p>
      </div>
      <div className="text-center my-20">
        <h2 className="text-3xl">
          Dacă și tu ai aceleași probleme existențiale..
        </h2>
        <h2 className="text-5xl font-bold">
          <Link to="/signup" className="underline">
            Înregistrează-te, acum.
          </Link>
        </h2>
      </div>
    </div>
  </Layout>
)

export default DashboardPage
