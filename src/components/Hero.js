import { Button } from "react-bootstrap";

export default function Hero() { 
	return ( 
	<section 
		id="hero"
		className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]"> 
		<div className="flex-1 flex flex-col justify-center items-center gap-5"> 
		<div>  
			<h2 style={{fontFamily: "Tahoma"}} className="text-center text-stone-50 text-5xl font-bold"> 
			My Personal Portfolio
			</h2> 
		</div> 
		{<p style={{fontFamily: "Tahoma"}} className="text-center text-stone-50"> 
			Fresh Graduate | Software Developer
		</p>}
		<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
			<Button className="px-1 py-1 bg-gray-400 text-white font-semibold rounded-lg transition-colors duration-200 hover:scale-105">
				Download Resume
			</Button>
		</a>
		<div className="flex gap-4 mt-4">
			<a href="https://www.hackerrank.com/profile/chaitanya_panic1" target="_blank" rel="noopener noreferrer">
				<img src="./assets/hackerrankicon.png" alt="HackerRank" className="mt-2 w-8 h-8 hover:scale-[120%] transition-transform duration-300 ease-in-out filter invert" />
			</a>
			<a href="https://leetcode.com/u/chaitanya985/" target="_blank" rel="noopener noreferrer">
				<img src="./assets/leetcodeicon.png" alt="LeetCode" className="mt-2 w-8 h-8 hover:scale-[120%] transition-transform duration-300 ease-in-out filter invert" />
			</a>
			<a href="https://www.geeksforgeeks.org/user/chaitanya98507/" target="_blank" rel="noopener noreferrer">
				<img src="./assets/gfgicon.png" alt="GeeksforGeeks" className="w-12 h-12 hover:scale-[120%] transition-transform duration-300 ease-in-out filter invert" />
			</a>
		</div>
		</div> 
		<div className="flex-1"> 
		<img src="./assets/img.png"
			alt="img.png"
			 className="w-full h-full bg-cover rounded-full animate-pulse"/> 
		</div> 
		<button 
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
			className="fixed bottom-10 right-10 bg-black text-white p-4 rounded-lg">
			↑
		</button>
	</section> 
	); 
}
