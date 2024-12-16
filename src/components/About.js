export default function About() { 
	return ( 
		<section 
			id="about"
			className="px-20 w-full flex flex-col lg:flex-row py-20 
					align-center bg-slate-800 max-w-5xl mx-auto shadow-lg row-5 col-5 mx-auto hover:scale-[102%] rounded-3xl">  
			<div className="flex-1 flex flex-col justify-center 
							items-center gap-10 px-20"> 
				<div> 
					<h2 style={{fontFamily:"Tahoma"}} className="text-stone-50 
								text-4xl font-bold mb-5 pb-2 border-b-[5px] border-indigo-600 gap-10"> 
						About Me
					</h2> 
				</div>  
				<p style={{fontFamily: "Tahoma"}} class="text-center text-stone-50"> Hello! I'm Chaitanya, <br/>I'm seeking an opportunity to contribute my skills and knowledge 
                to a dynamic organization that values innovation and fosters growth. With a strong foundation in programming 
                    languages and a passion for problem-solving, I aim to continuously 
                    learn and grow in the field of software engineering. 
				</p> 
			</div> 
		</section> 
	); 
}
