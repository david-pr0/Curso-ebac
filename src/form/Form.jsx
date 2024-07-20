import { useState } from 'react';
import styles from './Form.module.css';
import Table from '../table/Table';

function Form() {

    const [altura, setAltura] = useState([]);
    const [peso, setPeso] = useState([]);
    const [imc, setImc] = useState(null);

    function calculo(e, altura, peso) {
        e.preventDefault();
        const alturaEmMetro = altura / 100;
        const resultado = peso / (alturaEmMetro * alturaEmMetro);
        setImc(resultado)
    }

    return (
        <>
            <form className={styles.form} onSubmit={e => calculo(e, altura, peso)}>
                <div className={styles.formItem}>
                    <label htmlFor="altura">Digite a sua altura em Cm: </label>
                    <input type="number" step="0.1" required name="altura" id="altura" onBlur={e => setAltura(parseFloat(e.target.value))} />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="peso">Digite o seu peso: </label>
                    <input type="number" step="0.1" required name="peso" id="peso" onBlur={e => setPeso(parseFloat(e.target.value))} />
                </div>
                <button type="submit" className={styles.button}>Enviar</button>
            </form>

            <Table imc={imc} />
        </>
    )
}

export default Form