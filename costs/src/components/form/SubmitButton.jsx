import styles from './SubmitButtom.module.css'

const SubmitButtom = ({text}) => {
    return (
        <div >
            <button className={styles.btn}>{text}</button>
        </div>
      );
}
 
export default SubmitButtom;