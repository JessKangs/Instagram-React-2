function Storie (props) {
    return (
        <div class="stories">


                <img class="background" src= "https://upload.wikimedia.org/wikipedia/commons/7/79/Instagram_Stories_ring.svg" alt="borda do storie"/>
                <img class="redondo foto-stories" src={props.fotoPerfil} alt="imagem de perfil" />

                <h3>{props.usuario}</h3>

        </div>
    )
}

export default function Mobile () {
    const listaStories = [
        {
            fotoPerfil: "https://i.pinimg.com/474x/70/56/d7/7056d7fc62f9345b87ec224e12ad39e9--ginger-kitten-ginger-cats.jpg",
            usuario: "9gag"
        },
        {
            fotoPerfil: "https://i.pinimg.com/236x/62/ee/e0/62eee08d28589f947b6b4a67808f42d3.jpg",
            usuario: "meowed"
        },
        {
            fotoPerfil: "https://i0.wp.com/portalkpopbrasil.com/wp-content/uploads/2021/09/Guard-You-young-k.png?fit=811%2C450&ssl=1",
            usuario: "barked"    
        },
        {
            fotoPerfil: "https://www.curiosidades.com.br/wp-content/uploads/2020/09/Gatinho-vestido-de-Pikachu-1.jpg",
            usuario:  "nathanwpyle..."  
        },
        {
            fotoPerfil: "https://noticias.buscavoluntaria.com.br/wp-content/uploads/2019/10/@charles_felizardo.png",
            usuario:  "wawawiwac..."
        },
        {
            fotoPerfil: "https://www.taiyou.fr/an_content/_upload/img-prod/38657/4_1.jpg",
            usuario:  "respondeai"  
        },
        {
            fotoPerfil: "https://i.pinimg.com/originals/ab/21/d5/ab21d5b71ba7b3b74947c3e5656c6aee.jpg",
            usuario:  "filomoderna"
        },
        {
            fotoPerfil: "https://i.pinimg.com/736x/86/14/d4/8614d476baf92a2a40f3168544af7210.jpg",
            usuario: "memeriagourmet"    
        }
    ]

    return (
        
    <div class="mobile">

        <div class="topo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <img height="38px"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="logo instagram"/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>

        <div class="stories-mobile">

            <div class="todos-os-stories">
                        {listaStories.map(lista => <Storie fotoPerfil={lista.fotoPerfil} usuario={lista.usuario}/>)}
            </div>

        </div>

        <div class="menu-bot">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>


    </div>
    )
}

