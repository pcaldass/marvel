import React from "react";
import styles from './Description.module.css'

export default function  Description(props){
  if(props.description === '' || props.description === null) {
    return (
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore eius repudiandae molestias delectus ratione! Omnis quae laborum voluptates temporibus facere veniam itaque, tempora harum odio officiis repellat adipisci modi?
      </p>
    )
  } else {
    return (
      <p className={styles.description}>
        {props.description}
      </p>
    )
  }
}