import React, { Component, Fragment } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1, autor: 'Karina Schindler', foto: 'img/usuario_1.jpg', comentario: 'O modelo de negócios é como a startup gera valor – ou seja, como transforma seu trabalho em dinheiro. Por exemplo, um dos modelos de negócios do Google é cobrar por cada click nos anúncios mostrados nos resultados de busca', time: 5,
        },
        {
          id: 2, autor: 'Leandro Azevedo', foto: 'img/usuario_2.jpg', comentario: 'Se você é um empreendedor que busca atrair investimentos para sua startup, tenha em mente que este é um negócio de risco para investidores. Estruture bem as suas ideias e planos na hora de fazer a apresentação da sua startup.', time: 3,
        },
        {
          id: 3, autor: 'Jéssica Seixas', foto: 'img/usuario_3.jpg', comentario: 'Estive participando como jurado nas bancas de avaliação de startups do Like a Boss, programa do Sebrae que acontece dentro da Campus Party, considerada, como eles mesmo dizem, a maior “experiência” de tecnologia do mundo. Foi minha segunda participação no evento do Sebrae, que ganha cada vez mais corpo e importância, não somente dentro dos movimentos do próprio Sebrae e da Campus Party, mas também no cenário nacional de empreendedorismo, como uma excelente vitrine para novas empresas e ideias.', time: 2,
        },
        {
          id: 4, autor: 'Pedro Santos', foto: 'img/usuario_4.jpg', comentario: 'Sobre acampar na CP, talvez você não seja lá um escoteiro, mas a grande maioria que conheço e que já foi ao evento sente saudade de dormir naquela barraca. Damos até nome de Depressão Pós-Campus! Pode não ser confortável como sua cama, não ser a ducha do seu banheiro! Mas toda vez que voltar do evento, vai sentir saudade do acampamento. É uma aventura, é quase como acampar de verdade mas sem mato, sem mosquitos, sem ursos e fogueira, com luz, com internet, e com outros 8000 vizinhos!', time:1,
        },
      ],
    };
  }


  render() {
    return (
      <Fragment>
        <header>
          <h1>RocketBook</h1>
        </header>

        <div className="container">
          <div className="feeder">
            {
              this.state.posts.map(post => (
                <div key={post.id} className="post">
                  <div className="post-header">
                    <div className="profile-pic"> <img src={post.foto} alt="" /></div>
                    <div className="post-info">
                        <h2>{post.autor}</h2>
                        <span> há {post.time} min </span>
                      </div>
                  </div>
                  <div className="post-content">
                    <p>{post.comentario}</p>
                  </div>
                </div>
                ))
            }
          </div>
        </div>
      </Fragment>
    );
  }
}
