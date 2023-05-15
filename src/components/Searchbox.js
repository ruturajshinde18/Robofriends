import React from 'react';

const Searchbox =({searchfield}) =>{
	return(
     <div>
     <input className="pa3 ba mb3 b--green bg-lightest-blue" type='search' placeholder='search robots' onChange={searchfield} />
     </div>
		);
}


export default Searchbox;