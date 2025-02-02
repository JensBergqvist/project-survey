import React from 'react'



const ageGroups = ["5-15", "16-25", "25-35", "36-45", "46-55", "56+"]

const Age = ({age, onAgeChange, onNextChange, onBackChange}) => {
    return (
        <section className="container">
            <h2>How old are you?</h2>
            {ageGroups.map((group) => (
                 <label key={group} >
                     <input
                     className="radiob"
                     type="radio"
                     value={group}
                     onChange={onAgeChange}
                     checked={age === group}
                     />
                     {group}
                 </label>
                ))}
                    
                    <button onClick={onNextChange} className="btn">Finally done!</button>
                    <button className="btn" onClick={onBackChange}>Back</button>
                    
        </section>
    )
}

export default Age