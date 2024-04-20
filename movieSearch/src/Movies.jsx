import React from 'react'

const Movies = ({ moviesList }) =>
{
   
  return (
		<div className='Movies'>
			{moviesList &&
				moviesList.map((movie) => (
					<div >
						<img
							src={movie.Poster}
							alt={movie.Title}
                            width='300'
                            height='300'
						/>
						
							<h3>{movie.Title}</h3>
					
						<p>Released: {movie.Year}</p>
					</div>
				))}
		</div>
	)
}

export default Movies