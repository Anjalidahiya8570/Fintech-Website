import React from 'react'
import styles from './MemberContainer.module.css'

const MemberContainer = ({data}) => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((member, index) => (
        <div className={styles.card}>
          <div className={styles.img} style={{ backgroundImage: `url(/member-pics/${member.imgName})` }}></div>
          <div><p>{member.name}</p></div>
          <a href={`mailto:${member.email}`}><i class="fas fa-envelope"></i></a>
          &emsp;
          <a href={member.linkedin}><i class="fab fa-linkedin" style={{color: "rgb(13, 83, 187)"}}></i></a>
        </div>
      ))}
    </div>
  )
}

export default MemberContainer