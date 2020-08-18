import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container } from "shards-react";

import "./index.css";

import Chat from "chat/Chat";

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quod
      corporis ipsam, enim esse rem deserunt eveniet placeat, excepturi quaerat
      alias! Dolores eius ullam nostrum id et laudantium nam ratione. Sed
      similique asperiores hic quas sint ipsa a nihil aspernatur nesciunt
      dolore, quod nemo architecto natus tempore minus voluptatum facilis
      reiciendis? Fugit quia commodi voluptate autem beatae odio ab dignissimos
      dolores fuga nulla, consequuntur dolorem quidem ex saepe quibusdam aut
      veritatis nostrum temporibus earum id sed quisquam recusandae culpa
      quaerat. Quasi explicabo iusto molestias. Asperiores veritatis non vero
      quae hic, inventore veniam ducimus dolorum doloremque nihil laudantium
      architecto quis magnam?
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam minima
      vero temporibus laudantium. Ad, sed sunt ullam quasi esse fugit porro
      earum, illum eos enim consectetur corporis recusandae ex quae praesentium
      dicta non. Aut tempore laudantium nesciunt quod quam ut ex fuga quaerat
      facilis dicta, minima nihil rem enim soluta aliquam, distinctio atque?
      Odit, quia illo ex vero provident, non laborum omnis temporibus dolorem
      cupiditate consectetur asperiores quis iure, culpa delectus ratione. Esse
      minus, modi dicta sunt id laboriosam doloribus quis accusamus, quidem
      delectus dolorum deserunt molestias quaerat cupiditate, unde nihil
      nostrum. Aperiam, sapiente animi deleniti quo repellendus dolore iure.
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
