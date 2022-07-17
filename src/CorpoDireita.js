import RecomendadosDireita from './RecomendadosDireita';

export default function CorpoDireita () {
    return (
        <div class="corpo-direita">

            <div class="perfil">
                <img class="redondo" src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&w=1000&q=80" alt=""/>
                <div class="escr-recom" id="perfil-nome">
                    <h3>catanacomics</h3>
                    <h4>Catana</h4>
                </div>
            </div>

            <div class="texto-caixa-recom">
                <h3>Sugestões para você</h3>
                <h2>Ver Tudo</h2>

            </div>

            <RecomendadosDireita />

        </div>
    )
}