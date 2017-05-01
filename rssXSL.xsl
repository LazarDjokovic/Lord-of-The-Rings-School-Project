<?xml version="1.0" encoding="UTF-8"?>
<xs:stylesheet version="1.0" xmlns:xs="http://www.w3.org/1999/XSL/Transform">
	<xs:template match="/">
		<html>
			<head>
			<title>News | Lord of the rings</title>
			<link rel="shortcut icon" href="slike/logo.ico"/>
				<style type="text/css">
				h1{color:#CC9933;}
				body{background-color:#000;font-family:"Arial";color:#CC9933;text-align:center;}
				div{margin:30px auto;height:250px; width:1050px;}
				a{color:#CC9933;}
				a:hover{color:#FF0000;}
				thead tr{background-color:#000;color:#CC9933;}
				</style> 
			</head>
			<body><div>
			<h1><b>News about the movies</b></h1>
				<table  height="200px" width="1100px" border="1px">
					<thead>
						<tr  align="left">
							<th>Title</th>
							<th>Address</th>
							<th>Description</th>
						</tr>
					</thead>
					
					<xs:for-each select="rss/channel/item">
						<tr align="left">
							<td><xs:value-of select="title"/></td>
							<td>
								<xs:variable name="itemURL">
									<xs:value-of select="link"/>
								</xs:variable>
								<a href="{$itemURL}">
									<xs:value-of select="link"/>
								</a>
							</td>
							<td><xs:value-of select="description"/></td>
						</tr>
					</xs:for-each>
				</table>
			</div></body>
		</html>
	</xs:template>
</xs:stylesheet>