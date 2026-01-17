import React from 'react'
import PlayerInfo from './_components/player-info'
import PlayerRating from './_components/player-rating'
import GroundField from './_components/ground-field'
import HighlightsVideo from './_components/highlights-video'
import DefensiveStats from './_components/defensive-stats'
import Fouls from './_components/fouls'
import NationalTeam from './_components/national-team-career'
// import AttackingStats from './_components/attacking-stats'

interface PlayerProfilePageProps {
  params: { id: string }
}

const PlayerProfilePage = ({ params }: PlayerProfilePageProps) => {
  return (
    <div className="h-min-screen bg-white bg-[linear-gradient(105.34deg,_rgba(177,174,255,0.24)_9.41%,_rgba(255,255,255,0.24)_49.41%,_rgba(176,167,255,0.24)_100.83%)]">
      <PlayerInfo id={params?.id} />
      <div className='container grid grid-cols-1 md:grid-cols-5 gap-6 md:px-0 pb-6'>
        <div className="md:col-span-3">
          <PlayerRating />
        </div>
        <div className="md:col-span-2">
          <GroundField />
        </div>
      </div>


      {/* national team */}
      <section>
        <NationalTeam id={params?.id} />
      </section>




      {/* defensive stats section  */}
      <section>
        <DefensiveStats id={params?.id} />
      </section>

      {/* Attacking stats section  */}
      {/* <section>
        <AttackingStats id={params?.id}/>
      </section> */}

      {/* defensive stats section  */}
      <section>
        <Fouls id={params?.id} />
      </section>

      {/* defensive stats section  */}
      {/* <section>
        <DefensiveStats id={params?.id} />
      </section> */}

      {/* highlight video  */}
      <section>
        <HighlightsVideo id={params?.id} />
      </section>

    </div>
  )
}

export default PlayerProfilePage