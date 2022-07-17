import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';


function Post (Props) {
    const [curtir, setCurtir] = useState(false);

    function like () {
        if ( curtir === false ) {
            setCurtir(true)
        }
    
        if ( curtir === true) {
            setCurtir(false)
        }
    }

    
    const HeartLike = styled.div`
        color: ${curtir === true ? 'red' : ''};
    }
    `

    return (
        <div onClick={like} class="post">
            <div class="topo-post">

                <div class="perfil-post">
                    <img class="redondo" src={Props.perfilPost} alt=""/>
                    <h3>{Props.nomePerfil}</h3>
                </div>

                <ion-icon id="config" name="ellipsis-horizontal-outline"></ion-icon>

            </div>

            <img id="img-post" src={Props.postImg} alt=""/>

            <div class="bot-post">

                <div class="lado-esquerdo">

                    <HeartLike>
                        <ion-icon onClick={like} class="heart-like" name={curtir === false ? "heart-outline" : "heart"}></ion-icon>
                    </HeartLike>
                    
                    <ion-icon name="chatbubble-outline"></ion-icon>                            
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon id="lado-direito" name="bookmark-outline"></ion-icon>
                </div>

                <div class="curtidas">
                    <img class="redondo" src={Props.curtidasFoto} alt="perfil de quem curtiu"/>
                    <h3>Curtido por <h2>{Props.usuarioCurtida}</h2> e <h2>outras 101.523 pessoas</h2>
                    </h3>
                </div>

            </div>
        </div>
    )
}

//let video = [<iframe width="357" height="634" src="https://www.youtube.com/embed/8UbqdGPgMLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]

export default function Posts () {
    const postInfo = [
        {
            perfilPost: "https://pbs.twimg.com/profile_images/1482633832352436226/ifm_B5vA_400x400.jpg",
            nomePerfil: "youngk_pics",
            postImg: "https://c.tenor.com/m-5d3ca7uskAAAAM/young-k-youngk-love.gif",
            curtidasFoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxHSxUyG0S1_kfsN9FevmKL6jsP1BXnsuZw&usqp=CAU",
            usuarioCurtida: "cadelinha_do_youngk"
        },
        {
            perfilPost: "https://i.pinimg.com/736x/cb/44/f9/cb44f97292e5b62c2eba9d6e1dbd5c8f.jpg",
            nomePerfil: "meowed",
            postImg: "https://thumbs.dreamstime.com/b/retrato-bonito-do-gato-foto-quadrada-105311158.jpg",
            curtidasFoto: "https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg",
            usuarioCurtida: "janice"
        },
        {
            perfilPost: "https://pbs.twimg.com/profile_images/1482633832352436226/ifm_B5vA_400x400.jpg",
            nomePerfil: "youngk_pics",
            postImg: "https://c.tenor.com/0Wcflra2LjwAAAAd/day6-day6young-k.gif",
            curtidasFoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxHSxUyG0S1_kfsN9FevmKL6jsP1BXnsuZw&usqp=CAU",
            usuarioCurtida: "cadelinha_do_youngk"
        },
        {
            perfilPost: "https://i.pinimg.com/236x/f0/22/b9/f022b96561ded8c929f89f8cd2937366--creeper-lovely-complex.jpg",
            nomePerfil: "lovecom_memes",
            postImg: "http://i.imgur.com/mwrdtI5.jpg",
            curtidasFoto: "https://i.pinimg.com/736x/bb/f1/52/bbf152b1d1b28fb1dc64822c20fabaeb.jpg",
            usuarioCurtida: "risalover"
        },
        {
            perfilPost: "https://preview.redd.it/6nnj79a0csp61.jpg?width=400&format=pjpg&auto=webp&s=9265025f6b208ac64dc2412f809872e8c6b2099d",
            nomePerfil: "day6kilogram",
            postImg: "https://i0.wp.com/colorcodedlyrics.com/wp-content/uploads/2021/04/DAY6-The-Book-of-Us-Negentropy-Chaos-swallowed-up-in-love.jpg?fit=600%2C600&ssl=1",
            curtidasFoto: "https://cf.shopee.co.id/file/4e40dcdedb4ef28313a1acae19790a89",
            usuarioCurtida: "day6sday"
        }
    ]

 
    return (
    <div class = "Posts">
        
       {postInfo.map(info => <Post perfilPost={info.perfilPost} nomePerfil={info.nomePerfil} postImg={info.postImg} curtidasFoto={info.curtidasFoto} usuarioCurtida={info.usuarioCurtida} />)}

    </div>
    )
}

