import React from 'react';
import styles from '../index.css'
import { connect } from 'dva'

const HomePage = ({ count, dispatch }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
};

HomePage.propTypes = {
};

export default connect(({ count })=>({ count }))(HomePage);
