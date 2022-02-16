import React from 'react';
import './Team.css';
import { Box } from "@mui/material";
import { TeamCard } from "./TeamCard";
import { ITeamCardProps } from "../../../interfaces/components.interface";
import twitter from '../../../assets/images/links/twitter.svg';
import instagram from '../../../assets/images/links/instagram.svg';

const teamMembers: ITeamCardProps[] = [
    {
        name: 'ernest',
        place: 'HYPEBEARS',
        socials: [
            {
                link: 'https://twitter.com/jpegenthusiast_',
                img: twitter
            },
            {
                link: 'https://instagram.com/ernest.slh',
                img: instagram
            }
        ]
    },
    {
        name: 'ArT',
        place: 'HYPEBEARS',
        socials: [
            {
                link: 'https://twitter.com/therickk',
                img: twitter
            }
        ]
    },
    {
        name: 'XYSquare',
        place: 'HYPEBEARS',
        socials: [
            {
                link: 'https://twitter.com/xy_square',
                img: twitter
            }
        ]
    },
    {
        name: 'Yura',
        place: 'HYPEBEARS',
        socials: [
            {
                link: 'https://twitter.com/yura_elkin',
                img: twitter
            }
        ]
    },
];

const Team = () => {
    return (
      <Box id='#team' className='team' sx={{
          backgroundImage: "url('/images/team/team-bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-400px'
      }}>
          <div className='title_team'>
              <h4>MEET THE <br/> HYPEBEARS TEAM</h4>
          </div>
          <Box sx={{ mt: '5rem', width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Box sx={{
                  display: 'flex',
                  overflowX: 'scroll',
                  '&::-webkit-scrollbar': {
                      display: 'none'
                  }
              }}>
                  {
                      teamMembers.map((member, index) =>
                        <Box key={member.name} sx={{
                            minWidth: '270px',
                            marginX: 2
                        }}>
                            <TeamCard socials={member.socials} name={member.name} place={member.place} index={index}/>
                        </Box>
                      )
                  }

              </Box>
          </Box>
      </Box>

    )
};

export default Team;
