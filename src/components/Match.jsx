import classes from "./Match.module.css";

const Match = ({club, clubImg}) => { 

    return (
        <div className={classes.card}>
            
            <img src={clubImg} alt="competitor" />
            <div className="des">
                <h3>{club}</h3>
            </div>
           
        </div>
    );
}

export default Match;
