import Match from "./match";
import classes from "./MatchList.module.css"

const MatchList = ({arr, gitgut}) => {
    const quack = arr.map((e)=>{
        return <Match key={e.id} club={e.descrip} clubImg={e.pic}/>
    });
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    
    const setGitgut = () => {
        gitgut(true);
    }
    return(
        <>
            <div className={classes.list}>
                <h4>20:00 22/08/27</h4>
                <section className={classes.division}>
                {quack[0]} <h1>VS</h1> {quack[randomNumber]}
                </section>
                <button onClick={setGitgut}>Metaleee</button>
            </div>
        </>
    );
}

export default MatchList;