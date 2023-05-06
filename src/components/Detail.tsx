// passing onjects in types aliases for better performance when using types 
// name the types alias as done below (component or any pther name)
// pass onjects in types as done (named data or any other name  same as the prop name )

type Component = {
	data: {
		firstName: string;
		lastName: string;
	};
};
export default function Detail({ data }: Component) {
	return (
		<div>
			{data.firstName} {data.lastName}
		</div>
	);
}
