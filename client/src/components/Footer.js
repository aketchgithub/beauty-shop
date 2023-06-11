
import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
	return (
		<>
			<div className="flex flex-col justify-center items-center shadow-lg text-center  p-5 bg-pink-00">
				<h1 className=" text-pink-500 font-semibold">
					© 2023 All rights reserved | Built with ❤ ©  {" "} 
					<span className="hover:pink font-semibold cursor-pointer">
						VEEK{" "} 
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;

