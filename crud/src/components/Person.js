import PropTypes from "prop-types";

export const Person = (props) => {
 return(
    <div>
        <h1>Name:{props.name}</h1>
        <h1>Email:{props.email}</h1>
        <h1>Age:{props.age}</h1>
        <h1>This person {props.married?'is':'is not'} Married
        </h1>
        {props.friends.map((friend)=>(
            <h1>{friend}</h1>
        ))}
    </div>
 )
}

Person.propTypes= {
    name:PropTypes.string,
    email:PropTypes.string,
    age:PropTypes.string,
    isMarried:PropTypes.string,
    friends:PropTypes.arrayOf(PropTypes.string),
}