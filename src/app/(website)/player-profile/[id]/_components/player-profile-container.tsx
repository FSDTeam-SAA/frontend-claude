"use client"

import React from 'react'
import PlayerInfo from './player-info'
// import PlayerRating from './player-rating'
// import GroundField from './ground-field'
import NationalTeam from './national-team-career'
// import TransferHistory from './transfer-history'
// import DefensiveStats from './defensive-stats'
// import Fouls from './fouls'
// import LastPlayerReport from './last-player-report'
// import HighlightsVideo from './highlights-video'
import { useQuery } from '@tanstack/react-query'
import { UserProfileApiResponse } from './player-data-type'

const PlayerProfileContainer = ({id}:{id:string}) => {

   const { data, isLoading, isError, error } = useQuery<UserProfileApiResponse>({
        queryKey: ["profile-info", id],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/detail/${id}`)
            return res.json();
        },
    })

    console.log(data)

  return (
    <div>
         <PlayerInfo data={data?.data } isLoading={isLoading} error={error} isError={isError} />


      {/* <div className='container grid grid-cols-1 md:grid-cols-5 gap-6 md:px-0 pb-6'>
        <div className="md:col-span-3">
          <PlayerRating id={params?.id}/>
        </div>
        <div className="md:col-span-2">
          <GroundField id={params?.id} />
        </div>
      </div> */}


      {/* national team */}
      <section>
        <NationalTeam data={data?.data } isLoading={isLoading} error={error} isError={isError} />
      </section>

      {/* Transfer History */}
      {/* <section>
        <TransferHistory id={params?.id} />
      </section> */}




      {/* defensive stats section  */}
      {/* <section>
        <DefensiveStats id={params?.id} />
      </section> */}

      {/* Attacking stats section  */}
      {/* <section>
        <AttackingStats id={params?.id}/>
      </section> */}

      {/* fouls section  */}
      {/* <section>
        <Fouls id={params?.id} />
      </section> */}

       {/* last player report section  */}
      {/* <section>
        <LastPlayerReport id={params?.id} />
      </section> */}

      {/* defensive stats section  */}
      {/* <section>  
        <DefensiveStats id={params?.id} />
      </section> */}

      {/* highlight video  */}
      {/* <section>
        <HighlightsVideo id={params?.id} />
      </section> */}

      
    </div>
  )
}

export default PlayerProfileContainer