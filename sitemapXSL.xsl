<?xml version="1.0" encoding="UTF-8"?>
<xs:stylesheet version="1.0" xmlns:xs="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xs:template match="/">
	<html>
		<head>
			<title>Sitemap | Lord of the rings</title>
			<link rel="shortcut icon" href="slike/logo.ico"/>
			<style type="text/css">
				h1{color:#CC9933;}
				body{background-color:#000;font-family:"Arial";color:#CC9933;text-align:center;}
				div{margin:30px auto;height:250px; width:900px;}
				a{color:#CC9933;}
				a:hover{color:#FF0000;}
				thead tr{background-color:#000;color:#CC9933;}
			</style>
			
		</head>
		<body>
	<div>
			<h1><i>Sitemap</i></h1>
		<table  width="900px" height="200px" border="1px">
		<thead>
		<tr>
			<th align="left">Page</th>
			<th align="left">URL</th>
			<th align="left">Last modified</th>
			<th align="left">Change frequency</th>
			<th align="left">Priority</th>
		</tr>
		</thead>
			<xs:for-each select="sitemap:urlset/sitemap:url">
				<tr>
					<td align="left"><xs:value-of select='sitemap:page'/></td>
					<td align="left">
					<xs:variable name="itemURL">
						<xs:value-of select='sitemap:loc'/>
					</xs:variable>
					<a href="{$itemURL}">
						<xs:value-of select="sitemap:loc"/>
					</a>
					</td>
					<td align="left"><xs:value-of select='sitemap:lastmod'/></td>
					<td align="left"><xs:value-of select='sitemap:changefreq'/></td>
					<td align="left"><xs:value-of select='sitemap:priority'/></td>
				</tr>
			</xs:for-each>
		</table>
	</div>
		</body>
	</html>
</xs:template>
</xs:stylesheet>