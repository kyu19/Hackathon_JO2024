import { useState } from 'react'
import { Typography } from '@mui/material'

function Visualisations() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography color={"#d6c278"}>
       <div class="JO"> 
          <h3>La Répartition des Jeux Olympiques par Pays</h3>
          <p>
          Depuis leur renaissance moderne en 1896, les Jeux Olympiques (JO) ont été accueillis par divers pays à travers le monde, offrant à chaque nation une opportunité unique de briller sur la scène mondiale. Cependant, la répartition des Jeux n'a pas été équitable, certains pays ayant eu l'honneur de les organiser plus fréquemment que d'autres.<br/>

          Les États-Unis dominent largement cette répartition avec un total de huit éditions des Jeux Olympiques organisées. Ce nombre inclut à la fois les Jeux d'été et d'hiver, reflétant l'infrastructure sportive robuste et la capacité logistique du pays à accueillir des événements de cette envergure. <br/>

          La répartition des Jeux Olympiques par pays met en lumière à la fois les inégalités et la diversité des hôtes olympiques. Alors que certaines nations reviennent fréquemment en tant qu'hôtes, d'autres n'ont eu qu'une seule opportunité de briller. Cette variété dans l'accueil des JO enrichit le patrimoine culturel et sportif mondial, chaque édition apportant son lot de nouveautés et de souvenirs impérissables. Toutefois, cela a tendance à changer, comme en témoigne l'Amérique du Sud, qui a pour la première fois accueilli les JO en 2016 à Rio de Janeiro, avec :

          <blockquote> • Un total de 5 739 athlètes <br/> 

              • 199 pays participants <br/>

              • 32 sports différents représentés <br/>

              • 214 épreuves différentes <br/>
          </blockquote>

          Cette évolution indique une volonté d'élargir la portée géographique des Jeux et d'inclure davantage de régions dans cette célébration mondiale du sport. 
          </p>
          <img src='./nbJOPays.png'></img>
        </div>
        <div class="top3"> 
          <h3>Pourquoi un Top Trois Régulier aux JO ? </h3>
          <p>
            La domination de la Russie, de la Chine et des États-Unis aux Jeux Olympiques s'explique par plusieurs facteurs clés. Ces nations investissent massivement dans le sport, combinant financements publics et privés. Les États-Unis bénéficient de l'appui des universités avec des installations de classe mondiale et des bourses sportives. La Chine a instauré des programmes sportifs nationaux intensifs depuis les années 1980, tandis que la Russie continue de soutenir le sport avec des fonds étatiques et des infrastructures sophistiquées. <br/>

            Avec leurs grandes populations, ces pays disposent d'un vaste bassin de talents, appuyés par des systèmes efficaces de détection et de développement, comme les académies sportives en Chine et les centres de formation spécialisés en Russie. Leurs infrastructures sportives de pointe, incluant des technologies avancées pour améliorer les performances, permettent un entraînement optimal des athlètes. <br/>

            La culture du sport est profondément enracinée dans ces nations. Aux États-Unis, le sport est fortement valorisé et médiatisé. En Chine, les succès sportifs sont une source de fierté nationale, et en Russie, ils sont liés à la gloire nationale. Enfin, ces pays offrent un soutien complet à leurs athlètes, incluant entraînements intensifs, soins médicaux et soutien psychologique, ce qui leur permet de produire des champions capables de remporter des médailles dans de nombreuses disciplines olympiques. Ces nations excellent notamment dans des sports prédominants des JO tels que l'athlétisme, la natation, la lutte, l'aviron, la boxe, la gymnastique artistique, le tir, le canoë sprint, la voile et l'haltérophilie.
          </p>
        </div>
        <div class="performance"> 
          <h3>Les Performances de la France aux Jeux Olympiques </h3>
          <img src='./EvolutionMedailleFranceParAn.png'></img>
          <p>
            Malgré des éditions parfois décevantes, la France a su démontrer sa force et sa résilience. Par exemple, les Jeux Olympiques de Rio en 2016 ont été une réussite notable pour la France, qui a remporté un total de 42 médailles, dont 10 en or. En revanche, les Jeux Olympiques de Londres en 1948 ont été moins fructueux, avec seulement 19 médailles au total, dont 10 en or, mais moins de médailles d'argent et de bronze par rapport à d'autres éditions.<br/> 

            La France a connu son plus grand succès olympique aux Jeux Olympiques de Paris en 1900, remportant 101 médailles au total (bien que cette édition ait été exceptionnelle en termes de nombre d'épreuves et de médailles disponibles). À l'opposé, les Jeux Olympiques de Saint-Louis en 1904 ont été parmi les moins fructueux pour la France, avec seulement 11 médailles au total. 
          </p>
          <img src='./franceJO.png'></img>
        </div>
        <div class="JO1900"> 
          <h3>Les Jeux Olympiques de Paris 1900 : Une Première pour les Femmes </h3>
          <p>
            Les Jeux Olympiques de Paris en 1900 marquent une étape historique dans le monde du sport : pour la première fois, les femmes ont été autorisées à participer. Cette édition des Jeux, intégrée à l'Exposition Universelle, a ouvert ses portes à 22 femmes parmi les 997 athlètes. Elles ont concouru dans cinq sports : le tennis, la voile, le croquet, l'équitation et le golf. Cette inclusion, bien que limitée, a jeté les bases d'une plus grande participation féminine aux compétitions sportives internationales, et a été une avancée significative vers l'égalité des sexes dans le sport. 
          </p>
        </div>
        <div class="participants"> 
          <h3>Répartition Homme/Femme des Participants aux Jeux Olympiques  </h3>
          <p>
            Depuis les premiers Jeux Olympiques modernes en 1896, où seules les compétitions masculines étaient au programme, la participation des femmes aux JO a considérablement évolué. Les Jeux Olympiques de Paris en 1900 ont été un tournant majeur, marquant la première participation des femmes à cette compétition prestigieuse. Depuis, la répartition homme/femme des participants n'a cessé de progresser vers une parité presque atteinte aujourd'hui. Cette évolution reflète les efforts continus pour promouvoir l'égalité des sexes dans le sport, assurant que les athlètes, quel que soit leur genre, aient la possibilité de concourir et de briller sur la scène olympique mondiale. 
          </p>
          <img src='./EvolutionGenreJO.png'></img>
        </div>
      </Typography>
      
      <br/>
      <br/>

      
    </>
  )
}

export default Visualisations
