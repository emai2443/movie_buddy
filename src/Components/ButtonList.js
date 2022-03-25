import React from "react";
import Bttn from './Button';

const ButtonList = ({genres,buttonFunction}) => {
    return (
        <div className="genreButtonContainer">
            {
                genres.map((user, i) => {
                    return <Bttn key={i} id={genres[i].id} name={genres[i].name} buttonFunction={buttonFunction} />
                })
            }
        </div>
    )
}
export default ButtonList;