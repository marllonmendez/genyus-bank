interface Components {
	appBar?: JSX.Element | string;
	header?: JSX.Element | string;
	main: JSX.Element | string;
	footer?: JSX.Element | string;
}

const ProcessPageLayout = ({appBar, header, main, footer}: Components) => {
	return(
		<div>
			{ appBar }
			{ header }
			{ main }
			{ footer }
		</div>
		)
	};
	
	export default ProcessPageLayout;