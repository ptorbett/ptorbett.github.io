<html>
  <head>
    <title>Patrick Torbett</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/bootstrap/bootstrap.min.js"></script>
    <script type="text/javascript" src ="js/jExpand.js"></script>
    <script>
      $(document).ready(function() {
        $("#classes").jExpand()
      } );
    </script>
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-40187920-1']);
      _gaq.push(['_trackPageview']);

     (function() {
       var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
       ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
     })();
    </script>
  </head>
  <body>
    <div id="header">
      <h1 id="name">Patrick Torbett</h1>
    </div>
    <ul class="nav nav-tabs">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li class="active">
        <a href="#">UCSD Coursework</a>
      </li>
    </ul>
    <div id="content">
      <div class="alert alert-info" style="text-align: center">
        Click on a class to toggle its UCSD course description
      </div>
      <table class="table" id="classes" border="1" cellspacing="0">
        <tr class="tableHeader">
          <th width="15%">Name</th>
	  <th width="60%">Title</th>
          <th width="20%">Date</th>
          <th width="25%">Instructor(s)</th>
          <th width="10%">Units</th>
        </tr>
      <?php
        if( file_exists( 'xml/Classes.xml' ) )
        {
          $xml = simplexml_load_file( 'xml/Classes.xml' );
        }
        else
        {
          exit( 'Failed to open Classes.xml.' );
        }
        foreach( $xml->Course as $Course )
        {
          $department  = $Course->Name->Department;
          $number      = $Course->Name->Number;
          $title       = $Course->Title;
          $quarter     = $Course->Date->Quarter;
          $year        = $Course->Date->Year;
          $instructors = $Course->Instructors;
          $description = $Course->Description;
          $units       = $Course->Units;
          echo "<tr>";
          echo "  <td class=\"course\">$department $number</td>";
          echo "  <td>$title</td>";
          echo "  <td>$quarter $year</td>";
          echo "  <td>";
          foreach( $instructors->Professor as $prof )
          {
            $firstName = $prof->First_Name;
            $lastName  = $prof->Last_Name;
            echo "    $firstName $lastName";
          }
          foreach( $instructors->Lecturer as $prof )
          {
            $firstName = $prof->First_Name;
            $lastName  = $prof->Last_Name;
            echo "    $firstName $lastName";
          }
          echo "  </td>";
          echo "  <td class=\"units\">$units</td>";
          echo "</tr>";
          echo "<tr class=\"desc\">";
          echo "  <td class =\"descD\" width=\"15%\">Description</td>";
          echo "  <td colspan=\"4\" width=\"85\">$description</td>";
          echo "</tr>";
        }
      ?>
      </table>
    </div>
  </body>
</html>
