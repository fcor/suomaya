import React from 'react'
import avatar from '../../assets/img/avatar.png'

const leuro = {
  name: 'John Leuro',
  mail: 'johnleuro@sena.edu.co',
  detail: 'Especialista en logística',
  avatar: avatar
}

const TeamMembers = () => (
  <div className="team-members row">
    <Member member={leuro} />
    <Member member={leuro} />
    <Member member={leuro} />
    <Member member={leuro} />
  </div>
)

const Member = ({ member }) => (
  <div className="member column">
    <img src={member.avatar} alt="avatar" />
    <p className="member-name">{member.name}</p>
    <p className="member-detail">{member.detail}</p>
    <p className="member-detail">{member.mail}</p>
  </div>
)

export default TeamMembers