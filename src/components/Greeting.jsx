/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const Greeting =({name,occupation,alert}) =>{

    console.log()
    return(
        <div>
           <p> my name is {name } I'm a {occupation} </p>
           <button className="bg-blue-500 text-white px-1 py-1 rounded-md" onClick={()=> alert(name)}>click</button>
        </div>
    )
}

Greeting.propTypes = {
    name: PropTypes.string,
    occupation: PropTypes.string,
    alert: PropTypes.func
}
export default Greeting