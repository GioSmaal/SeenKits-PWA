import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {

	const router = useRouter();


  return (
    <div className="w-full">
		<section id="bottom-navigation" className="halfCircle fixed inset-x-0 bottom-0 z-10 bg-text shadow"> 
			<ul id="tabs" className="flex justify-between">
				
				<li className={ router.pathname == "/favourites" 
				? "w-full  justify-center inline-block text-center pt-4"
				: "w-full justify-center inline-block text-center pt-4"}>	
        			<Link href="/favourites">
						<svg xmlns="http://www.w3.org/2000/svg" width="29.416" height="28.054" viewBox="0 0 29.416 28.054" className="inline-block mb-1">
							<path id="favouritesIcon" d="M20.1,17.183l5.409-5.25-7.46-1.1L14.708,4.085l-3.341,6.752-7.46,1.1,5.409,5.25-1.29,7.442,6.682-3.518,6.664,3.518Zm9.316-6.311a1.277,1.277,0,0,1-.46.848l-6.417,6.258,1.521,8.838a2.626,2.626,0,0,1,.018.354q0,.884-.725.884a1.427,1.427,0,0,1-.707-.212l-7.937-4.172L6.771,27.841a1.5,1.5,0,0,1-.707.212.642.642,0,0,1-.556-.257,1.051,1.051,0,0,1-.187-.628,2.89,2.89,0,0,1,.035-.354l1.521-8.838L.442,11.72A1.347,1.347,0,0,1,0,10.871q0-.654.99-.813l8.874-1.29L13.841.725Q14.177,0,14.708,0t.866.725l3.978,8.043,8.874,1.29q.99.159.99.813Z" fill="#f6d80d"/>
						</svg>
					</Link>
				</li>

				<li className={ router.pathname == "/" 
				? "w-full justify-center inline-block text-center pt-2 pb-1"
				: "w-full justify-center inline-block text-center pt-2 pb-1"}>	
        			<Link href="/">
						<svg xmlns="http://www.w3.org/2000/svg" width="31.631" height="31.631" viewBox="0 0 31.631 31.631" className="inline-block mb-1">
							<path id="homeIcon" d="M20.316,9l-12.3,9.841V32.617H16.8V25.587H23.83v7.029h8.786V19.687a1.757,1.757,0,0,0-.659-1.372Zm0-4.5L34.153,15.571a5.272,5.272,0,0,1,1.979,4.114V32.617a3.515,3.515,0,0,1-3.515,3.515H8.015A3.515,3.515,0,0,1,4.5,32.617V18.841A3.515,3.515,0,0,1,5.818,16.1Z" transform="translate(-4.5 -4.5)" fill="#055d89"/>
						</svg>
					</Link>
				</li>

				<li className={ router.pathname == "/collection" 
				? "w-full  justify-center inline-block text-center pt-4"
				: "w-full justify-center inline-block text-center pt-4"}>	
        			<Link href="/collection">
						<svg xmlns="http://www.w3.org/2000/svg" width="30.859" height="28.054" viewBox="0 0 30.859 28.054" className="inline-block mb-1">
							<path id="collectionIcon" data-name="Path 3" d="M28.151,5.805H5.708a1.4,1.4,0,0,0-1.4,1.4V26.846a1.4,1.4,0,0,0,1.4,1.4H28.151a1.4,1.4,0,0,0,1.4-1.4V7.208A1.4,1.4,0,0,0,28.151,5.805ZM5.708,3A4.208,4.208,0,0,0,1.5,7.208V26.846a4.208,4.208,0,0,0,4.208,4.208H28.151a4.208,4.208,0,0,0,4.208-4.208V7.208A4.208,4.208,0,0,0,28.151,3Zm2.805,7.013h2.805v2.805H8.513Zm7.013,0a1.4,1.4,0,1,0,0,2.805h8.416a1.4,1.4,0,1,0,0-2.805Zm-4.208,5.611H8.513V18.43h2.805Zm2.805,1.4a1.4,1.4,0,0,1,1.4-1.4h8.416a1.4,1.4,0,1,1,0,2.805H15.527A1.4,1.4,0,0,1,14.124,17.027Zm-2.805,4.208H8.513V24.04h2.805Zm2.805,1.4a1.4,1.4,0,0,1,1.4-1.4h8.416a1.4,1.4,0,1,1,0,2.805H15.527A1.4,1.4,0,0,1,14.124,22.638Z" transform="translate(-1.5 -3)" fill="#fff" fillRule="evenodd"/>
						</svg>
					</Link>
				</li>
			</ul>
			<div id="underNav" className="halfCircleTop flex bg-lineBlue">
				<span className="text-xs mx-auto pt-2">Home</span>
			</div>
		</section>
	</div>
  );
}

export default NavBar;
