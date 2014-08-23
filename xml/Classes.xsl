<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
    <h2>Classes</h2>
    <table border="1">
      <tr class="tableHeader">
        <th>Name</th>
				<th>Title</th>
				<th>Date</th>
				<th>Instructor&#40;s&#41;</th>
				<th>Units</th>
      </tr>
      <xsl:for-each select="Classes/Course">
        <tr>
          <td class="className" width="10%"><xsl:value-of select="Name"/></td>
					<td class="classTitle" width="50%"><xsl:value-of select="Title"/></td>
					<td class="classDate" width="15%"><xsl:value-of select="Date"/></td>
					<td class="classProfessor" width="20%"><xsl:value-of select="Instructors"/></td>
					<td class="classUnits" width="05%"><xsl:value-of select="Units"/></td>
				</tr>
				<tr>
					<td>Description</td>
          <td class="classDescription" colspan="4"  width="90%" ><xsl:value-of select="OfficialDescription"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>