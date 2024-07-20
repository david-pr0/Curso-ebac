import styles from './Table.module.css';

function Table(props) {
    const imc = parseFloat(props.imc).toFixed(1);

    function resultado(imc) {
        if (imc < 18.5) {
            return <p className={styles.tableImportant}>Você está abaixo do peso!</p>;
        } else if (imc >= 18.5 && imc < 25) {
            return <p className={styles.tableImportant}>Você está com o peso ideal!</p>;
        } else if (imc >= 25 && imc < 30) {
            return <p className={styles.tableImportant}>Você está com sobrepeso!</p>;
        } else if (imc >= 30 && imc < 35) {
            return <p className={styles.tableImportant}>Você está com obesidade classe I!</p>;
        } else if (imc >= 35 && imc < 40) {
            return <p className={styles.tableImportant}>Você está com obesidade classe II!</p>;
        } else if (imc >= 40) {
            return <p className={styles.tableImportant}>Você está com obesidade classe III!</p>;
        }
    }

    return (
        <>
            {imc > 1 && (
                <section>
                    <h2 className={styles.title}>Seu IMC é {imc}</h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.tableImportant}>IMC</th>
                                <th className={styles.tableImportant}>Classificação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Menor que 18,5</td>
                                <td>Abaixo do peso normal</td>
                            </tr>
                            <tr>
                                <td>18,5 - 24,9</td>
                                <td>Peso normal</td>
                            </tr>
                            <tr>
                                <td>25,0 - 29,9</td>
                                <td>Excesso de peso</td>
                            </tr>
                            <tr>
                                <td>30,0 - 34,9</td>
                                <td>Obesidade classe I</td>
                            </tr>
                            <tr>
                                <td>35,0 - 39,9</td>
                                <td>Obesidade classe II</td>
                            </tr>
                            <tr>
                                <td>Maior ou igual a 40,0</td>
                                <td>Obesidade classe III</td>
                            </tr>
                            <tr>
                                <td colSpan="2">{resultado(imc)}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            )}
        </>
    );
}

export default Table;
