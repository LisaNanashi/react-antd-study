import React from "react";
import { Result } from "antd";

function ErrorPage(props) {
	return <Result status="404" title="404" subTitle="抱歉, 您访问的页面不存在哦~" />
}

export default ErrorPage;
