import * as React from 'react';
import styles from './About.module.scss';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.text}>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Mario and Adrian are the dynamic duo behind the success of Little Lemon restaurant. They
          have a deep love and passion for food, and it shows in the quality and attention to detail
          that they put into every dish. Mario brings his expertise as a seasoned chef, while
          Adrian's background in hospitality ensures that every customer feels welcome and
          well-cared for.
        </p>
      </div>
      <div className={styles.images}>
        <img src='./images/mario-and-adrian-a.png' width={350} height={250} />
        <img src='./images/mario-and-adrian-b.png' width={350} height={250} />
      </div>
    </section>
  );
}

export default About;
