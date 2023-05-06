//advance props using union in types aliases
 
type stats = {
	status : "loading" | "error" | "success"
}

export default function Status({status}: stats) {
	
    let message
		  if (status === "loading"){
           message = "Loading...";
			}else if (status === "error"){ 
				message = "Error loading";
			}
			else if (status === "success"){ 
				message = "success";
			}

			return (
				<div>
          <h2> Status - </h2>
				</div>
			)
	
}
