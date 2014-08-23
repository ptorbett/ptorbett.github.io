<?php
	if( file_exists( 'Classes.xml' ) ) {
		$xml = simplexml_load_file( 'Classes.xml' );
	}	else {
		exit( 'Failed to open Classes.xml.' );
	}
	foreach( $xml->Course as $Course ) {
		$department = $Course->Name->Department;
		$number = $Course->Name->Number;
		$quarter = $Course->Date->Quarter;
		$year = $Course->Date->Year;
		echo "$department $number - $quarter $year<br/>";
	}
	?>
