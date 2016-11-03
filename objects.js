var playlist = {artist: "song"};

function updatePlaylist(object, artist, song){
	object[artist] = song
	return object
}

function updatePlaylist(object, artist, song){
	return Object.assign({}, object, {[artist]: song} )
}

function removeFromPlaylist(object, artist, song){
	delete object[artist]
	return object
}