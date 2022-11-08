import React from "react";
import { useLocation } from "react-router-dom";
import '../_config/global.scss'

type PageProps = {
	children: React.ReactNode,
};

const PageContainer = (props: PageProps) => {
	const location = useLocation()
	
	const style = {
		background: '#ffffff'
	}


	if (location.pathname === "/change-password/successSMS" || 
			location.pathname === "/card-address/success" || 
			location.pathname === "/change-password/successEmail") {
    style.background = '#050D40';
  } else  {
    style.background = '#ffffff';
	}

	return (
		<div id="page-container" style={style}>{props.children}</div>
		)
	}
	
	export default PageContainer;