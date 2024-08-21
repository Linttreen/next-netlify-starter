import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <div class="top-part">
            <h1 class="title">Caminhos da Yggdrasil</h1>
            <img class="img-tree" src="/images/Design sem nome (21).png" alt="">
            </div>

        <div class="bottom-part">
            <h3>mitologia e realidade</h3>
        </div>
      </Head>

      <main>
        <div class="square0">
            <h2 class="mundos">mitos</h2>
            <div class="links">
                <a class="myth" href="#">lorem ipsum</a><br>
                <a class="myth" href="#">lorem ipsum</a><br>
                <a class="myth" href="#">lorem ipsum</a><br>
                <a class="myth" href="#">lorem ipsum</a><br>
                <a class="myth" href="#">lorem ipsum</a><br>
            </div>
            <a class="mais" href="#">mais</a>
        </div>

        <div class="square1">
            <h2 class="mitos">mitos</h2>
            <div class="links">
                <a class="myth" href="#">lorem ipsum</a><br>
                <a class="myth" href="#">lorem ipsum</a><br>
                <a class="myth" href="#">lorem ipsum</a><br>
                <a class="myth" href="#">lorem ipsum</a><br>
                <a class="myth" href="#">lorem ipsum</a><br>
            </div>
            <a class="mais" href="#">mais</a>
        </div>

        <div class="square2">
            <h2 class="deuses">deuses e criaturas</h2>
            <div class="links-2">
                <a class="gods" href="/odin.html">Odin</a><br>
                <a class="gods" href="#">Frigga</a><br>
                <a class="gods" href="#">Thor</a><br>
                <a class="gods" href="#">Tyr</a><br>
                <a class="gods" href="#">Vidar</a><br>
                <a class="gods" href="#">Frey</a><br>
                <a class="gods" href="#">Freya</a><br>
                <a class="gods" href="#">Loki</a><br>
            </div>
            <a class="mais-2" href="#">mais</a>
        </div>

        <img class="img-2" src="/images/Design sem nome (20).png"></img>


    <div class="third">
        <h2 class="posts">POSTS</h2>

        <div class="post1">
            <a href="#">contexto histórico dos mitos nórdicos</a>
        </div>

        <div class="post2">
            <a href="#">vikings: o que e quem foram?</a>
        </div>

        <div class="post3">
            <a href="#">runas: um guia prático</a>
        </div>

        <div class="post4">
            <a href="#">quem foram os gigantes?</a>
        </div>
    </div>
    
      </main>

      <Footer />
    </div>
  )
}
