export const  rgb2hex = (background: any) => {
	background = background.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);

	function hex(x) {
			return ("0" + parseInt(x).toString(16)).slice(-2);
	}

	if(background) return `#${hex(background[1])}${hex(background[2])}${hex(background[3])}`;
}
