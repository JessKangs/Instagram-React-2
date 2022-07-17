function Recomendado (props) {
    return (
        <div class="recomendado">

                <div class="recom-perfil">
                    <img height="40px" width="40px" class="redondo" src={props.img} alt=""/>
                    <div class="escr-recom">
                        <h3>{props.nome}</h3>
                        <h4>{props.status}</h4>
                    </div>
                </div>

                <div class="seguir-but">
                    <h2>Seguir</h2>
                </div>
            </div>
    )
}

export default function RecomendadosDireita () {
    const listaRecomendados = [
        {
            img: "https://palpitesalheios.files.wordpress.com/2021/09/key-bad-love-image2-092721.jpg",
            nome: "bad.vibes.memes",
            status: "Segue você",
        },
        {
            img:"https://ih1.redbubble.net/image.2948465796.3401/st,small,507x507-pad,600x600,f8f8f8.jpg",
            nome:"chibirdart",
            status:"Segue você"
        },
        {
            img:"https://i.pinimg.com/originals/a8/ec/81/a8ec81c0c392d271e69181f3d04dfc60.jpg",
            nome:"razoesparaacreditar",
            status:"Novo no Instagram"
        },
        {
            img:"https://i.pinimg.com/originals/45/75/a6/4575a68f26e1c9fc0d69945b0d261e3a.png",
            nome:"adorable_animals",
            status:"Segue você"
        },
        {
            img:"https://d.wattpad.com/story_parts/511846646/images/15038f8c5cb0171b832587257494.jpg",
            nome:"smallcutecats",
            status:"Segue você"
        }
    ]

    return (
        <div class="recomendados-direita">

            {listaRecomendados.map(listaR => <Recomendado img={listaR.img}
            nome= {listaR.nome}
            status={listaR.status}/>)}

        </div>
    )
}