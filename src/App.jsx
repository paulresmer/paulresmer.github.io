import { useState } from 'react'
import reactLogo from './assets/react.svg'
import kiki from '../src/assets/kiki.png'
import './App.css'
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='page'>
        <div>
          <h1 class='name'>paul resmer</h1>
          <p class='routes'><a href="https://paulresmer.github.io">home</a> | <a href="https://github.com/paulresmer">git</a> | <a
            href="https://www.linkedin.com/in/paulresmer/">linkedin</a> | <a href="#contact">contact</a></p>
        </div>
        <div class='haha'>
          <a href="https://github.com/paulresmer" target="_blank">
            <img src={kiki} className="logo" alt="Vite logo" />
          </a>
          <div class='about'>
            <h3>about me</h3>
            <p class='body'>
              fan of cats. cs @ cornell
              <br /> average <a
                href="https://open.spotify.com/user/l2461mtddjyawb7hv9jjjoe57?si=83f158a73ffc4c2b" target="_blank">music </a>
              / <a href="https://letterboxd.com/bubbybox88/" target="_blank">movie</a> / <a
                href="https://www.kcet.org/shows/the-migrant-kitchen/kato-chef-jon-yaos-top-12-places-to-eat-in-the-san-gabriel-valley">food </a>
              enjoyer
              <br />
              aspiring to be employed in the Near Future
              <h4>projects</h4>
              <a href="https://paulresmer.github.io/basic.ify/" target="_blank">basic.ify</a> - a web app that allows Spotify users to
              <br /> examine the uniqueness of their music tastes.
              <br /><br /> <a href="https://github.com/evelynhs/Nest.rec/" target="_blank">nest.rec</a> - a security app that uses AI
              <br /> to recognize and log detected human figures.
              <br /> compatible with Google Nest®.
              <br /><br /> <a href="https://github.com/paulresmer/ocaml-db" target="_blank">ocaml-db</a> - a functionally-implemented
              <br /> database that supports the use of SQL commands.
              <br /><br /><a href="https://github.com/paulresmer/TagAlong/" target="_blank">TagAlong</a> - a web app that matches
              <br /> college students with long-distance rideshare hosts. (WIP)

            </p>

            <p class='body'>

            </p>
          </div>
        </div >
        <div class='card' id="contact">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            {count} clicks wasted
          </button> */}
          <p>
            email me! pgr39@cornell.edu
          </p>
        </div>
        <p className="read-the-docs">
          image property of 株式会社スタジオジブリ. all rights reserved.
        </p>
      </div>
    </>
  )
}

export default App
