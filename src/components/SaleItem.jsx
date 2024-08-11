import classes from "./SaleItem.module.css";

const SaleItem = ({img, avax}) => {

    return(
        <div className={classes.container}>
            
            <section>
                <img src={img} alt="curva" />
            </section>
            <section>
                <form action="">
                    <article>
                        <label htmlFor="number">Cantidad</label>
                        <input type="number" name="number" id="number" required/>
                    </article>
                    <article>
                        <h3>Precio</h3>
                        <h3>{avax} AVAX</h3>
                    </article>
                    <button type="submit">Comprar</button>
                </form>
            </section>
            
            
        </div>
    );
}

export default SaleItem;