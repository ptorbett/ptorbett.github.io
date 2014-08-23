/**
 * Creates a blurb about the person given some facts about themselves.
 */
function makeBlurb(name, major, college, year, funFact) {
	var blurb = "Hi, my name is " + name + ". I am a " + major + " major in " + college + " College in my " +
	year + " year. ";
	return blurb;
}
function getName() {
	return $("#name").text();
}
function getBasicInfo( id ) {
	var rawString = $( "#" + id ).text();
	var colonIndex = rawString.indexOf( ":" );
	var result = rawString.substring( colonIndex + 2 );
	return result;
}
function getMajor() {
	var rawString = $("#major").text();
	var colonIndex = rawString.indexOf( ":" );
	var result = rawString.substring( colonIndex+2 );
	return result;
}
function getBlurb() {
	return makeBlurb(
		getName(),
		getBasicInfo("major"),
		getBasicInfo("college"),
		getBasicInfo("year")
	);
}